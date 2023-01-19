import text from '../assets/text.json';

export default function About() {
  const about = text.about;
  return (
    <div class={'page'}>
      <h1>About</h1>
      <p>{about}</p>
    </div>
  )
}
