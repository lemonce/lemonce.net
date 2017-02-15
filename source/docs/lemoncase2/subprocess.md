title: 'Inbuilt sub-process'
---
All the Inbuilt sub-process should have a form as `sub-process()`.
## Data
---

**format**

**now**

Time stamp.Output current Greenwich time(in ms),
<br>

## Type
---

**bool( )**

Convert a variable/number/RegExp to a Boolean format.  
```
bool(3.14) // Output true
bool(3>4) // Output false
```

**number( )**

The `number()` is a wrapper object allowing you to work with numerical values. A Number object is created using the `number()` constructor.
```
number('3.14') // Output  3.14
number('3'+'2') // Output  32
```
<br>

## Math
---

**abs( )**

The `abs()` returns the absolute value of a number, that is abs(x)=|x|.
```
abs(-3.14) // Output  3.14
abs('') // Output  0
abs() // Output  NaN
abs('string') // Output  NaN
```

**ceil( )**

The `ceil(number)` returns the smallest integer greater than or equal to a given number.
```
ceil(3.14) // Output  4
ceil(-3.14) // Output  -3
```

**floor( )**

The `floor(number)` returns the largest integer less than or equal to a given number.
```
floor(3.14) // Output  3
floor(-3.14) // Output  -4
```

**max( )**

The `max(number1,number2,...)` returns the largest of zero or more numbers.
```
max(3+2,number('3'+'2'))  // Output  32
```

**min( )**

The `min(number1,number2,...)` returns the smallest of zero or more numbers.

**random( )**

The `random()` function returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
```
//Output a random number between the specified values
random() * (max - min) + min 
```
<br>

## String
---

**length( )** 

The `length(string)` property represents the length of a string.
```
length("Lemonce") //Output  7
```

**charAt( )**

The `charAt(string,pos)` method returns the specified character from a string.
```
charAt('Lemonce',5)  //Output 'c'
```

**indexOf( )**

The `indexOf(dstSting,testString)` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
```
indexOf('Lemonce','L')  //Output  0
indexOf('Lemonce','e')  //Output  1
indexOf('Lemonce','l')  //Output  -1
```

**substr( )**

The `substr(string,from,[length])` method returns the characters in a string beginning at the specified location through the specified number of characters. 
```
substr('Lemoncase',2,3)  //Output 'mon'
substr('Lemoncase',2)  //Output 'moncase'
```

**trim( )**

The `trim(string)` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
```
trim('  Lemon case  ')  //Output 'Lemon case'
```