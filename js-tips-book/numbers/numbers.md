# Numbers

JavaScript has **only one type of numbers** – 64-bit float point. It's the same as Java's `double`. Unlike most other programming languages, there is no separate integer type, so 1 and 1.0 are the same value.

In this chapter, we'll learn how to create numbers and perform operations on them (like additions and subtractions).


# Creation

Creating a number is easy, it can be done just like for any other variable type using the `var` keyword.

Numbers can be created from a constant value:

```javascript
// This is a float:
var a = 1.2;

// This is an integer:
var b = 10;
```

Or from the value of another variable:

```javascript
var a = 2;
var b = a;
```

{% exercise %}
Create a variable `x` which equals `10` and create a variable `y` which equals `a`.
{% initial %}
var a = 11;
{% solution %}
var a = 11;

var x = 10;
var y = a;
{% validation %}
assert(x === 10 && y === a);
{% endexercise %}


# Operators

You can apply mathematic operations to numbers using some basic operators like:

- **Addition**: `c = a + b`
- **Subtraction**: `c = a - b`
- **Multiplication**: `c = a * b`
- **Division**: `c = a / b`

You can use parentheses just like in math to separate and group expressions: `c = (a / b) + d`

{% exercise %}
Create a variable `x` equal to the sum of `a` and `b` divided by `c` and finally multiplied by `d`.
{% initial %}
var a = 2034547;
var b = 1.567;
var c = 6758.768;
var d = 45084;

var x =
{% solution %}
var a = 2034547;
var b = 1.567;
var c = 6758.768;
var d = 45084;

var x = ((a + b) / c) _ d;
{% validation %}
assert(x === (((a + b) / c) _ d));
{% endexercise %}


# Advanced Operators

Some advanced operators can be used, such as:

- **Modulus (division remainder)**: `x = y % 2`
- **Increment**: Given a = 5
  - `c = a++`, Results: c = 5 and a = 6
  - `c = ++a`, Results: c = 6 and a = 6
- **Decrement**: Given a = 5
  - `c = a--`, Results: c = 5 and a = 4
  - `c = --a`, Results: c = 4 and a = 4

{% exercise %}
Define a variable `c` as the modulus of the decremented value of `x` by 3.
{% initial %}
var x = 10;

var c =
{% solution %}
var x = 10;

var c = (--x) % 3;
{% validation %}
assert(c === 0);
{% endexercise %}
