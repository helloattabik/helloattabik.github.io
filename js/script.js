// Custom Cursor
const cursor = document.querySelector('#cursor');
const anchor = document.querySelectorAll('a');

window.addEventListener('mousemove', (a) => {
    let scroll_position = window.scrollY;
    cursor.style.left = a.pageX + 'px';
    cursor.style.top = a.pageY - scroll_position + 'px';
});

// anchor tag hover effect
anchor.forEach((anchor_point) => {
    anchor_point.addEventListener("mouseover", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1.5)";
  });
  anchor_point.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
  });
});


// Fake Pre-Loader

const fake_preloader = document.querySelector('#fake-preloader');
const fake_preloader_active = document.querySelector("#fake-preloader .container");
const fp_count = document.querySelector (".fp-count");
const fp_page2_h2 = document.querySelector (".fp-page2 h2");

$(document).ready(function(){

    var count = 0;
    var counter = setInterval(function(){
        if(count <= 100){
            $('.fp-count').text(count);
            count++;
        }else if (count <= 250) {
            fake_preloader_active.classList.add('active');
            count++;
        }
        else{
            fp_page2_h2.classList.add('active');
            fp_count.classList.add('active'); 
            fake_preloader.classList.add('active'); 
        }
    }, 15);
});


// Navbar

const hamburger_menu = document.querySelector('.hamburger-menu');
const nav_list = document.querySelector('.nav-list');
const nav_item = document.querySelectorAll('.nav-list a');
const nav_item_b = document.querySelectorAll('.nav-list .b');

hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.toggle('active');
    nav_list.classList.toggle('active');
})

nav_item.forEach((nav_item_a) =>{
    nav_item_a.addEventListener('click', () =>{
      hamburger_menu.classList.toggle('active');
      nav_list.classList.toggle('active');
    })
})

nav_item_b.forEach((nav_item_b) =>{
    nav_item_b.addEventListener('click', () =>{
      dropdown_list.classList.remove('active');
    })
})


// More

const more = document.querySelector('.more');
const dropdown_list = document.querySelector('.dropdown-list');
const dropdown_item = document.querySelectorAll('.dropdown-list a');


more.addEventListener('click', () => {
    dropdown_list.classList.toggle('active');
})

dropdown_item.forEach((dropdown_item_a) =>{
    dropdown_item_a.addEventListener('click', () =>{
      dropdown_list.classList.toggle('active');
    })
})

// Certificate view

const cert_button_a = document.querySelector('.cert-button-a');
const cert_button_b = document.querySelector('.cert-button-b');
const cert_button_c = document.querySelector('.cert-button-c');
const cert_button_d = document.querySelector('.cert-button-d');

const cert_view_a = document.querySelector(".cert-view-a");
const cert_view_b = document.querySelector(".cert-view-b");
const cert_view_c = document.querySelector(".cert-view-c");
const cert_view_d = document.querySelector(".cert-view-d");

const cert_close_a = document.querySelector(".cert-close-a");
const cert_close_b = document.querySelector(".cert-close-b");
const cert_close_c = document.querySelector(".cert-close-c");
const cert_close_d = document.querySelector(".cert-close-d");

cert_button_a.addEventListener('click', () => {
    cert_view_a.classList.toggle('active');
})

cert_button_b.addEventListener('click', () => {
    cert_view_b.classList.toggle('active');
})


cert_button_c.addEventListener('click', () => {
    cert_view_c.classList.toggle('active');
})


cert_button_d.addEventListener('click', () => {
    cert_view_d.classList.toggle('active');
})


cert_close_a.addEventListener('click', () => {
    cert_view_a.classList.remove('active');
})

cert_close_b.addEventListener('click', () => {
    cert_view_b.classList.remove('active');
})


cert_close_c.addEventListener('click', () => {
    cert_view_c.classList.remove('active');
})


cert_close_d.addEventListener('click', () => {
    cert_view_d.classList.remove('active');
})



