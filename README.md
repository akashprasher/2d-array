## 2d-Array

Create perfect 2d arrays in JavaScript without writing a custom `js` for it.

```js
let dArray = require("2d-arrays");

let x = dArray(2, 2, true);
// [[0,0],
//  [0,1]]
```

`dArray(arg1, arg2, arg3)` **arg1** represents the _n_ number of rows and **arg2** represents the _m_ numbers of coloumns. **arg3** is an optional arguments.

### Cases for `arg3`

```js
// Case I - To initilize every element to undefined (by default)
dArray(4, 2);

// Output
[
  [undefined, undefined],
  [undefined, undefined],
  [undefined, undefined],
  [undefined, undefined],
];
```

```js
// Case I - To initialize with index position the index numbers
dArray(4, 2, true);

// Output
[
  ["0,0", "0,1"],
  ["1,0", "1,1"],
  ["2,0", "2,1"],
  ["3,0", "3,1"],
];
```

```js
// To initilize every element to null
dArray(4, 2, true);

// Output
[
  [null, null],
  [null, null],
  [null, null],
  [null, null],
];
```

---
