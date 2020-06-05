const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar-brand img");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navbar.classList.remove("navbar-light", "bg-transparent");
    logo.classList.remove("logo");
    logo.classList.remove("hide");
    logo.classList.add("logoscroll");
    logo.classList.add("show");
    navbar.classList.add("navbar-dark", "bg-dark");
    // console.log(navbar.classList);
  } else {
    logo.classList.add("logo");
    logo.classList.remove("logoscroll");
    logo.classList.add("hide");
    logo.classList.remove("show");
    navbar.classList.add("navbar-light", "bg-transparent");
    navbar.classList.remove("navbar-dark", "bg-dark");
  }
});

// identifying active element
const homeSection = document.getElementById("home");
const testimonialsSection = document.getElementById("testimonials");
const insightsSection = document.getElementById("insights");
const aboutSection = document.getElementById("about");
const pricingSection = document.getElementById("pricing");
const faqSection = document.getElementById("faq");

const homeHeight = homeSection.offsetTop;
const testimonialsHeight = testimonialsSection.offsetTop;
const insightHeight = insightsSection.offsetTop;
const aboutHeight = aboutSection.offsetTop;
const pricingHeight = pricingSection.offsetTop;
const faqHeight = faqSection.offsetTop;

const nav_elements = document.querySelectorAll(".nav-item");

const home = nav_elements[0];
const testimonials = nav_elements[1];
const insights = nav_elements[2];
const about = nav_elements[3];
const pricing = nav_elements[4];
const faq = nav_elements[5];

window.addEventListener("scroll", () => {
  let winhight = window.screen.availHeight;
  let height = window.scrollY - winhight / 2;

  if (height > homeHeight && height < testimonialsHeight) {
    testimonials.classList.add("active");
    home.classList.remove("active");
    insights.classList.remove("active");
    about.classList.remove("active");
    pricing.classList.remove("active");
    faq.classList.remove("active");
  } else if (height > testimonialsHeight && height < insightHeight) {
    insights.classList.add("active");
    home.classList.remove("active");
    testimonials.classList.remove("active");
    about.classList.remove("active");
    pricing.classList.remove("active");
    faq.classList.remove("active");
  } else if (height > insightHeight && height < aboutHeight) {
    about.classList.add("active");
    home.classList.remove("active");
    testimonials.classList.remove("active");
    insights.classList.remove("active");
    pricing.classList.remove("active");
    faq.classList.remove("active");
  } else if (height > aboutHeight && height < pricingHeight) {
    pricing.classList.add("active");
    home.classList.remove("active");
    testimonials.classList.remove("active");
    insights.classList.remove("active");
    about.classList.remove("active");
    faq.classList.remove("active");
  } else if (height > pricingHeight && height < faqHeight) {
    faq.classList.add("active");
    home.classList.remove("active");
    testimonials.classList.remove("active");
    insights.classList.remove("active");
    about.classList.remove("active");
    pricing.classList.remove("active");
  } else {
    home.classList.add("active");
    testimonials.classList.remove("active");
    insights.classList.remove("active");
    about.classList.remove("active");
    pricing.classList.remove("active");
    faq.classList.remove("active");
  }
});
