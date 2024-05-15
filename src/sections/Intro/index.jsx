import './style.css'
import john from "./../../assets/john-circle.png"

function Intro() {
  return (
    <>
      <section id="intro-section">
        <div className="container-2 intro-wrapper">

          <div className='text-wrapper'>
          <h1>Hi, I am John,
            Creative Technologist</h1>

            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Download Resume</button>
          </div>

          <img src={john} alt="john image" />
        </div>
      </section>
    </>
  )
}

export default Intro
