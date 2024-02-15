Application is running with executing `src/main.js`

The algorithm of finding areas is separated into 3 utility functions:
- findAreas - a function that goes through matrix and initiates recursion once find new area
- markConnected - recursive function isolating area from being misinterpreted
- getNeighbourRefs - a shorthand for getting neighbour cells  

The matrix is mutated for memory and cpu optimisation.

To start run the following:

```
yarn && yarn start
```

For testing run:
```
yarn test
```
