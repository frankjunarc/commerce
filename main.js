/*=============== SHOW MENU ===============*/

const navmenu = document.getElementById('nav-menu'),
    navtoggle = document.getElementById('nav-toggle')
navclose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navtoggle) {
    navtoggle.addEventListener("click", () => {
        navmenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navclose) {
    navclose.addEventListener("click", () => {
        navmenu.classList.remove('show-menu')
    })
}
/*=============== SHOW CART ===============*/

const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop')
cartClose = document.getElementById('cart-close')


/*===== CART SHOW =====*/
/* Validate if constant exists */

if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */

if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/*=============== SHOW LOGIN ===============*/

const login = document.getElementById('login'),
    loginButton = document.getElementById('login-toggle')
loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */

if (loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */

if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}

/*=============== HOME SWIPER ===============*/

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    Loop: 'true',

})

/*=============== SHOW SCROLL UP ===============*/

function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)

/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/

const accordionitem = document.querySelectorAll('.questions__item')

accordionitem.forEach((item) => {
    const accordionheader = item.querySelector('.questions__header')

    accordionheader.addEventListener('click', () => {
        const openietm = document.querySelector('accordion-open')

        toggleItem(item)

        if (openitem && openitem !== item) {
            toggleItem(openietm)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style__switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style__switcher").classList.contains("open")) {
        document.querySelector(".style__switcher").classList.remove("open")
    }
})

function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");
    themeColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors();
        }
    })
    function setColors() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }

    if (localStorage.getItem("color") !== null) {
        setColors();
    }
    else {
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active");

    }
}
themeColors();



const productItems = document.querySelectorAll(".product__img"),
        totalProductItems = productItems.length,
        lightbox = document.querySelector(".lightbox"),
        lightboxImg = lightbox.querySelector(".lightbox__img"),
        lightboxClose = lightbox.querySelector(".lightbox__close"),
        lightboxCounter = lightbox.querySelector(".caption__counter");
    let itemIndex = 0;

for(let i=0; i<totalProductItems;i++){
    productItems[i].addEventListener("click", function() {

        itemIndex = i;
        console.log(i)
        changeItem();
        toggleLightbox();
    })
}

function nextItem(){
    if(itemIndex === totalProductItems-1){
        itemIndex = 0;
    }
    else{
        itemIndex++
    }
    changeItem()
}

function prevItem(){
    if(itemIndex === 0){
        itemIndex = totalProductItems-1;
    }
    else{
        itemIndex--
    }
    changeItem()
}

function toggleLightbox(){
    lightbox.classList.toggle("open");
}

function changeItem(){
    imgSrc = productItems[itemIndex].querySelector(".product__img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalProductItems;
}

lightbox.addEventListener("click", function(){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox()
    }
})