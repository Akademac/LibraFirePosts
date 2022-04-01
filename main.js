// Posts

let header_h1 = document.querySelector(".header_h1");

let posts__div = document.querySelector(".posts__div");
let allData = [];
let searchedData = [];

(async function fetching() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  header_h1.innerHTML = "Loading...";
  let data = await response.json();
  allData.push(data);
  return fetchedData();
})();

let fetchedData = () => {
  header_h1.innerHTML = `Posts found: ${allData.length}`;
  allData.forEach((e) => {
    e.forEach((ee) => {
      header_h1.innerHTML = `Posts found: ${e.length}`;
      let postDivs = document.createElement("DIV");
      postDivs.classList.add("post");
      postDivs.innerHTML = `
            <h2>${ee.title}</h2>
            <p>${ee.body.substring(0, 100)}...</p>
            <button class='read__moreBtn' data-id=${
              ee.id
            }>Read more <img src="Icons/rigth_arrow.png" alt="Right Arrow"></button>`;
      postDivs.classList.add("post");
      posts__div.appendChild(postDivs);
    });

    let read__moreBtn = document.querySelectorAll(".read__moreBtn");

    handleClick(read__moreBtn);
  });
};

// Search

let searchInput = document.querySelector(".search");
let noMatches = document.createElement("DIV");
noMatches.classList.add("no__matches");

let searchInputFun = (e) => {
  if (e.keyCode == 13) {
    posts__div.innerHTML = "";
    allData.forEach((e) => {
      e.forEach((ee) => {
        if (ee.title == searchInput.value) {
          searchedData.push(ee);
          searchInput.classList.remove("shake__input");
        } else if (searchInput.value == "") {
          searchInput.classList.add("shake__input");
          noMatches.innerHTML = "Type something!";
          posts__div.appendChild(noMatches);
        } else if (ee.title !== searchInput.value) {
          searchInput.classList.remove("shake__input");
          noMatches.innerHTML = `There is no post with title: <b>"${searchInput.value}"</b>  try something else!`;
          posts__div.appendChild(noMatches);
        }
      });
    });

    searchedData.forEach((e) => {
      if (searchedData.length !== 0) {
        posts__div.innerHTML = "";
        let postDivs = document.createElement("DIV");
        postDivs.classList.add("post");
        postDivs.innerHTML = `
            <h2>${e.title}</h2>
            <p>${e.body}</p>
            <button class='read__moreBtn' data-id=${e.id}>Read more <img src="Icons/rigth_arrow.png" alt="Right Arrow"></button>`;
        postDivs.classList.add("post");
        posts__div.appendChild(postDivs);
        searchedData = [];
      }
      let read__moreBtn = document.querySelectorAll(".read__moreBtn");

      handleClick(read__moreBtn);
    });
  } else {
    return false;
  }
};

// Btns new page

let handleClick = (btn) => {
  btn.forEach((e) => {
    e.addEventListener("click", (ee) => {
      let btn_target = ee.target.dataset.id;
      window.open(`posts.html#${btn_target}`, "_self");
    });
  });
};

// Filtered Data

let filteredData = {
  "Alen Zerbo": [],
  "Jules Verne": [],
  "Tomas Man": [],
  "J. D. Salinger": [],
  "Agata Christie": [],
  "Viktor Igo": [],
  all: [],
};

// Jules Verne, Viktor Igo, Tomas Man, J. D. Salinger, Agata Christie, Alen Zerbo,
let authors = document.querySelector(".authors");
let authorSelected = document.querySelector(".authors").options[0];

authors.addEventListener("click", () => {
  let authorSelected = document.querySelector(".authors").value;
  if (
    filteredData["Alen Zerbo"] == 0 &&
    filteredData["Jules Verne"] == 0 &&
    filteredData["J. D. Salinger"] == 0 &&
    filteredData["Agata Christie"] == 0 &&
    filteredData["Viktor Igo"] == 0 &&
    filteredData["Tomas Man"] == 0
  ) {
    allData.forEach((e) => {
      filteredData["Alen Zerbo"].push(e.slice(0, 15));
      filteredData["Jules Verne"].push(e.slice(15, 30));
      filteredData["J. D. Salinger"].push(e.slice(45, 65));
      filteredData["Agata Christie"].push(e.slice(65, 82));
      filteredData["Viktor Igo"].push(e.slice(83, 100));
      filteredData["Tomas Man"].push(e.slice(30, 45));
    });
  }

  if(authorSelected == 'Alen Zerbo') {
    posts__div.innerHTML = "";
    filteredData['Alen Zerbo'].forEach(e => {
      console.log(e);
      let postDivs = document.createElement("DIV");
      postDivs.classList.add("post");
      postDivs.innerHTML = `
          <h2>${e.title}</h2>
          <p>${e.body}</p>
          <button class='read__moreBtn' data-id=${e.id}>Read more <img src="Icons/rigth_arrow.png" alt="Right Arrow"></button>`;
      posts__div.appendChild(postDivs);
      console.log(posts__div);
    })
  }
});
