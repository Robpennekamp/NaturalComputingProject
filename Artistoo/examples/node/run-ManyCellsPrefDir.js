let CPM = require("../../build/artistoo-cjs.js")


/*	----------------------------------
	CONFIGURATION SETTINGS
	----------------------------------
*/
let config = {

	// Grid settings
	ndim : 2,
	field_size : [200,200],
	
	// CPM parameters and configuration
	conf : {
		// Basic CPM parameters
		torus : [true,true],						// Should the grid have linked borders?
		seed : 1,							// Seed for random number generation.
		T : 20,								// CPM temperature
		
		// Constraint parameters. 
		// Mostly these have the format of an array in which each element specifies the
		// parameter value for one of the cellkinds on the grid.
		// First value is always cellkind 0 (the background) and is often not used.

		// Adhesion parameters:
		J: [[0,20,20], 
			[20,20,20], 
			[20,20,20]],
		
		// VolumeConstraint parameters
		LAMBDA_V : [0,50,50],					// VolumeConstraint importance per cellkind
		V : [0,500,200],						// Target volume of each cellkind
		
		LAMBDA_P : [0,2,2],
		P : [0,280,160]
		
		
	},
	
	// Simulation setup and configuration
	simsettings : {
	
		// Cells on the grid
		NRCELLS : [30,30],					// Number of cells to seed for all
		// non-background cellkinds.
		// Runtime etc
		BURNIN : 0,
		RUNTIME : 1000,
		RUNTIME_BROWSER : "Inf",
		
		// Visualization
		CANVASCOLOR : "eaecef",
		CELLCOLOR : ["00FF00","0000FF"],
		ACTCOLOR : [false,false],					// Should pixel activity values be displayed?
		SHOWBORDERS : [true,true],				// Should cellborders be displayed?
		zoom : 2,							// zoom in on canvas with this factor.
		
		// Output images
		SAVEIMG : true,						// Should a png image of the grid be saved
		// during the simulation?
		IMGFRAMERATE : 1,					// If so, do this every <IMGFRAMERATE> MCS.
		SAVEPATH : "output/img/ManyCellsPrefDir",// ... And save the image in this folder.
		EXPNAME : "ManyCellsPrefDir",			// Used for the filename of output images.
		
		// Output stats etc
		STATSOUT : { browser: false, node: true }, // Should stats be computed?
		LOGRATE : 10							// Output stats every <LOGRATE> MCS.

	}
}
/*	---------------------------------- */


let sim = new CPM.Simulation( config, {} )

let pconstraint = new CPM.PersistenceConstraint( 
	{
		// PersistenceConstraint parameters
		LAMBDA_DIR: [0,100,100], 				// PersistenceConstraint importance per ck
		PERSIST: [0,.7,0.2]						// Weight of the persistent direction in the
		// computation of the new direction per cellkind
	} 
)
sim.C.add( pconstraint )







// This is the same as the basic initializeGrid() function, but now we
// also allow each cell to have a small burnin period just after seeding.
function initializeGrid(){
	
	// add the GridManipulator if not already there and if you need it
	if( !this.helpClasses["gm"] ){ this.addGridManipulator() }
	
	
	// CHANGE THE CODE BELOW TO FIT YOUR SIMULATION
	
	let nrcells = this.conf["NRCELLS"], cellkind, i
		
	// Seed the right number of cells for each cellkind
	for( cellkind = 0; cellkind < nrcells.length; cellkind ++ ){
			
		for( i = 0; i < nrcells[cellkind]; i++ ){
			// first cell always at the midpoint. Any other cells
			// randomly.				
			if( i == 0 ){
				this.gm.seedCellAt( cellkind+1, this.C.midpoint )
			} else {
				this.gm.seedCell( cellkind+1 )
			}
			// Burnin for each cell
			for( let b = 0; b < 5; b++ ){
				this.C.monteCarloStep()
			}
		}
	}
}

// Custom drawing function to draw the preferred directions.
function drawCanvas(){
	
	/* This part is the normal drawing function */
	
	// Add the canvas if required
	if( !this.helpClasses["canvas"] ){ this.addCanvas() }
	
	// Clear canvas and draw stroma border
	this.Cim.clear( this.conf["CANVASCOLOR"] )
		
	// Draw each cellkind appropriately
	let cellcolor=this.conf["CELLCOLOR"], 
		nrcells=this.conf["NRCELLS"], cellkind, cellborders = this.conf["SHOWBORDERS"]
	for( cellkind = 0; cellkind < nrcells.length; cellkind ++ ){
		
		// draw the cells of each kind in the right color
		if( cellcolor[ cellkind ] != -1 ){
			this.Cim.drawCells( cellkind+1, cellcolor[cellkind] )
		}
			
		// Draw borders if required
		if(  cellborders[ cellkind  ]  ){
			this.Cim.drawCellBorders( cellkind+1, "000000" )
		}
	}
		
	/* This part is for drawing the preferred directions */
	let pdc = this.C.getConstraint( "PersistenceConstraint" )
	let ctx = this.Cim.context(), zoom = this.conf["zoom"]
	let prefdir = ( pdc.conf["LAMBDA_DIR"][ cellkind+1 ] > 0  ) || false
	ctx.beginPath()
	ctx.lineWidth = 2*zoom

	for( let i of this.C.cellIDs() ){
		
		// Only draw for cells that have a preferred direction.
		//if( i == 0 ) continue
		prefdir = ( pdc.conf["LAMBDA_DIR"][ this.C.cellKind( i ) ] > 0  ) || false
		if( !prefdir ) continue
			
		ctx.moveTo( 
			pdc.cellcentroidlists[i][0][0]*zoom,
			pdc.cellcentroidlists[i][0][1]*zoom)
		ctx.lineTo( (pdc.cellcentroidlists[i][0][0]+.1*pdc.celldirections[i][0])*zoom,
			(pdc.cellcentroidlists[i][0][1]+.1*pdc.celldirections[i][1])*zoom)
	}
	ctx.stroke()		
}
	



sim.run()
