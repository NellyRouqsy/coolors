import './footer.css'
import Img1 from "../../assets/twitter.svg"
import Img2 from "../../assets/facebook.svg"
import Img3 from "../../assets/pinterest.svg"
import Img4 from "../../assets/producthunt.svg"
const Footer = ()=>{
    return(
      <div className='footer'>
        <div className="FooterMenu">
          <div>
            <ul>
              <li className='title'>Tools</li>
              <li><div></div></li>
              <li><a href="">Generate your palettes</a></li>
              <li><a href="">Explore popular palettes</a></li>
              <li><a href="">Extract palette from image</a></li>
              <li><a href="">Contrast checker</a></li>
              <li><a href="">Preview palettes on designs</a></li>
              <li><a href="">Recolor your own design</a></li>
              <li><a href="">Color picker</a></li>
              <li><a href="">Browse free fonts</a></li>
             
            </ul>
          </div>
          <div>
            <ul>
              <li className='title'>More</li>
              <li><div></div></li>
              <li><a href="">List of colors <span>NEW</span></a></li>
              <li><a href="">Browse gradients</a></li>
              <li><a href="">Create a gradient</a></li>
              <li><a href="">Make a gradient palette</a></li>
              <li><a href="">Image converter</a></li>
              <li><a href="">Create a collage</a></li>
              <li><a href="">Font Generator</a></li>
              
            </ul>
          </div>
          <div>
            <ul>
              <li className='title'>Jobs</li>
              <li><div></div></li>
              <li><a href="">Find your next job</a></li>
              <li><a href="">Post a job</a></li>
              <li><div></div></li>
              <li className='title'>Apps</li>
              <li><div></div></li>
              <li><a href="">iOS App</a></li>
              <li><a href="">Android App</a></li>
              <li><a href="">Figma Plugin</a></li>
              <li><a href="">Adobe Extension <span>NEW</span></a></li>
              <li><a href="">Chrome Extention</a></li>
              <li><a href="">Instagram Page</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='title'>Company</li>
              <li><div></div></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">License</a></li>
              <li><a href="">Terms of service</a></li>
              <li><a href="">Privacy policy</a></li>
              <li><a href="">Cookie policy</a></li>
              <li><a href="">Manage cookies</a></li>
              <li><a href="">Help center</a></li>
              <li><a href="">Advertise</a></li>
              <li><a href="">Affiliate</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>



        <div className='footerDetails'>
          <hr />
          <div className='footerSplit'>
            <div>©coolors by <a href="">Fabrizio Bianchi. </a>From a creative to all others</div>
            <div className='logo'>
              <img src={Img1} alt="#" />
              <img src={Img2} alt="#" />
              <img src={Img3} alt="#" />
              <img src={Img4} alt="#" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer
  

  