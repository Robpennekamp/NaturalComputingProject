let CPM = require("../../build/artistoo-cjs.js")


/*	----------------------------------
	CONFIGURATION SETTINGS
	----------------------------------
*/
let config = {

	// Grid settings
	field_size : [200,200],
	
	// CPM parameters and configuration
	conf : {
		// Basic CPM parameters
		torus : [true,true],						// Should the grid have linked borders?
		seed : 1,							// Seed for random number generation.
		T : 10,								// CPM temperature
		
		// Constraint parameters. 
		// Mostly these have the format of an array in which each element specifies the
		// parameter value for one of the cellkinds on the grid.
		// First value is always cellkind 0 (the background) and is often not used.
				
		// Adhesion parameters:
		J: [[0,10], [10,0]],
		
		// VolumeConstraint parameters
		LAMBDA_V: [0,5],					// VolumeConstraint importance per cellkind
		V: [0,500],							// Target volume of each cellkind
		
		// PerimeterConstraint parameters
		LAMBDA_P: [0,2],						// PerimeterConstraint importance per cellkind
		P : [0,260],						// Target perimeter of each cellkind
		
		// ActivityConstraint parameters
		LAMBDA_ACT : [0,300],				// ActivityConstraint importance per cellkind
		MAX_ACT : [0,30],					// Activity memory duration per cellkind
		ACT_MEAN : "geometric"				// Is neighborhood activity computed as a
		// "geometric" or "arithmetic" mean?

	},
	
	// Simulation setup and configuration
	simsettings : {
	
		// Cells on the grid
		NRCELLS : [1],						// Number of cells to seed for all
		// non-background cellkinds.
		// Runtime etc
		BURNIN : 500,
		RUNTIME : 1000,
		RUNTIME_BROWSER : "Inf",
		
		// Visualization
		CANVASCOLOR : "eaecef",
		CELLCOLOR : ["000000"],
		ACTCOLOR : [true],					// Should pixel activity values be displayed?
		SHOWBORDERS : [false],				// Should cellborders be displayed?
		zoom : 2,							// zoom in on canvas with this factor.
		
		// Output images
		SAVEIMG : false,					// Should a png image of the grid be saved
		
		// Output stats etc
		STATSOUT : { browser: true, node: true }, // Should stats be computed?
		LOGRATE : 10							// Output stats every <LOGRATE> MCS.

	}
}
/*	---------------------------------- */


let sim = new CPM.Simulation( config, {} )






/* The following custom methods will be added to the simulation object*/

// Extend the 'Stat' class to create a custom statistic. This statistic must
// have a 'compute' method.
class PercentageActive extends CPM.Stat {
	
	computePercentageOfCell( cid, cellpixels ){
	
		// Get the array of pixels for this cell
		const current_pixels = cellpixels[cid]
	
		// The length of this array tells us the number of pixels:
		const totalPixels = current_pixels.length
	
		// Loop over pixels of the current cell and count the active ones:
		let activePixels = 0
		for( let i = 0; i < current_pixels.length; i++ ){
			// PixelsByCell returns ArrayCoordinates, but we need to convert those
			// to IndexCoordinates to look up the activity using the pxact() method.
			const pos = this.M.grid.p2i( current_pixels[i] )
			
			// increase the counter if pxact() returns an activity > 0
			if( this.M.getConstraint( "ActivityConstraint" ).pxact( pos ) > 0 ){
				activePixels++
			}
		}
		
		// divide by total number of pixels and multiply with 100 to get percentage
		return ( 100 * activePixels / totalPixels )
		
	}
	
	compute(){
		// Get object with arrays of pixels for each cell on the grid, and get
		// the array for the current cell.
		const cellpixels = this.M.getStat( CPM.PixelsByCell ) 
				
		// Create an object for the output, then add stat for each cell in the loop.
		let percentages = {}
		for( let cid of this.M.cellIDs() ){
			percentages[cid] = this.computePercentageOfCell( cid, cellpixels )
		}
		
		return percentages
		
	}
}

// Overwrite the logstats method to compute our custom stat
function logStats(){
	const allpercentages = this.C.getStat( PercentageActive )
	for( let cid of this.C.cellIDs() ){
		let theperc = allpercentages[cid]
		console.log( this.time + "\t" + cid + "\t" +  // eslint-disable-line
				this.C.cellKind(cid) + "\t" + theperc )
	}

}



sim.run()
