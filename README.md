Application is running with executing `src/main.js`

The algorithm of finding areas is separated into 3 utility functions:
- findAreas - a function that goes through matrix and initiate recursion
- markConnected - recursive function isolating area from being misinterpreted
- getNeighbourRefs - a shorthand for getting neighbours to try to run recursion on them  

To start run the following:

```
yarn && yarn start
```

For testing run:
```
yarn test
```
