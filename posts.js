let postPage_title = document.querySelector(".postPage_title");
let postPage__body = document.querySelector(".postPage__body");
let postsArr = [];
let x = window.location.hash;
let y = x.substring(1);

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    //alert('refresh');
    window.location.reload();
  }
});

async function fetching(id) {
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
  if(z <= 100) {
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
  }
  else {
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
  } else if (z < 3) {
    arrow_left.classList.remove("sp__btnsActive");
  } else {
    return false;
  }
});
