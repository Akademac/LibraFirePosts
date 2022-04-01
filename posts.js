let postPage_title = document.querySelector(".postPage_title");
let postPage__body = document.querySelector(".postPage__body");
let postsArr = [];
let x = window.location.hash;
let y = x.substring(1);

async function fetching() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${y}`);
  postPage_title.innerHTML = "Loading...";
  let data = await response.json();
  console.log(data);
  postsArr = [];
  postsArr.push(data);
  return fetchedData();
}

fetching();

let fetchedData = () => {
  postPage_title.innerHTML = postsArr[0].title;
  postPage__body.innerHTML = postsArr[0].body;
};

// Change Posts

let arrow_left = document.querySelector(".btn__left");
let arrow_right = document.querySelector(".btn__right");
let z = parseInt(y);

arrow_right.addEventListener('click', () => {
  console.log(typeof z)
  if(z <= 99) {
    z++;
    async function fetching(id) {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${z}`
      );
      postPage_title.innerHTML = "Loading...";
      let data = await response.json();
      console.log(data);
      postsArr = [];
      postsArr.push(data);
      fetchedData();
    }
    window.open(`posts.html#${z}`, "_self");
    fetching();
    arrow_right.classList.add('sp__btnsActive');
    arrow_left.classList.add('sp__btnsActive');
  }
  else {
    arrow_left.classList.add('sp__btnsActive');
    arrow_right.classList.remove('sp__btnsActive');
    return false;
  }
})

arrow_left.addEventListener("click", () => {
  if (z >= 2) {
    z--;
    async function fetching(id) {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${z}`
      );
      postPage_title.innerHTML = "Loading...";
      let data = await response.json();
      console.log(data);
      postsArr = [];
      postsArr.push(data);
      fetchedData();
    }
    window.open(`posts.html#${z}`, "_self");
    fetching();
    arrow_left.classList.add("sp__btnsActive");
    arrow_right.classList.add("sp__btnsActive");
  } else if (z < 3) {
    arrow_right.classList.add("sp__btnsActive");
    arrow_left.classList.remove("sp__btnsActive");
  } else {
    return false;
  }
});
