
// let page_num = 1;

// // Pagination first time!

// let posts_per_page = allData.length / page_num;
// let pagination__num = document.querySelector('.pagination__num');
// let page_n = 10;
// for(let i=1; i<=page_n; i++) {
//   let page_nums = document.createElement('SPAN');
//   page_nums.classList.add('pagination__nums');
//   page_nums.setAttribute('data-id', i)
//   page_nums.innerHTML = i;
//   pagination__num.appendChild(page_nums);
// }

// let x = document.querySelectorAll('.pagination__nums');

// x.forEach(e => {
//   e.addEventListener('click', (ee) =>  {
//     posts__div.innerHTML = '';
//     let numTarget = ee.target.dataset.id;
//     let n = numTarget*10;
//     let m = n-10;
//     if(numTarget == 1) {
//       fetchedData(numTarget, n);
//     }
//     else if(numTarget > 1 && numTarget <=10) {
//       console.log(m, n);
//       fetchedData(m, n)
//     }
//   })
// })