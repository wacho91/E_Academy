import Brand from "./components/Brand/Brand"
import Courses from "./components/Courses/Courses"
import Focus from "./components/Focus/Focus"
import Hero from "./components/Hero/Hero"
import Testimonials from "./components/Testimonials/Testimonials"


const App = () => {
  return (
    <main className="overflow-x-hidden text-white bg-[#242424]">
      <Hero />
      <Brand />
      <Courses />
      <Testimonials />
      <Focus />
    </main>
  )
}

export default App
