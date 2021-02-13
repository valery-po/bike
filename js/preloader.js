const mask = document.querySelector("[data-mask]");

const Preloader = function(mask){
  this.mask = mask;
  this.init();
}

window.preloader = Preloader;
const fn = Preloader.prototype;

fn.init = function() {
  window.addEventListener("load", () => {
    this.mask.classList.add("hide");
  })
}

if(mask){
  new Preloader(mask);
}