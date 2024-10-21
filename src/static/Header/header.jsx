import './header.css'
import Img from '../../assets/logo.svg'
const Header = ()=>{
    return(
      <div className='header'>
        <div className='logo'>
            <img src={Img} alt="" />
        </div>
        <div className='navRight'>
            <ul className='flex'>
                <li><a href="#" className='tools'>Tools</a></li>
                <li><a href="#" className='pro'>Go Pro</a></li>
                <li className='li'></li>
                <li><a href="#" className='tools'>Sign in</a></li>
                <button>Sign up</button>
            </ul>
        </div>
      </div>
    )
  }
  
  export default Header
  