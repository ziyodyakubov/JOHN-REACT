import './style.css'
import fcb from "./../../assets/fb.svg"
import insta from "./../../assets/insta.svg"
import linkdn from "./../../assets/linkdn.svg"
import twit from "./../../assets/twit.svg"

function Footer() {
  return (
    <>
      <footer>
        <div className="container-2 center">
            <div className="logo-wrapper">
              <img src={fcb} alt="Facebook" />
              <img src={insta} alt="Instagram" />
              <img src={twit} alt="Twitter" />
              <img src={linkdn} alt="Linkedin" />
            </div>

            <p>Copyright ©2020 All rights reserved </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
