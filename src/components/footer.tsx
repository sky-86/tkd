import "./footer.scss";
import { BsFacebook, BsEnvelope, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div class={"footer"}>
      <div className="socials">
        <a href={"https://www.facebook.com/osmstkd/"}>
          <BsFacebook size={30} color={"#3b5998"} />
        </a>
        <a href={"https://www.youtube.com/@oceanspringstaekwondo4834"}>
          <BsYoutube size={30} color={"#ff0000"} />
        </a>
        <a href={"mailto:osmstkd@gmail.com"}>
          <BsEnvelope size={30} />
        </a>
      </div>
      <p className="copyright">OSTKD © 2023</p>
    </div>
  );
}
