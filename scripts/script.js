function navHighlighter() {
  const sections = document.querySelectorAll("section");
  let scrollY = window.pageYOffset;
  sections.forEach((current=>{
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 180;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(".navbar .navbar-link[name*=" + sectionId + "]").classList.add("active")
      } else {
          document.querySelector(".navbar .navbar-link[name*=" + sectionId + "]").classList.remove("active")
      }
  }
  ))
}
window.addEventListener("scroll", (()=>{
  headerAnim();
  navHighlighter()
}
));
const scrollToSection = e=>{
  document.querySelector(`#${e.getAttribute("name")}`).scrollIntoView()
};
console.log("\x1B[36mHey developer, there are no logs here. jeez!");
console.log(
  "\x1B[36mRepo is available at https://github.com/bhuvanakanakam/bhuvanakanakam.github.io"
);
