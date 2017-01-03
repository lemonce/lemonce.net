title: 'syntax'
---
## Lemoncase 2
A tiny language for writing tests.

### Comments
```C
// single line comment
/*
multiline comment
*/
```

### Literals
```C
true  : boolean
false : boolean

42    : number
3.14  : number

'a'   : string
"abc" : string

/abc/ : regular expression
```

Typical manipulation of literals
```C
true || false; // true
(2 + 4) * (4 - 9); // -30
"abc" + "def"; // "abcdef"
```

### Statement

Statement must end with a semicolon
```C
1 + 1;
```

### variable
```C
twentyFour = 3 * 8;
```

### Conditional
```C
if (x === 40) {
  x += 1;
} else if (x === 38) {
  x -= 1;
} else {
  x = 0;
}
```

### loop
```C
while (x < 10) {
  x += 1;
}
```

### process (function)
```C
process square (n) {
  return n * n;
}
```

call a function
```C
process main () {
  FourSquare = square(4);
}
```
