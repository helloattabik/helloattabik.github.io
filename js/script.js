const cursor = document.querySelector("#cursor");
const anchor = document.querySelectorAll("a");

//   custom cursor

window.addEventListener("mousemove", (e) => {
    let scroll_position = window.scrollY;
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY - scroll_position + "px";
});

let button_container = document.querySelector('.button-container');
const button_mobile = document.querySelector('.button-mobile');
    button_container.addEventListener('mousemove', (c) =>{
    button_mobile.style.left = c.pageX + "%";
    button_mobile.style.top = c.pageY  - scroll_position + "%";

  })

// anchor tag hover effect
anchor.forEach((anc) => {
    anc.addEventListener("mouseover", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1.5)";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
  });
});


const nav = document.querySelector("nav");
const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_list = document.querySelector(".nav-list");
const nav_item = document.querySelectorAll('.nav-list a');


hamburger_menu.addEventListener("click", () =>{
    hamburger_menu.classList.toggle("active");
	nav_list.classList.toggle('active');
})

nav_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger_menu.classList.toggle('active');
		nav_list.classList.toggle('active');

	});
});




const more = document.querySelector(".more");
const dropdown = document.querySelector(".dropdown-list");
const dropdown_item = document.querySelectorAll(".dropdown-list a");

more.addEventListener("click", () =>{
  more.classList.toggle('active');
  dropdown.classList.toggle('active');
})

dropdown_item.forEach((d_item) =>{
  d_item.addEventListener('click', () =>{
    more.classList.toggle('active');
    dropdown.classList.toggle('active');
  })
})

const arrows_left = document.querySelector(".icon-left");
const arrows_right = document.querySelector(".icon-right");
const arrows_mobile = document.querySelector(".icon-mobile");
const ex_list = document.querySelector(".ex-list");

arrows_right.addEventListener("click", () =>{
  ex_list.classList.add('active');
  arrows_right.classList.add('active');
  arrows_mobile.classList.add('active');
  arrows_left.classList.remove('active');
})

arrows_left.addEventListener("click", () =>{
  ex_list.classList.remove('active');
  arrows_right.classList.remove('active');
  arrows_mobile.classList.remove('active');
  arrows_left.classList.add('active');
})


const cert_view_a = document.querySelector(".cert-view-a");
const cert_view_b = document.querySelector(".cert-view-b");
const cert_view_c = document.querySelector(".cert-view-c");
const cert_view_d = document.querySelector(".cert-view-d");
const cert_onview_a = document.querySelector(".cert-onview-a");
const cert_onview_b = document.querySelector(".cert-onview-b");
const cert_onview_c = document.querySelector(".cert-onview-c");
const cert_onview_d = document.querySelector(".cert-onview-d");

const cert_onview_close_a = document.querySelector(".cert-onview-a .button-m");
const cert_onview_close_b = document.querySelector(".cert-onview-b .button-m");
const cert_onview_close_c = document.querySelector(".cert-onview-c .button-m");
const cert_onview_close_d = document.querySelector(".cert-onview-d .button-m");


cert_view_a.addEventListener('click', () =>{
  cert_onview_a.classList.add('active');
})

cert_view_b.addEventListener('click', () =>{
  cert_onview_b.classList.add('active');
})

cert_view_c.addEventListener('click', () =>{
  cert_onview_c.classList.add('active');
})

cert_view_d.addEventListener('click', () =>{
  cert_onview_d.classList.add('active');
})


cert_onview_close_a.addEventListener('click',()=>{
  cert_onview_a.classList.remove('active');
})

cert_onview_close_b.addEventListener('click',()=>{
  cert_onview_b.classList.remove('active');
})
cert_onview_close_c.addEventListener('click',()=>{
  cert_onview_c.classList.remove('active');
})
cert_onview_close_d.addEventListener('click',()=>{
  cert_onview_d.classList.remove('active');
})


// Change Color Mode
const color_mode = document.querySelector("#color-mode");
const html = document.querySelector("html");

 color_mode.addEventListener('click', () => {
    html.classList.toggle('active');
    color_mode.classList.toggle('active');
 })






let tools_slide1 = document.getElementsByClassName("tools-slide1")[0];
let tools_slide2 = document.getElementsByClassName("tools-slide2")[0];
const tools_page = document.querySelector("#tools")[0];

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    tools_slide1.style.left = value * 0.3 + 'px';
    tools_slide2.style.right = value * 0.3 + 'px';
})


window.alert("Maaf, Website Ini Sedang Dalam Proses Perbaikan Ulang");

