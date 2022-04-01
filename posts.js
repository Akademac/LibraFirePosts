let x = window.location.hash;
let y = x.substring(1, 2);

fetch(`https://jsonplaceholder.typicode.com/posts/${y}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })

