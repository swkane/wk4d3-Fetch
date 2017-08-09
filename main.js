let baseURL = "http://jsonplaceholder.typicode.com/users?=";
// let searchBox = document.querySelector("input");
let select = document.querySelector('select');
let button = document.querySelector('button');
let content = document.querySelector('.content');
// const options = [];
// options.push(document.querySelectorAll('option'));
// console.log(options);

// TODO: Grab the value of the currently selected option

button.addEventListener("click", function(e){
  // console.log();
  // if (e.key === "Enter") {
    // let query = searchBox.value;
    // console.log(baseURL + query);
    fetch(baseURL).then(function(response) {
        if (response.status !== 200) {
          console.log(response);
          return;
        }
        response.json().then(giveMeDropData);
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  // }
});

function giveMeDropData(data) {
  console.log("Here is the data: ", data);

  for (var i = 0; i < data.length; i++) {
    if (data[i].id === select.selectedIndex) {
      let div = document.createElement('div');
      div.setAttribute("class", "result");
      let id = data[i].id;
      let name = data[i].name;
      let username = data[i].username;
      let email = data[i].email;

      div.innerHTML = `
          <img src="http://via.placeholder.com/100">
          <p><span>Employee ID: </span>${id}</p>
          <p><span>Name: </span>${name}</p>
          <p><span>Username: </span>${username}</p>
          <p><span>Email: </span>${email}</p>
        `;
      content.appendChild(div);
    }
  }
}

// Function for search

// function giveMeSearchData(data) {
//   console.log("Here is the data: ", data);
//
//   for (var i = 0; i < data.length; i++) {
//     let div = document.createElement('div');
//     div.setAttribute("class", "result");
//     let id = data[i].id;
//     let name = data[i].name;
//     let username = data[i].username;
//     let email = data[i].email;
//
//     div.innerHTML = `
//         <p>${id}</p>
//         <p>${name}</p>
//         <p>${username}</p>
//         <p>${email}</p>
//       `;
//     content.appendChild(div);
//   }
// }

// searchBox.addEventListener("keypress", function(e){
//   if (e.key === "Enter") {
//     let query = searchBox.value;
//     console.log(baseURL + query);
//     fetch(baseURL+query).then(function(response) {
//         if (response.status !== 200) {
//           console.log(response);
//           return;
//         }
//         response.json().then(giveMeSearchData);
//       }
//     )
//     .catch(function(err) {
//       console.log("Fetch Error :-S", err);
//     });
//   }
// });
