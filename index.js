




const btns=document.querySelector(".btns");
const p_btn=document.querySelectorAll(".select_btn");
const p_img_elem=document.querySelectorAll(".img-overlay");

btns.addEventListener("click",(e)=>{
    const active_btn=e.target;
    console.log(active_btn);

    p_btn.forEach((curElem) => curElem.classList.remove("p-active-btn"));
    active_btn.classList.add("p-active-btn");

    /// finding number from button attr
    const btn_num=active_btn.dataset.select_btnNum;
    console.log(btn_num);
    const img_active=document.querySelectorAll(`.select_btn--${btn_num}`);
    // p_img_elem=document.querySelectorAll.add()

    p_img_elem.forEach((curElem)=>{
        curElem.classList.add("p-image-not-active");
    })
    img_active.forEach((curElem)=>{
        curElem.classList.remove("p-image-not-active");
    })
    });
/// dynamic assign of slidesPerView
    var swiper = new Swiper(".mySwiper", {
      slidesPerView:1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      }
    );

    const header=document.querySelector('header');
    const scrollelement=document.querySelector('.scroll-top');
    const scrolltotop=()=>{
      header.scrollIntoView({behavior:"smooth"});
    }
    scrollelement.addEventListener('click',scrolltotop);


    // document.getElementsByClassName('nav-link').addEventListener('click', function() {
    //   const targetSection = document.getElementById('#Blog-page');
    
    //   targetSection.scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // });