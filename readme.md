# TypeScript

## INTRODUCTION TO TYPESCRIPT

### What is the <a href="https://www.typescriptlang.org/">TypeScript</a> ?

- Anders Hejlsberg began working on typescript at Microsoft in 2010, and the first version of typescript was given to the public in 2012. (ts 0.8)
- It is superset of JavaScript. That is, it's JavaScript with a bunch of additional features.
- TS codes are not be run directly like. TS codes are compiled into JavaScript. Your valid JS code is also valid TS code.
- Cross-platform ==> TS runs on any platform that JS runs on. The TS compiler can be intalled on any operating system.
- Object-oriented language ==> Powerful features such as classes, interfaces, and modules.
- Static type-checking ==> TS uses static typing, done using type annotations. Type checking is done at compile time.
- Optional static typing
- DOM Manipulation ==> Just like JavaScript
- ES 6 Features ==> TS includes features of ES6

#### TypeScript Pros

- TS offers additional benefits coming from static typing and other concepts to TS.
- Static type checking - The ability to find bugs at compile time using static analyzer, you can fix most static analysis errors by adding type annotations.
- Self documenting - code is easier to read because you can rely on a value actually having the specified type.
- Better refactoring - When you change one piece of code, the type system can warn you about the other pieces of code that just broke.
- Gradual Adoption - A valid JavaScript program is technically valid TypeScript. You can migrate to TS gradually and adopt the level of strictness that suits you.

#### TypeScript Cons

- Not true static typing (this feature is optional for TS)
- One more JavaScript to learn
- Adding extra step - transpilling
- Bloated Code (more lines of coding)

### Setup Development Environment

#### Install typescript using Node.js package manager (npm)

- npm install -g typescript

- tsc -v / to see the version of TS.

- tsc ./app.ts / to compile

#### Install typescript plug-in in you IDE.

<hr>

#### tsconfig.json

- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project.
- The tsconfig.json file specifies the root files and the compiler options required to compile the project.
- 'tsc --init' command creates a configuration file called tsconfig.json
- 'tsc' command will generate .js files for all .ts files.

<hr>

- allowJs : Allow JavaSript files to be compiled. Default value is false.
- alwaysStrict : Parse in strict mode and emit "use strict" for each source file. Default value is false.
- target : Specify ECMAScript target version.
- outDir : The location in which the transpiled files should be kept.
- noEmitOnError : Disable emitting files if any type checking errors are reported.
- noUnusedParameters : Raise an error when a function parameter isn't read.
- removeComments : Disable emitting comments.
- noImplicitAny : Enable error reporting for expressions and declarations with implied 'any' type.
- strictNullChecks : When type checking, take into account 'null' and 'undefined'.

### Type Annotation and Types in TypeScript

- TypeScript is a typed language. We need to specify the type of variables, function parameters, and object properties.
- Type annotation is not mandatory. Compiler will check the types of variable and avoid errors when dealing with the data types.
- We annotate a variable by using a colon (:) followed by its type.

```typescript
// Example;

// String
var message: string = "Hello World";

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 7;

// Array - Data Types

// Array is a collection of values. Array types can be written in one of two ways.
// In thi first, you use the type of the elements followed by [] to denote an array of that element type;

// Recommended way, when you use html, React.
let list: number[] = [1, 2, 3];

// The second way uses a generic array type, Array<elemType>:

let list: Array<number> = [1, 2, 3, 4];
```

**Data Type - Tuples**

- Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not to be the same.
- For example, you may want to represent a value as a pair of a string and a number;

```typescript
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
x = [10, "hello"]; // Error
```

<hr>

**Data Type - Enum**

- A helpful addition to the standart set of data types from JavaScript is the enum. An enum is a way of giving more friendly names to sets of numeric values.
- By default, enums begin numbering their members starting at 0. You can change this by manually setting tha value that may contain both string and numeric values.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let selectedColor: Color = Color.Green;
console.log(selectedColor); // Output: 1
```

<hr>

**Data Type - unknown**

- We may need to describe the type of variables that we do not know when we are writing an application.
- These values may come from dynamic content - e.g. from the user - or we may want to intentionally accept all values in our API.
- In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.

```typescript
let notSure: unknown = 4;

