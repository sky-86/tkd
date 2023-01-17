import './landing.scss';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

export default function Landing() {
  return (
    <div class={"landing"}>
      <h1 class={"greeting"}>Welcome To Ocean Springs Tae-Kwon-Do!</h1>

      <div class={"arrowDiv hidden"}>
        <p class={"arrowText"}>Learn More</p>
        <BsFillArrowDownCircleFill className={"arrow"} size={40} color={"white"} />
      </div>
    </div>
  )
}
