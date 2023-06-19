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