notSure = "maybe a string instead";
```

<hr>

**Data Type - void**

- void is a little like the opposite of any: the absence of having any type at all.
- You may commonly see this as the return type of functions that do not return a value

```typescript
function warnUser(): void {
  console.log("This is a warning message!!! - You used void here!");
}
```

<hr>

**Data Type - never**

- Typescript introduced a new type never, which indicates the values that will never occur.
- The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.
- if you want more detail, <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html#:~:text=The%20never%20type%20represents%20the,that%20can%20never%20be%20true.">click here!</a>

```typescript
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
```

<hr>

**Data Type - union**

- Typescript allows us to use more than one data type for a variable or a function parameter. This is called union type.

```typescript
let code: string | number;
code = 123;
code = "ABC";
code = false; // Compiler Error
```

### Type Aliases

- It's important to create dynamic and reusable code. Using TypeScript aliases will help you to accomplish DRY (Don't Repeat Yourself! ) principle.
- We have to create our type before we start using it. We define the typle alias with type keyword.

```typescript
type Point = {
  x: number;
  y: number;
}; // Point is a type now and we can use it.

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

**String Literals**

- String literals allow us to use a string as a type
- String literals become even more powerful when used with union types. Union types are used to define values that can be of more than one type. With union types, the | character is used to separate the different possible types.

```typescript
type pet = 'cat' | 'bird';

let pet1: pet = 'cat';
let pet2: pet = 'dog';
let gator: pet = "horse": // ERROR
```

### Intersection

- Despite their similarities, intersection and union types are used in very different ways.
- An intersection type is a type that merges several kind into one. This allows you to combine many types to create a single type with all of the properties that you require.
- An object of this type will have members from all of the types given. The '&' operator is used to create the intersection type.

```typescript
type User = {
  id: number;
  name: string;
};

type Admin = {
  privileges: string[];
};

type SuperUser = User & Admin;

const elevatedUser: SuperUser = {
  id: 1,
  name: "Beko",
  privileges: ["start-database"],
};
```

### Types Assertions

- Type assertion is a technique that informs the compiler about type of a variable.
- Type aseertion is similar to typecasting but it doesn't reconstruct code.
- You can use type assertion to specify a value type and tell the compiler not to deduce it.
- When we want to change a variable from one type to another such as any to number etc, we use Type assertion.


```typescript
let someValue: unknown = "this is a string";
console.log(someValue.length); // Object is of type 'unknown'

console.log((<string>someValue).length); // 16
console.log((someValue as string).length); // 16
```

### Functions

- Functions should return a type, and also function parameters should have types.
- The compiler expects a function to receive the exact number and type of arguments as defined in the function signature. For example, if a function expects 3 parameters, the compiler checks whether 3 parameters exists with exact type or not.

```typescript
function Greet(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}

Greet("Hello", "Steve"); // OK, returns 'Hello Steve!'
Greet("Hi"); // Compiler Error: Expected 2 arguments, but got 1.
Greet("Hi", "Bill", "Gates"); // Compiler Error: Expected 2 arguments, but got 3.
```

- In some cases, some of function parameters may be optional.
- Use the ? symbol after the parameter name to make a function argument optional.
- All optional parameters must follow required parameters and should be at the end.

```typescript
function GetUserInfo(firstname: string, lastname: string, country?: string) : string {
  return 'Hello' firstname + ' ' + lastname + 'and your age is ' + age + '.';
}
```

**Functions - Overloading**

- Typescript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type. However, the number of parameters should be the same.

```typescript
function add(a: string, b:string) : string;

funtion add(a:number, b:number) : number;

funtion add(a: any, b: any) : any {
  return a + b;
}

add("Hello", "Steve"); // returns Hello Steve
add(20, 40); // returns 30
```

**Functions - Rest Parameters**

- Typescript has rest parameters to accommodate n number of parameters easily.
- When the number of parameters is not known or can vary, we can use rest parameters. In JavaScript, this is achieved with the "arguments" variable. In typescript, we can use the rest parameter denoted by ellipsis. Rest parameters must come last in the function definition, otherwise the Typescript compiler wiil give an error.

```typescript
function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
Greet("Hello"); // returns "Hello !"
```

### Classes

