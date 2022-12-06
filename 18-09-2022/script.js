var count = 0;
let value = document.getElementById("value");

// let btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (val) => {
//     let style = val.currentTarget.classList;
//     if (style.contains("increase")) {
//       count++;
//     } else if ("decrease") {
//       count--;
//     } else if ("reset") {
//       count = 0;
//     }
//     value.textContent = count;
//     if (count > 0) {
//       value.style.color = "blue";
//     } else {
//       value.style.color = "red";
//     }
//   });
// });

function btn(val) {
  val === "increase" ? count++ : count--;
  val === "reset" && (count = 0);
  value.innerHTML = count;
  count >= 0 ? (value.style.color = "blue") : (value.style.color = "red");
}
