// Q. How do you handle errors in TypeScript?

// In TypeScript, you can handle errors in the same way as you would in JavaScript, using try-catch blocks. 
// Here's an example :-
try {
    // some code that may throw an error
} catch (error) {
    // handle the error here
    console.log(`An error occurred: ${error.message}`);
}
  

// Here's another example where we throw a custom error if a parameter is missing:
  function greet(name?: string) {
    if (!name) {
      throw new Error('Missing required parameter: name');
    }
    console.log(`Hello, ${name}!`);
  }
  
  try {
    greet();
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
  