const samplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Hey success!");
    } else {
      reject(new Error("Failed!"));
    }
  }, 1000);
});

samplePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

const fetchData = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode2.com/todos/1")
    .then((response) => response.json())
    .then((json) => resolve(json))
    .catch((error) => reject(error));
});

fetchData
    .then(response => console.log(response))
    .catch(err => console.log(err))