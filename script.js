const URL = "https://api.thecatapi.com/v1/images/search";
const facting = document.querySelector("#fact");
const btn = document.querySelector("button");
//fetching is used to sending or receiving the resources
// fetch API structure
//let promise=fetch(url,[options]) //url returns promise
let promise = fetch(URL);
console.log(promise);

const getFact = async () => {
  console.log("getting the data..");
  let response = await fetch(URL);
  console.log(response.status);
  let data = await response.json(); //json is used to get the data in the form of js object
  console.log(data[0]);
  //   facting.innerText = data[0];
};
//JSON =js object notation
// btn.addEventListener("click", getFact);
