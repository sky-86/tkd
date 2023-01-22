import * as Components from "./components/components";
import * as Pages from "./pages/pages";
import { useEffect } from "preact/hooks";

function createScrollAnimations() {
  const options = {
    root: null,
    rootMargin: "-60% 0% 0% 0%",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
      console.log(entry.intersectionRatio);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, options);

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((e) => observer.observe(e));
}

export default function App() {
  // activate the scroll animations
  useEffect(() => {
    createScrollAnimations();
  });

  return (
    <>
      <Pages.Landing />
      <div class={"pages"}>
        <img class={"logo"} src={"/logo.png"} alt={"logo"} />
        <Pages.About />
        <Pages.Faq />
        <Pages.Calendar />
        <Pages.Contact />
      </div>
      <Components.Footer />
    </>
  );
}
