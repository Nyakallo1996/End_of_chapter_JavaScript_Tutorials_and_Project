//What is Synchronous Programming

//Consider the following code

function someLongRunningFunction() {
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // do nothing
  }
  return "Hello";
}

console.log("Starting....");

let result = someLongRunningFunction();
console.log(result);

console.log(".....Finishing");

//How to use a Callback Function

//Declare function

function fetchData(callback) {
  setTimeout(() => {
    const data = {
      name: "John",
      age: 30,
    };
    callback(data);
  }, 3000);
}

//Execute Function with a callback

fetchData((data) => {
  console.log(data);
});

console.log("Data is being fetched...");

//How do promises work?

//Initialize a promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from the promise!");
  }, 2000);
});

//How to Consume a Promise

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//How to chain Promises

//Example of promise chaining

fetch("https://example.cpm/data")
  .then((response) => response.json())
  .then((data) => ProcessData(data))
  .then((processedData) => {
    // do something with the processed data
  })
  .catch((error) => console.log(error));

//Error Handling

fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    try {
      //processing received data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.log(error));

//Using the Promise.all Method

let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
})

//Fetch API with Promises

fetch('https://some-api.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Async Functions with async/await

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  }
  
  getData();