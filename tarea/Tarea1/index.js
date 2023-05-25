const root = document.documentElement;
const sections = document.querySelectorAll("section");

function animateSections() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    if (sectionTop < viewportHeight && sectionBottom >= 0) {
      section.classList.add("animate");
    } else {
      section.classList.remove("animate");
    }
  });
}

animateSections();
window.addEventListener("scroll", animateSections);

const lightTheme = {
  primaryColor: "#f1f1f1",
  secondaryColor: "#666",
  tertiaryColor: "#000",
};

const darkTheme = {
  primaryColor: "#191919",
  secondaryColor: "#999",
  tertiaryColor: "#fff",
};

let theme = localStorage.getItem("theme") || "dark";

function setTheme(theme) {
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--secondary-color", theme.secondaryColor);
  root.style.setProperty("--tertiary-color", theme.tertiaryColor);
}

if (theme === "light") {
  setTheme(lightTheme);
} else {
  setTheme(darkTheme);
}

function toggleTheme() {
  if (theme === "light") {
    theme = "dark";
    localStorage.setItem("theme", "dark");
    setTheme(darkTheme);
  } else {
    theme = "light";
    localStorage.setItem("theme", "light");
    setTheme(lightTheme);
  }
}
