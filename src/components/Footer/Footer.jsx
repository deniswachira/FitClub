import "./Footer.css"
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Logo from "../../assets/logo.png"


const Footer = () => {
  return (
    <div className="Footer-container">
    <hr />
    <div className="footer">
      <div className="social-links">
        <a href="https://github.com/deniswachira"><img src={Github} alt="" /></a>
        <a href="https://www.instagram.com/deniswachira_/"><img src={Instagram} alt="" /></a>
        <a href="https://www.linkedin.com/in/denis-wachira/"><img src={Linkedin} alt="" /></a>
            
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
    </div>
    <div className="blur blur-footer-1"></div>
    <div className="blur blur-footer-2"></div>

    </div>
  )
}

export default Footer