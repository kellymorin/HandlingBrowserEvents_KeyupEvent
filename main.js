

// Give each article a different border color.

// Write an event listener that listens for the keyup event on the input field.

let input = document.getElementById("message");

input.addEventListener("keyup", ()=>{
  let mirror1 = document.getElementById("mirror1")
  let mirror2 = document.getElementById("mirror2")
  mirror1.textContent = input.value;
  mirror2.textContent = input.value;
})


// The event handler function should update the textContent property of both sections.