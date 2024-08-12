
import BgImage from "../../assets/hero-bg.png"
import HeroImg from "../../assets/hero.png"
import LearnersImg from "../../assets/learners.png"

import Nabvar from "../Navbar/Nabvar"

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

const Hero = () => {
  return (
    <section style={bgStyle} className="p-3" >
        {/*NavBar Section*/}
        <div>
            <Nabvar />
        </div>
        
        <div className="container min-h-[600px] grid grid-cols-1 md:grid-cols-2">
            {/*Text Content Section*/}
            <div className="flex flex-col justify-center gap-5 h-full">
                <h1 className="uppercase text-3xl md:text-4xl font-extrabold">LEARN WHAT SCHOOL DOESN'T TEACH YOU</h1> 
                <p className="text-xs">
                    At Dhruv Rathee Academy, you can gain 
                    practical knowledge and learn real-world skills that will help you 
                    transform your life at work, school and home.
                </p>
                <div>
                    <button className="bg-white text-red-500 px-16 py2 rounded-full uppercase font-bold">Explore Courses</button>
                </div>
                {/*Reviews Section*/}
                <div className="flex items-center gap-4">
                    <img src={LearnersImg} alt="" className="max-w-[80px]"/>
                    <div className="opacity-50">
                        <p>10000+</p>
                        <p className="text-xs">Happy Learners</p>
                    </div>
                    <div className="text-sm">
                        <p>4.8+ (600+ Ratings)</p>
                    </div>
                </div>
            </div>
            {/*Hero Image Section*/}
            <div className="flex justify-center items-end">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
