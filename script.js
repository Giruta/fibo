let page = {
  init:function(){

    this.matrixFirst = document.querySelector(".matrix-first");
    this.matrixSecond = document.querySelector(".matrix-second");
    this.matrixThird = document.querySelector(".matrix-third");

    this.createMatrix(2, 1, this.matrixFirst);
    this.createMatrix(3, 5, this.matrixSecond);
    this.createMatrix(4, 14, this.matrixThird);
  },

  createMatrix(m, l, block) {
    for (let i = 0; i < m*m; i++) {
      let div = document.createElement("div"); 
      div.className = "matrix__item";
      div.innerHTML = `${this.fib(i+l)}`;  
      block.appendChild(div);
    }
    return block;
  },

  fib(n) {
    return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
  }
};

window.addEventListener("load",function(){
  page.init();
});