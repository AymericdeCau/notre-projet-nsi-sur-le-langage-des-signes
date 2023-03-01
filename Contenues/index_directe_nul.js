// Selecteurs
// document.querySelector('h4').style.background = "yellow";

// const baliseHTML = document.querySelector("#b1");
// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";

const question = document.querySelector(".clic");
const b1 = document.querySelector("#b1");
const b2 = document.getElementById("b2");
const response = document.querySelector("#p");
// console.log(response)

// question.addEventListener("événement", function)
// question.addEventListener("click", () => {
//   // question.style.background = "red";
//   // question.style.border = "3px solid teal";
//   // question.classList.add("question");
//   question.classList.toggle("question");
// })

b1.addEventListener("click", () => {
  response.classList.add("show")
  response.style.display = "visible";
  response.style.color = "green"
})

b2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.color = "red"
})
