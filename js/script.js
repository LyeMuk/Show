const slider = document.querySelector(".main-slider");
const images = document.querySelector(".slider-images");
const cin = document.querySelector(".count-images");
const img = document.querySelectorAll(".slider-img");
const counting = document.querySelectorAll(".slider-img").length;

for (let index = 0; index < counting; index++) {
  let div = `<div class="count-images-num"></div>` 
  if(index == 0) div = `<div class="count-images-num active"></div>`
  cin.innerHTML += div
}

const controls = document.querySelectorAll(".count-images-num");
const next = document.querySelector(".slider-controls-next");
const previous = document.querySelector(".slider-controls-previous");
const imgactive = document.querySelectorAll(".slider-img .active");

controldots();
// desplazamiento();
setInterval(auto, 10000);
next.addEventListener("click", () => btnNext());
previous.addEventListener("click", () => btnPrevious());

function controldots() {
  controls.forEach((dot, i) => {
    controls[i].addEventListener("click", () => {
      //   let scrollWidth = slider.scrollWidth;
      //   let posicion = i;
      //   let operacion = posicion * -scrollWidth;
      controls.forEach((dot, i) => {
        controls[i].classList.remove("active");
      });
      img.forEach((dot, i) => {
        img[i].classList.remove("active");
      });
      img[i].classList.add("active");
      controls[i].classList.add("active");
    });
  });
}

function position() {
  var pos;
  img.forEach((dot, i) => {
    if (img[i].className === "slider-img active") {
      pos = i;
    }
  });
  return pos;
}

function btnNext() {
  let pos = position();
  pos = pos + 1;
  if (pos >= counting) {
    pos = 0;
  } else {
    pos = pos;
  }
  controls.forEach((dot, i) => {
    controls[i].classList.remove("active");
  });
  img.forEach((dot, i) => {
    img[i].classList.remove("active");
  });
  img[pos].classList.add("active");
  controls[pos].classList.add("active");
}

function btnPrevious() {
  let pos = position();
  pos = pos - 1;
  if (pos < 0) {
    pos = counting - 1;
  } else {
    pos = pos;
  }
  controls.forEach((dot, i) => {
    controls[i].classList.remove("active");
  });
  img.forEach((dot, i) => {
    img[i].classList.remove("active");
  });
  img[pos].classList.add("active");
  controls[pos].classList.add("active");
}

function auto() {
  let pos = position();
  pos = pos + 1;
  if (pos >= counting) {
    pos = 0;
  } else {
    pos = pos;
  }
  controls.forEach((dot, i) => {
    controls[i].classList.remove("active");
  });
  img.forEach((dot, i) => {
    img[i].classList.remove("active");
  });
  img[pos].classList.add("active");
  controls[pos].classList.add("active");
}
  // function desplazamiento() {
  //   img.forEach((dot, i) => {
  //     img[i].addEventListener("dragstart", (e) => e.preventDefault());
  //     let pressed = false;
  //     let startX = 0;

  //     img[i].addEventListener("mousedown", function (e) {
  //       pressed = true;
  //       startX = e.clientX;
  //     });

  //     img[i].addEventListener("mouseleave", function (e) {
  //       pressed = false;
  //     });

  //     window.addEventListener("mouseup", function (e) {
  //       pressed = false;
  //     });

  //     img[i].addEventListener("mousemove", function (e) {
  //       if (!pressed) {
  //         return;
  //       }

  //       let abc = (this.scrollLeft += startX - e.clientX);

  //       if (abc >= 0) {
  //         console.log(abc);
  //         btnNext();
  //       } else {
  //         btnPrevious();
  //       }
  //     });
  //   });
  // }