- Classes are the fundamental entities used to create reusable components.
- Functionalities are passed down to classes.
- Objects are created from classes.

- A class can include the following;

  - Constructor
  - Properties
  - Methods

- For example; If we say that we have Dog class, tail, number of legs, color, etc. will be the properties and Bark, Run, Jump and Sleep will be methods.

- An object of the class can be created using the new keyword.
- While instantiating a new object, the class constructor is called with the values passed.

```typescript
class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}

// Instantiating a New Object with new keyword
let emp = new Employee(100, "John");
```

**Classes - Inheritance**

- Classes can inherit using the keyword 'extends'.
- The employee class now includes all the members of the person class.
- The constructor of the employee class is using a special keyword super, and initialises its own properties.
- We must call super() method first before assigning values to properties in the constructor of the child class.

```typescript
// Parent Class
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Child & Derived Class
class Employee extends Person {
  empCode;
  number;
  constructor(code: number, name: string) {
    // Inherit from parent class named Person
    super(name);
    this.empCode = code;
  }

  displayName(): void {
    console.log(this.name, this.empCode);
  }
}
```

**Abstract Classes**

- Typescript allows us to define an abstract class using keyword abstract.
- Abstract classes are mainly for defining structure of class, where there are no implementation code. Therefore, they cannot be instantiated.
- An abstract class typically includes one or more abstract methods or property declarations. **_The child class must define all the abstract methods._**
- We can think as abstract methods / properties are a placeholder that will be defined when it is inherited.
- Child of an abstract class must call super() in the constructor.
- Person ( Example below ) is an abstract class has one property and two methods. displayCode() method is an abstract method and so must be defined in the derived class.
- The Employee class should define implementation code for the displayCode() method.
- The Employee class should implement all the abstract methods of the Person class, otherwise the compiler will give an error.

For more information: <a href="https://www.typescriptlang.org/docs/handbook/classes.html#:~:text=Abstract%20classes%20are%20base%20classes,methods%20within%20an%20abstract%20class."> Click here! </a>

```typescript
abstract class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayName(): void {
    console.log(this.name);
  }

  abstract displayCode(): void;
}

class Employee extends Person {
  empCode: number;

  constructor(code: number, name: string) {
    super(name);
    this.empCode = code;
  }

  displayCode(): void {
    console.log(this.empCode);
  }
}
```

**Class Data Modifiers**

- In object-oriented programming, the concept of 'encapsulation' is used to make class members public or private i.e.
- A class can control the visibility of its data members. This is done using access modifiers.
- There are three types of access modifiers in typescript;

    *1. public* <br>
    *2. private* <br>
    *3. protected* <br>

- By default, all members of a class in Typescript are public. All the public members can be accessed anywhere without any restrictions.

***Private***

- The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.
- When we create an object emp and try to access the emp.empCode member, it will be give an error.

```typescript
class Employee {
  private empCode: number;
  public empName: string;

  constructor ( empCode: number, name: string ) {
    this.empCode = empCode;
    this.empName = name;
  }
}

let emp = new Employee(100, "John");
console.log(emp.empCode); // Compiler Error
```

***Protected***

- Child class can't access private methods/ properties.
- However, child class can access protected members.
- In the example below, DevelopmentEmployee class can't access id in the parent class. However, it can reach public and protected properties.
- Outside the class, we can reach empName, but we can't reach department.

```typescript
class Employee {
  public empName: string;
  protected empCode: number;
  private id = Math.random();
  
  constructor(empCode: number, name: string){
    this.empCode = empCode;
    this.empName = name;
  }
}

class DevelopmentEmployee extends Employee {
  private department: string;

  constructor(code: number, name: string, dep: string){
    super(code, name);
    this.department = dep;
    // ! this.id = 100; // Compiler Error. Private to parent.
  }
}

let emp = new DevelopmentEmployee(100, "John", "Frontend");
console.log(emp.department) // => Compiler Error
```

***Readonly Modifier***

- In addition to the access modifiers, typescript provides two more keywords: read-only and static.
- Prefix read-only is used to make a property as read-only.
- Read-only members can be accessed outside the class, but their value cannot be changed after initialization.
- If we try to change tha value of empcode after the object has been initialized, we get compiler error.

