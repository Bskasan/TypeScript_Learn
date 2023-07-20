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

### Type Annotation

- TypeScript is a typed language. We need to specify the type of variables, function parameters, and object properties.
- Type annotation is not mandatory. Compiler will check the types of variable and avoid errors when dealing with the data types.
- We annotate a variable by using a colon (:) followed by its type.

```
// Example;

var message : string = "Hello World";

```

### Types in TypeScript

### Types Assertations

### Functions
