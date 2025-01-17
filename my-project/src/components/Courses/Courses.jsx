import CourseCard from "./CourseCard"
import CourseCard2 from "./CourseCard2"
import CouserCard3 from "./CouserCard3"


const Courses = () => {
  return (
    <>
      <section className="py-12 md:py-24">
        <div className="container">
            {/*Title*/}
            <div className="text-center">
                <p className="text-sm">Courses</p>
                <p className="text-3xl md:text-4xl font-bold ">Become Skilled At Waht Matters</p>
            </div>

            {/*Courses*/}
            <CourseCard />
            <CourseCard2 />
            <CouserCard3 />
        </div>
      </section>
    </>
  )
}

export default Courses
