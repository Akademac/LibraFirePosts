let postPage_title = document.querySelector(".postPage_title");
let postPage__body = document.querySelector(".postPage__body");
let postsArr = [];
let locHash = window.location.hash;
let locHashSub = locHash.substring(1);
let authorName = document.querySelector(".author__name");
let authorAddress = document.querySelector(".author__address");
let commentsArr = [];

let authorsNameArray = [
  "Alen Zerbo",
  "Jules Verne",
  "Tomas Man",
  "J. D. Salinger",
  "Agata Christie",
  "Viktor Igo",
  "Ivo Andric",
  "Danilo Kish",
  "Branislav Nusic",
  "Borislav Pekic",
  "Milos Crnjanski",
];

let authorsAddressArray = [
  "216 Harrison St, Port Clinton, OH",
  "5 Av. Gustave Eiffel, 75007 Paris, France",
  "Carrillo Drive Suite 300. Los Angeles, CA",
  "342 Lang Rd, Cornish, NH",
  "Upper St Martin's Lane London",
  "38 Hauteville, Guernsey GY1 1DG",
  "Dolac, near Travnik",
  "Subotica, Serbia",
  "Belgrade, Principality of Serbia",
  "Podgorica, Yugoslavia",
  "Csongrád, Hungary",
];

async function fetching() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${locHashSub}`);
  postPage_title.innerHTML = "Loading...";
  let data = await response.json();
  postsArr = [];
  postsArr.push(data);
  return fetchedData();
}

fetching();

let fetchedData = () => {
  postPage_title.innerHTML = postsArr[0].title;
  postPage__body.innerHTML = postsArr[0].body;
  authorsNameArray.forEach((e, index) => {
    if (postsArr[0].userId == index + 1) {
      authorName.innerHTML = e;
    }
  });
  authorsAddressArray.forEach((e, index) => {
    if (postsArr[0].userId == index + 1) {
      authorAddress.innerHTML = e;
    }
  });
};

// Change Posts

let arrow_left = document.querySelector(".btn__left");
let arrow_right = document.querySelector(".btn__right");
let locHashSubInDe = parseInt(locHashSub);

arrow_right.addEventListener("click", () => {
  console.log(typeof locHashSubInDe);
  if (locHashSubInDe <= 99) {
    locHashSubInDe++;
    async function fetching(id) {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${locHashSubInDe}`
      );
      postPage_title.innerHTML = "Loading...";
      let data = await response.json();
      postsArr = [];
      postsArr.push(data);
      fetchedData();
    }
    window.open(`posts.html#${locHashSubInDe}`, "_self");
    fetching();
    arrow_right.classList.add("sp__btnsActive");
    arrow_left.classList.add("sp__btnsActive");
  } else {
    arrow_left.classList.add("sp__btnsActive");
    arrow_right.classList.remove("sp__btnsActive");
    return false;
  }
});

arrow_left.addEventListener("click", () => {
  if (locHashSubInDe >= 2) {
    locHashSubInDe--;
    async function fetching(id) {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${locHashSubInDe}`
      );
      postPage_title.innerHTML = "Loading...";
      let data = await response.json();
      postsArr = [];
      postsArr.push(data);
      fetchedData();
    }
    window.open(`posts.html#${locHashSubInDe}`, "_self");
    fetching();
    arrow_left.classList.add("sp__btnsActive");
    arrow_right.classList.add("sp__btnsActive");
  } else if (locHashSubInDe < 3) {
    arrow_right.classList.add("sp__btnsActive");
    arrow_left.classList.remove("sp__btnsActive");
  } else {
    return false;
  }
});
