const rightArrow = document.getElementById("arrowright");
const rightArrow1 = document.getElementById("arrowright1");
const rightLeft = document.getElementById("arrowleft");
const rightLeft1 = document.getElementById("arrowleft1");
const sum = document.getElementById("sum");
const sum1 = document.getElementById("sum1");
const s1 = document.getElementById("s1");
let bbb = 0;
let aaa;
function move() {
  rightArrow.classList.toggle("gray");
}
function move1() {
  rightArrow1.classList.toggle("gray");
}
function move1_1() {
  rightLeft1.classList.toggle("gray");
}
function move1_2() {
  rightArrow1.classList.toggle("gray");
}

function gray() {
  aaa = "(" + bbb + "px)";
  s1.style.transform = "translateX" + aaa;
}
if (window.innerWidth < 450) {
  sum1.textContent = "1";
  rightArrow1.onclick = function () {
    if (Number(sum1.textContent) < 6) {
      sum1.textContent = Number(sum1.textContent) + 1;
      if (Number(sum1.textContent) == 6) {
        move1();
      }
      if (Number(sum1.textContent) == 2) {
        move1_1();
      }
      bbb = bbb - 450;
      gray();
    }
  };
  rightLeft1.onclick = function () {
    if (Number(sum1.textContent) > 1) {
      if (Number(sum1.textContent) == 6) {
        move1();
      }
      if (Number(sum1.textContent) == 2) {
        move1_1();
      }
      sum1.textContent = Number(sum1.textContent) - 1;
      bbb = bbb + 450;
      gray();
    }
  };
} else {
  rightArrow.onclick = function () {
    if (Number(sum.textContent) < 6) {
      sum.textContent = Number(sum.textContent) + 1;
      if (Number(sum.textContent) == 6) {
        move();
      }

      bbb = bbb - 450;
      gray();
    }
  };
  rightLeft.onclick = function () {
    if (Number(sum.textContent) > 3) {
      if (Number(sum.textContent) == 6) {
        move();
      }
      sum.textContent = Number(sum.textContent) - 1;
      bbb = bbb + 450;
      gray();
    }
  };
}

const arrr = document.getElementById("arrowR");
const alll = document.getElementById("arrowL");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const grid2 = document.getElementById("grid2");
let num = 1;
let back = 0;
let after;
function d1_2() {
  dot2.classList.toggle("dot--black");
  dot1.classList.toggle("dot--black");
}
function d2_3() {
  dot3.classList.toggle("dot--black");
  dot2.classList.toggle("dot--black");
}
function d3_4() {
  dot4.classList.toggle("dot--black");
  dot3.classList.toggle("dot--black");
}
function d4_5() {
  dot5.classList.toggle("dot--black");
  dot4.classList.toggle("dot--black");
}

function grid() {
  after = "(" + back + "px)";
  grid2.style.transform = "translateX" + after;
}

function plus() {
  back = back + 375;
  grid();
}
function minus() {
  back = back - 375;
  grid();
}

arrr.onclick = function () {
  if (num == 4) {
    d4_5();
    arrr.classList.toggle("gray--none");
    num = num + 1;
    minus();
  }
  if (num == 3) {
    d3_4();
    num = num + 1;
    minus();
  }
  if (num == 2) {
    d2_3();
    num = num + 1;
    minus();
  }
  if (num == 1) {
    alll.classList.toggle("gray--none");
    d1_2();
    num = num + 1;
    minus();
  }
};

alll.onclick = function () {
  if (num == 2) {
    d1_2();
    alll.classList.toggle("gray--none");
    num = num - 1;
    plus();
  }
  if (num == 3) {
    d2_3();
    num = num - 1;
    plus();
  }
  if (num == 4) {
    d3_4();
    num = num - 1;
    plus();
  }
  if (num == 5) {
    arrr.classList.toggle("gray--none");
    d4_5();
    num = num - 1;
    plus();
  }
};
