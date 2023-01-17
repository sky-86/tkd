import './footer.scss';
import { BsFacebook, BsEnvelope, BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <div class={"footer"}>
      <div className='socials'>
        <a href={"#facebook"}><BsFacebook size={30} color={"#3b5998"} /></a>
        <a href={"#youtube"}><BsYoutube size={30} color={"#ff0000"} /></a>
        <a href={"#email"}><BsEnvelope size={30} /></a>
      </div>
      <p className='copyright'>OSTKD © 2023</p>
    </div>
  )
}
