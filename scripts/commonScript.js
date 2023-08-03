//-------   HEADER TOGGLE FUNCTION ----
const header = document.querySelector(".header");
function toggleNav() {
    const sections = document.querySelectorAll("section, footer");
    header.classList.toggle("active");
    header.classList.contains("active") ? sections.forEach((section=>{
        section.addEventListener("click", toggleNav)
    }
    )) : sections.forEach((section=>{
        section.removeEventListener("click", toggleNav)
    }
    ))
}
//---- HEADER ANIMATION FUNCTION. ----
const anchors = header.querySelectorAll("a");
const headerAnim = ()=>{
    const offsetY = window.scrollY;
    header.classList.contains("header-scroll-style") ? offsetY < 50 && header.classList.remove("header-scroll-style") : offsetY > 200 && header.classList.add("header-scroll-style")
}
;
headerAnim();
window.addEventListener("scroll", headerAnim);

//------ LOADER FUNCTION -------------------

document.querySelector("body").style.overflow = "hidden";
slowInternet = setTimeout((()=>{
  document.querySelector(".loaderDiv p").innerHTML = "Slow internet :("
}
), 3e3);
almostReady = setTimeout((()=>{
  document.querySelector(".loaderDiv p").innerHTML = "Page is almost ready..."
}
), 7e3);
document.onreadystatechange = ()=>{
  if (document.readyState === "complete") {
      clearTimeout(slowInternet);
      clearTimeout(almostReady);
      document.querySelector(".loaderDiv p").innerHTML = "Page is almost ready!";
      setTimeout((()=>{
          document.querySelector(".loaderDiv p").innerHTML = "Page is ready!"
      }
      ), 1e3);
      setTimeout((()=>{
          document.querySelector(".loaderDiv").classList.add("removeLoader");
          document.querySelector("body").style.overflowY = "scroll"
      }
      ), 2500);
      window.scrollTo(0, 0)
  }
  window.scrollTo(0, 0)
}
;

//-----------SKELETON LOADER--------------//

const setSkeleton = () => {
  const ImgDiv = document.querySelectorAll(`.imgDiv`);

  ImgDiv.forEach((div) => {
    var image = div.querySelector(`img`);

    if (!image.src.includes("/assets/")) {
      image.style.scale = 0;
      image.style.transition = "all 0.2s";

      image.onload = (img) => {
        img.target.style.scale = "1";
        div.classList.remove("skeleton-box");
      };
    } else {
      div.classList.remove("skeleton-box");
    }
  });
};