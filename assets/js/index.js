const btn1 = document.getElementById("button1");
const list1 = document.getElementById("list1");
const btn2 = document.getElementById("button2");
const list2 = document.getElementById("list2");
const btn3 = document.getElementById("button3");
const list3 = document.getElementById("list3");
const btn4 = document.getElementById("button4");
const list4 = document.getElementById("list4");
const btn5 = document.getElementById("button5");
const list5 = document.getElementById("list5");
const btn6 = document.getElementById("button6");
const list6 = document.getElementById("list6");
const btn7 = document.getElementById("button7");
const list7 = document.getElementById("list7");
const btn8 = document.getElementById("button8");
const list8 = document.getElementById("list8");

btn1.addEventListener("click",function(){
  list1.classList.toggle("hidden");
  btn1.classList.toggle("close");
});

btn2.addEventListener("click",function(){
  list2.classList.toggle("hidden");
  btn2.classList.toggle("close");
});

btn3.addEventListener("click",function(){
  list3.classList.toggle("hidden");
  btn3.classList.toggle("close");
});

btn4.addEventListener("click",function(){
  list4.classList.toggle("hidden");
  btn4.classList.toggle("close");
});

btn5.addEventListener("click",function(){
  list5.classList.toggle("hidden");
  btn5.classList.toggle("close");
});

btn6.addEventListener("click",function(){
  list6.classList.toggle("hidden");
  btn6.classList.toggle("close");
});

btn7.addEventListener("click",function(){
  list7.classList.toggle("hidden");
  btn7.classList.toggle("close");
});

btn8.addEventListener("click",function(){
  list8.classList.toggle("hidden");
  btn8.classList.toggle("close");
});

const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
  let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
    if (entries[j].isIntersecting) {
      entries[j].target.classList.add('active');
      observer.unobserve(entries[j].target);
    }
  }
  });
  observer.observe(targets[i]);
}

const pagetop_btn = document.querySelector(".p-pageTop");

pagetop_btn.addEventListener("click", scroll_top);
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}