const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slideTitle = document.querySelector(".slide-title");
const slideDescribe = document.querySelector(".slide-describe");
const moImg = document.querySelector(".slider-image");
const pcImg = document.querySelector(".slider-picture source");

const slide = [
  {
    id: 1,
    mobileImg: "assets/mobile-image-hero-1.jpg",
    desktopImg: "assets/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    describe:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    mobileImg: "assets/mobile-image-hero-2.jpg",
    desktopImg: "assets/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    describe:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    mobileImg: "assets/mobile-image-hero-3.jpg",
    desktopImg: "assets/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    describe:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let counter = 1;

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter > slide.length - 1) {
    counter = 0;
  }
  moImg.src = slide[counter].mobileImg;
  pcImg.srcset = slide[counter].desktopImg;
  slideTitle.textContent = slide[counter].title;
  slideDescribe.textContent = slide[counter].describe;
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slide.length - 1;
  }
  moImg.src = slide[counter].mobileImg;
  pcImg.srcset = slide[counter].desktopImg;
  slideTitle.textContent = slide[counter].title;
  slideDescribe.textContent = slide[counter].describe;
});
