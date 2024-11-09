# 1. What do you mean by local and global variable?

    => ans: Global variables are those variables which are declared outside of all function and it can be accessed form anywhere in the code, function.

    => Local variables are only accessible within their defining function and are not available outside of it.

    ```javascript
        Example :
        let globalVar = "I'm a global variable";

        function declared() {
        // Local variable
        let localVar = "I'm a local variable";

        console.log(globalVar); // Accessible here
        console.log(localVar);   // Accessible here
        }
        declared();
    ```

# 2. What is the function of break and continue statement?

    => Break: The break statement exits the loop entirely, stopping its execution when a certain condition is met.
    Example:

    ```JavaScript
        for (let i = 0; i < 10; i++) {
        if (i === 5) {
        break;  // Exits the loop when i is 5
        }
        console.log(i);  // Prints 0, 1, 2, 3, 4
        }
    ```

    => Continue: The continue statement skips the current iteration of the loop and moves to the next iteration, without exiting the loop.

    ```javascript
        for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue; // Skips the rest of the code for the iteration when i is 5
        }
        console.log(i); // Prints 0, 1, 2, 3, 4, 6, 7, 8, 9 (skips 5)
        }
    ```

# 3. What is the different between “==” and “===” operator?

    Ans. == and === are comparison operators, but they work slightly differently:
    "== "(Equality operator): Compares only the values of the operands, ignoring the data type.
    Example:

    ```javascript
        let num = 5;
        let str = "5";
        console.log(num == str); // true, because `==` converts `str` to a number before comparing.
    ```

    =>  "===" (Strict equality operator): Compares both values and data types of the operands'.
    Example:

    ```javascript
        let num = 5;
        let str = "5";
        console.log(num === str);  // false, because `===` checks both value and type (number vs. string).
    ```

# 4. What is reserved word ? write five reserved word ?

     Ans.
     => A reserved word is a word that JavaScript has set aside for specific tasks. You can’t use these words to name things like variables or functions.
    Five reserved word are :

    ```javascript
        1. if
        2. else
        3. break
        4. function
        5. return
    ```

# 5. What are the different between alert() and prompt()?

    Ans. => JavaScript provides built-in global functions to display popup message boxes for different purposes.

    => alert() : Used to show a simple message to the user.Displays a message with an "OK" button, which the user clicks to close the pop-up.
    Example:

    ```javascript
        alert("This is an alert message box.");
    ```

    => prompt() : Used to get input from the user.Displays a message with a text box and "OK" and "Cancel" buttons. The user can enter a value or close the dialog.
    Example:

    ```javascript
        let name = prompt("What is your name?");
        alert("Hello, " + name + "!");
    ```

# 6. What is eval () in JavaScript ?

    Ans : The eval() function in JavaScript is used to evaluate the expression. It is JavaScirpt's global function, which evaluates the specified string as JavaScript code and executes it.

    ```javascript
        Example: eval(string) or let x = 10;
        let y = 20;
        console.log(eval("x + y"));
    ```

# 7. What’s the difference between Var, Let, and Const?

    Ans. Var: It can be updated or re-declared.

    ```javascript
        var one = "It's can update and re-declared!";
        var one = "It's can update and re-declared!";
    ```

    let: It can only be updated and can't be re-declared.

    ```javascript
        let one = "It's can update, cant't re-declared!";
        one = "It's can update, cant't re-declared! 2";
    ```

    const: It can't be updated or re-declared.

    ```javascript
        const one = "I can't update or can't be re-declared!";
    ```

# 8. What is the different between while and do-while loop?

    Ans. Code First: The do...while loop runs the code at least once before checking the condition. This means the code inside will always execute once, even if the condition is false initially.

    ```javascript
        Syntax:
        do {
        // code to execute
        } while (condition);

        Example:

        let i = 0;
        do {
        console.log(i); // Outputs: 0, 1, 2. The do...while loop runs the code at least once before checking the condition.
        i++;
        } while (i < 3);
    ```

    while loop: Condition First: The while loop checks the condition before executing the code block. If the condition is false from the beginning, the code block may never run.

    ```javascript
        Syntax: while (condition) {
        // code to execute
        }

        Example: 
        let i = 0;
        while (i < 3){
        console.log(i);
        i++;
        }
    ```

# 9. What is function ? How can you define function in JavaScript?

    Ans: A collection of statement which can perform a specific task and can be executed by an event of call to that function .we can have

    ```javascript
        //a) Built-in function
        let largestNumber = Math.max(10, 20, 30, 5);
        console.log(largestNumber);

        //b) User-defined functions.
        // User-defined function example
        function greet(name) {
        return "Hello, " + name + "!";
        }
        greet("Ali"); // output: Hello, Ali!.
    ```

# 10. How to use ternary operator in JavaScript ?

    Ans: The ternary operator in JavaScript is a alternative way to an if-else statement. it has three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is false. This operator is frequently used as an alternative to an if...else statement. modify and simple this

    ```javascript
        Syntax: condition ? expressionIfTrue : expressionIfFalse;

        let age = 18;
        let result = age >= 18 ? "Adult" : "Minor";
        console.log(result); // Output: "Adult"
    ```

    shotcut : If the condition is true,it returns expressionIfTrue.
    If the condition is false,it returns expressionIfFalse.
