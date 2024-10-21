import Appli from "../../components/Apps/Application/Appli"
import Comp from "../../components/companies/comp"
import Hero from "../../components/Hero/Hero"
import './home.css'

const Home = ()=>{
    return(
      <div className="hommie">
        <div className="abc">
          <Hero />
          <Appli />
          <Comp />
        </div>
      </div>
    )
  }
  
  export default Home
  