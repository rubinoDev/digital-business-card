import twitterLogo from '/assets/Twitter.svg'
import facebookLogo from '/assets/Facebook.svg'
import instagramLogo from "/assets/Instagram.svg"
import gitHubLogo from "/assets/GitHub.svg"

export function Footer(){
  return(
    <div className="footer__container">
      <a href="#">
        <img src={twitterLogo}/>
      </a>

      <a href="#">
        <img src={facebookLogo}/>

      </a>

      <a href="#">
       <img src={instagramLogo}/>

      </a>

      <a href="#">
        <img src={gitHubLogo}/>

      </a>
    </div>
  )
}