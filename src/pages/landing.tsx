import "./landing.scss";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useEffect } from "preact/hooks";

function setBackgroundImageSize() {
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;
  console.log(`Viewport size: ${viewportWidth} x ${viewportHeight}`);
  let landing = document.querySelector<HTMLElement>(".landing");
  if (landing) {
    let height: string = viewportHeight + "px";
    landing.style.height = height;
  }
}

export default function Landing() {
  useEffect(() => {
    setBackgroundImageSize();
  });

  return (
    <div class={"landing"}>
      <h1 class={"greeting"}>
        <p>Welcome To</p> <p>Ocean Springs</p> <p>Tae-Kwon-Do!</p>
      </h1>

      <div class={"arrowDiv hidden"}>
        <p class={"arrowText"}>Learn More</p>
        <BsFillArrowDownCircleFill
          className={"arrow"}
          size={40}
          color={"white"}
        />
      </div>
    </div>
  );
}
