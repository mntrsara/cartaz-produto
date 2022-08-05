let imgBox = document.getElementById("img");
let colors = document.querySelectorAll(".color");
colors.forEach(function (ele) {
  //clica em todas as cores
 ele.addEventListener("click", function () {
    //altera imagem
    let img = ele.getAttribute("data-img");
    imgBox.src = img;
    imgBox.classList.add("img-animation");
    setTimeout(function () {
      imgBox.classList.remove("img-animation");
    }, 300);
    //borda dos circulos
    colors.forEach((color) => color.classList.remove("border-effect"));
    ele.classList.add("border-effect");
  });
});