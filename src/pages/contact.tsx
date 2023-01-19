import text from '../assets/text.json';

export default function Contact() {
  return (
    <div class={'page'}>
      <h1>Contact</h1>
      <p>{text.phone}</p>
      <p>{text.address}</p>
    </div>
  )
}
