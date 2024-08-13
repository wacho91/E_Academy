import Brand from "./components/Brand/Brand"
import Courses from "./components/Courses/Courses"
import Hero from "./components/Hero/Hero"


const App = () => {
  return (
    <main className="overflow-x-hidden text-white bg-[#242424]">
      <Hero />
      <Brand />
      <Courses />
    </main>
  )
}

export default App
