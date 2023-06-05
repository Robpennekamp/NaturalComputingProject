let CPM = require(".\\artistoo-cjs.js")

let config = {
    // Grid settings
    ndim : 2,
    field_size : [650,200],

    // CPM parameters and configuration
    conf : {
        // Basic CPM parameters
        torus : [false,false],				// Should the grid have linked borders?
        seed : 100,                           // Seed for random number generation.
        T : 20,								// CPM temperature       
        // Adhesion parameters:
        J: [[0,20], [0,0]],
        // VolumeConstraint parameters
        LAMBDA_V: [0,50],					// VolumeConstraint importance per cellkind
        V: [0,200],							// Target volume of each cellkind
        // PerimeterConstraint parameters
        LAMBDA_P: [0,2],					// PerimeterConstraint importance per cellkind
        P : [0,180],						// Target perimeter of each cellkind
        // ActivityConstraint parameters
        LAMBDA_ACT : [0,200],				// ActivityConstraint importance per cellkind
        MAX_ACT : [0,20],					// Activity memory duration per cellkind
        ACT_MEAN : "geometric"				// Is neighborhood activity computed as a
                                            // "geometric" or "arithmetic" mean?
    },  

    // Simulation setup and configuration
    simsettings : {
        // Cells on the grid
        NRCELLS : [100,0],						// Number of cells to seed for all
                                                // non-background cellkinds.
        // Runtime etc
        BURNIN : 0,
        RUNTIME : 500,
        //RUNTIME_BROWSER : "Inf",
        
        // Visualization
        CANVASCOLOR : "eaecef",
        CELLCOLOR : ["000000"],
        ACTCOLOR : [true],					// Should pixel activity values be displayed?
        SHOWBORDERS : [false],				// Should cellborders be displayed?
        zoom : 2,							// zoom in on canvas with this factor.

        // Output images
		SAVEIMG : true,					// Should a png image of the grid be saved
		// during the simulation?
		IMGFRAMERATE : 1,					// If so, do this every <IMGFRAMERATE> MCS.
		SAVEPATH : "..\\output\\img",	// ... And save the image in this folder.
		EXPNAME : "BaseCase",				// Used for the filename of output images.
		
		// Output stats etc
		STATSOUT : { browser: false, node: true }, // Should stats be computed?
		LOGRATE : 10							// Output stats every <LOGRATE> MCS.
    }
}

let sim

function initialize(){
    let custommethods = {
            initializeGrid : initializeGrid,
            buildChannel : buildChannel,
            drawBelow : drawBelow
        }
    sim = new CPM.Simulation( config, custommethods )
    sim.C.add( new CPM.PreferredDirectionConstraint( {
        LAMBDA_DIR : [0,100], 
        DIR : [[0,0],[1,0]]
    } ) )
    sim.gm.seedCell(1)
    step()
}

function step(){
    sim.step()
}

function drawBelow(){
    // Set obstacles 
    this.Cim.drawPixelSet( this.channelvoxels, "AAAAAA" ) 
}

function initializeGrid(){
    // add the initializer if not already there
    if( !this.helpClasses["gm"] ){ this.addGridManipulator() }
    this.buildChannel()
}

function buildChannel(){ 
    // FF snel checken om te kijken of we cirkels kunnen maken waar we de cells in kunnen laten spawnen.
    // 		
    // van [0, 0] tot [100, 200]
    //this.channelvoxels = this.gm.makeCircle(  [50, 50], 50, [])

    // Vernauwing
    this.channelvoxels = this.gm.makeCircle(  [450,-115], 200, [])
    this.channelvoxels = this.gm.makeCircle(  [450,315], 200, this.channelvoxels )

    //tumoren
    //this.channelvoxels = this.gm.makeCircle(  [475,150], 25, this.channelvoxels )
    //this.channelvoxels = this.gm.makeCircle(  [450,40], 40, this.channelvoxels )
    //this.channelvoxels = this.gm.makeCircle(  [550,30], 57, this.channelvoxels )


    // Map settings
    this.channelvoxels = this.gm.makePlane( this.channelvoxels, 1, 0 )
	let gridheight = this.C.extents[1]
	this.channelvoxels = this.gm.makePlane( this.channelvoxels, 1, gridheight-1 )
    this.channelvoxels = this.gm.makePlane( this.channelvoxels, 0, 0)
    this.channelvoxels = this.gm.makePlane( this.channelvoxels, 0, 649)

    // Setting #1:

    /*
    this.channelvoxels = this.gm.makeCircle(  [265,100], 50, this.channelvoxels )
    */

    // Setting #2:

    
    //this.channelvoxels = this.gm.makeCircle(  [265,100], 50, this.channelvoxels )
    //this.channelvoxels = this.gm.makeCircle(  [200,30], 20, this.channelvoxels )
    //this.channelvoxels = this.gm.makeCircle(  [200,170], 20, this.channelvoxels )
    

    // Setting #3:
    /*
    const x0 = 180
    const x1 = 280;
    const y0 = 20;
    const y1 = 200;


    for(let x = x0; x <= x1; x += 30){
        for(let y = y0; y <= y1; y += 40){
            this.channelvoxels = this.gm.makeCircle( [x, y], 5, this.channelvoxels)
        }
    }
    */

    
    //this.channelvoxels = this.gm.makeCircle(  [280,70], 7, this.channelvoxels )
    //this.channelvoxels = this.gm.makeCircle(  [200,70], 7, this.channelvoxels )
    


    // Add constraint to add collision
    this.C.add( new CPM.BorderConstraint({
        BARRIER_VOXELS : this.channelvoxels
    }) )
}

initialize()
sim.run()