let x = window.location.hash;
let y = x.substring(1);
let postsArr = [];

let postPage_title = document.querySelector(".postPage_title");
let postPage__body = document.querySelector(".postPage__body");

(async function fetching() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${y}`);
  postPage_title.innerHTML = "Loading...";
  let data = await response.json();
    console.log(data);
    postsArr.push(data);
    return fetchedData();
})();

let fetchedData = () => {
  postPage_title.innerHTML = postsArr[0].title;
  postPage__body.innerHTML = postsArr[0].body;
}