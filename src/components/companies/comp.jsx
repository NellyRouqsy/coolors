import Props from "./Icon"
import Img1 from '../../assets/disney.svg'
import Img2 from '../../assets/dreamworks.svg'
import Img3 from '../../assets/warner-bros.svg'
import Img4 from '../../assets/netflix.svg'
import Img5 from '../../assets/airbnb.svg'
import Img6 from '../../assets/dropbox.svg'
import Img7 from '../../assets/Hasbro.png'
import Img8 from '../../assets/ubisoft.svg'
import Img9 from '../../assets/ea.svg'
import Img10 from '../../assets/apple.svg'
import Img11 from '../../assets/windows.png'
import './comp.css'

const Comp = () => {
    return(
      <div className="details">
        <h2>Used by 5+ million designers and by top companies</h2>
        <div className="logoI">
        <Props Pic={Img1} Link="disney.com"/>
        <Props Pic={Img2} Link="dreamworks.com"/>
        <Props Pic={Img3} Link="warnerbros.com"/>
        <Props Pic={Img4} Link="netflix.com"/>
        <Props Pic={Img5} Link="airbnb.com"/>
        <Props Pic={Img6} Link="dropbox.com"/>
        <Props Pic={Img7} Link="hasbro.com"/>
        <Props Pic={Img8} Link="ubisoft.com"/>
        <Props Pic={Img9} Link="ea.com"/>
        <Props Pic={Img10} Link="apple.com"/>
        <Props Pic={Img11} Link="microsoft.com"/>
        </div>
    
      </div>
    )
  }
  
  export default Comp