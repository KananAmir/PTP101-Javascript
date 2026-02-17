let userName = "Alice";
userName = 42; // No error during assignment, but this might break the code later.

function greetUser(name) {
  console.log("Hello, " + name.toUpperCase()); // Error at runtime if `name` is not a string.
}

greetUser(userName); // This will cause a runtime error because `userName` is now a number, and numbers do not have the `toUpperCase` method.