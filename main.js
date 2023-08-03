let cheak = document.getElementById("chk");
let clear = document.getElementById("Clr");
let display = document.getElementById("display");

cheak.addEventListener("click", () => {
  let x = parseInt(document.getElementById("inp").value);

  if (x % 2 == 0) {
    display.innerText = x + " is Even Number.";
  } else {
    display.innerText = x + " is Odd Number.";
  }
});

clear.addEventListener('click',()=>{
    display.innerHTML = '';
})
