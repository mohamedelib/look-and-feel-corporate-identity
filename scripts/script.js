// 1: selecteer de button
let mijnButton = document.querySelector('form button[type="submit"]');
let checkmark = document.querySelector(".checkmark");

// 2: wacht op een klik
mijnButton.addEventListener("click", function(){
  // 3: laat de checkmark zien, door een class toe te voegen aan die sectie..
checkmark.classList.toggle("checkmarkyes");
setTimeout(() => {
    checkmark.classList.remove("checkmarkyes");
  }, 3000);

})

  