```typescript
  class Employee {
    empName: string;
    readonly empCode: number;

    constructor(empCode: number, name: string){
      this.empCode = empCode;
      this.empName = name;
    }

  }

  // ----------------------------------
  let emp = new Employee(100, "John");
  emp.empCode = 20 // Compiler Error
```

***Static Modifier***

- The static members of a class are accessed using the class name and dot notation, wihtout creating an object.
- The static members can be defined by using the keyword static.
- Circle class below includes a static property and static method.
- We can call these methods adn properties directly from the class.

```typescript
class Circle {
  static pi: number = 3.14;

  static calcArea(radius: number){
    return this.pi * radius * radius;
  }
}

Circle.pi: // returns 3.14
Circle.calcArea(5) // return 78.5
```

**Interfaces**

- Interface is a structure that defines the contract. It defines the syntax for classes to follow. Classes must follow the derived interface structure.
- The typescript compiler does not convert interface to JavaScript. Just for type checking. "duck typing" or "structural subtyping".
- An interface is defined with the keyword interface.
- It can only include properties and method declaration.
- No implementation
- We use interfaces to define the shape of objects and classes.

```typescript
interface Calendar {
  events: string[];
  addEvent(event: string): void;
}

class ClassCalendar implements Calendar {
  events: string[];
  constructor() {
    this.events = [];
  }

  addEvent(event: string): void {
    this.events.push(event);
  }
}
```
<hr>

***Interfaces vs Type Aliases***

- Interfaces and type aliases can be used interchangeably. Both can be used to describe the shape of an object.
- Interface can only be used for object and classes.

<hr>

- Interface can only contain declaration of properties and methods, no value or no implementation details are allowed.
- A class can implement more than one interface, but can only implement one super class.

```typescript
interface Color {
  color: {r: number, g: number, b: number}
}

interface Shape {
  area: number;
}

class Square implements Color, Shape {
  color: {r: number, g: number, b: number}
  area: number;

  constructor(c: {r: number, g: number, b: number}, a: number){
    this.color = c;
    this.area = a;
  }
}
```

***Interfaces as Function Type***

- We can define function type using interface, to assign a function variable, typescript can enforce specific function.

```typescript
interface NumKey {
  (key: number, value: string): void
}

function addKeyVal (k: number, v: string): void {
  console.log("adding key value", k, v);
}

function update(index: number, newVal: string): void {
  console.log("Updating key value...", index, newVal);
}

let kvp: NumKey = addKeyVal;
kvp(1, 'John');
kyp = update;
```

```typescript
interface Sum {
  (num1: number, num2: number): number;
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function conC(n1: string, n2: string): string {
  return n1 + n2;
}

let arithmeticAdd: Sum = add;

console.log(arithmeticAdd(2, 5));

let conCt: Sum = conC; // Error, interface is number number, but conC is string string.
```
**Generics**

- Typescript Generics is a tool which provides a way to create reusable components ( functions, interfaces, and classes).
- Generics in typescript is almost similar to C# generics.
- A generic type has one or more generic type parameters in angle brackets. e.g: <T> ot <T,U> using uppercase single letter is a convention.
- When using generic types, we should supply arguments for generic type parameters or let the compiler infer them (if possible).

```typescript
//------------- Problem ------------------//
funtion getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArr = getArray([1, 2, 3]);
let strArr = getArray(["Micheal", "Jane"]);

numArr.push(4); // OK
strArr.push('Jake'); // OK

numArr.push('Tim'); // OK
strArr.push(5); // OK

console.log(numArr); // [1, 2, 3, 4, 'Tim'] -> we can add string here.
console.log(strArr); // ['Micheal', 'Jane', 'Jake', 5] -> we can add number here.

//------------- Solution ------------------//
funtion getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

numArr.push(4); // OK
strArr.push('Jake'); // OK

numArr.push('Tim'); // Compiler Error
strArr.push(5); // Compiler Error

//----------- Generic Interface ---------//
interface Result<T> {
  data: T | null;
}

//----------- Generic Function ---------//
function wrapInArr<T>(value: T) {
  return [value]
}

let arr = wrapInArr(1);

//----------- Generic Classes ---------//
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let kvp = new KeyValuePair<number, string>(1, 'a');
let shorter = new KeyValuePair(1, 'a');
```

