title: 'Lemoncase2 Guide'
---
This guide will teach you how to use the programming language of Lemoncase2.

browser automation library
http://lemonce.github.io/lemoncase2

## Grammar

### Idntifier
Lemoncase2 is similar to JS.

```C
    Var a = 1;
```

But you do not have to use 'var' keyword (there's no type check currently, haha)

```C
    a = 1;
    a = true;
```

### Datatype
Below is a list of data type you can use

```C
    number (e.g., 0.12, 1e-3)
    string (e.g., 'you', "me")
    Boolean (true/false)
    RegExp
```

RegExp will be used as it is, to match against a string, if it is used with ~~ operator.

Otherwise it will generate a random string based on the regexp pattern (use randexp underneath).

Use it if you want to do some fuzzy testing.

### Marco

Macro is the global setting for your case during runtime.

- #TIMES

```C
// The case will run 10 times.
#TIMES 10
```

- #INTERVAL

```C
// The case will wait 1000ms before start another one.
#INTERVAL 1000
```

- #CLOCK

```C
// The frequency of the engine, the engine will tick per 30ms.
#CLOCK 30
```

- #SCREEN

```C
// Set the screen to width 800px and height 600px.
#SCREEN 800,600
```

- #AUTOSROLL

```C
// Auto scroll the window when trigger an instruction.
#AUTOSCROLL
```

### Instruction keyword
Simulate an action.
```C
[action] [selector:string] by/to [params|params1,params2]
```

- assertion

    Assert that the expression is true[ within overtime].

```C
    assert[exp][in[overtime:number]]
```

- wait

    Wait a few time like a person.

```C
    wait [time:number]
```

- log

    Record the value of an expression.

```C
    log [exp]
```

- jumpto

    Jump to a URL.

```C
    jumpto [exp]
```