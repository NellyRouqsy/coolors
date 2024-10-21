import TrophyImg from '../../assets/trophy-svgrepo-com.svg'
import ImgN from '../../assets/screen.png'
import './Hero.css'

const Hero = () => {
    return(
      <div className="HeroContainer">
        <div className="HeroText">
            <h1>
              The super fast <br />
              color palettes <br />
              generator!
            </h1>
            <p className='inspo'>Create the perfect Palette or get inspired by <br />
            thousands of beautiful color schemes.</p>
            <div className='blk'>
            <a className='btn1'>Start the generator!</a>
            <a className='btn2'>Explore trending palettes</a>
            <button className='prodHunt'>
              <div className='trophyImg'>
                <img src={TrophyImg} alt="img" />
              </div>
              <div className='prod'>
                <p className='hunt'>PRODUCT HUNT</p>
                <h2 className='month'>#1 Product of the Month</h2>
              </div>
              </button>
            </div>
        </div>
        <div className="HeroImage">
            <img src={ImgN} alt="" />
        </div>
      </div>
    )
  }
  
  export default Hero