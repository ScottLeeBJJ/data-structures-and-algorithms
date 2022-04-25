// this is a comment

/*this is 
a multi line comment*/

// types of JS varialbes: undefined, boolean, null, string, symbol, bigint, number and object

// Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored.

// Declare JS variables:

// variables can be declared by var, let or const: example: var ourName; 

// In JS you can store value in a variable with the assignment operator (=) example: myVariable = 5; 

var myVar;
myVar = 5;

// First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.

// After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

//The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.

// It's common to initialize a variable to an initial value in the same line as it's declared. 

var myVar = 0;

// This creates a new variable called myVar and gives it the value of 0.

// You can also declare a variable like this:

var myName = "your name";