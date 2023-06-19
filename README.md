# Natural Computing Project

## How to run:
### Browser example
Artistoo can be used to create interactive simulations in the web-browser. We have created a single browser example which van be used to simulate the result mentioned in our report. To run the browser example, open/click on the Project_simulation.html file in the artistoo_proj folder.

### Node example
Simulations can also be run from the command line using Node.js. The first time you do this, you have to install several dependencies. Go to the base folder of this package and run
```
npm install
which will automatically install the dependencies as supplied in the package.json file.
```
After this, you can run our node script, when in the root folder "NaturalComputingProject", using the following command:
```
node Artistoo_Proj/nodesimulation.js
```
This may give an error the first time, because the script tries to store images and CSV files of the simulation in a directory that does not exist. Create this directory and try again:
```
mkdir -p output/img/
mkdir -p output/files/
node Artistoo_Proj/nodesimulation.js
```

## Changing scenarios:
Changing scenarios can be done in the "NodeSimularion.js" file or the "Project_simulation.html" file or both.
### Obstacles
To change the obstacles to simulate the different scenarios mentioned in the report, the code in the "initializeGrid" function must be altered. 
When first opening the code, the grid is defined to have a narrowing, however, there are no obstacles. We call this the base scenario. To try the different scenarios with the different obstacles the following code snippets need to be de-commented (one at a time). 

Scenario 2:
```
this.channelvoxels = this.gm.makeCircle(  [265,100], 50, this.channelvoxels )
```
Scenario 3:
```
this.channelvoxels = this.gm.makeCircle(  [265,100], 50, this.channelvoxels )
this.channelvoxels = this.gm.makeCircle(  [200,30], 20, this.channelvoxels )
this.channelvoxels = this.gm.makeCircle(  [200,170], 20, this.channelvoxels )
```
Scenario 4:
```
const x0 = 180
const x1 = 280;
const y0 = 20;
const y1 = 200;
for(let x = x0; x <= x1; x += 30){
  for(let y = y0; y <= y1; y += 40){
    this.channelvoxels = this.gm.makeCircle( [x, y], 5, this.channelvoxels)
  }
}
```
### Parameters
To change any parameters regarding cell behaviour, you can alter the code in the "let config" variable. Here all different parameters are described with comments, which should make it clear what to alter based on the different scenarios mentioned in the report.
