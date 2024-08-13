import CardText from "./utilities/CardText"
import CourseImage from "../../assets/banner1.png"

const courseData = {
    subtitle: "Content Creation",
    title: "The YouTube Blueprint: Make Content Creation Your Career",
    description:
      "Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation as a full time career or a part-time job, this all-in-one course is your perfect plan of action.",
    benefits: [
      "Find your niche based on your passion and skills.",
      "Learn to ideate, script, film, and edit videos.",
      "Understand the secret to getting lakhs of followers.",
      "Discover ways to earn money as a creator.",
    ],
    link: "#",
};

const CourseCard = () => {
  return (
    <>
     <section className="py-12">
        <div className="bg-[#0e0e0f] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/*text-content section*/}
                <div className="p-12 py-16 flex flex-col justify-center">
                <CardText courseData={courseData}/>
                </div>
                {/*Image Section*/}
                <div className="relative">
                    <img src={CourseImage} alt="" className="object-cover h-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0f] from-1% to-transparent to-10%"></div>
            </div>
        </div>    
    </section> 
    </>
  )
}

export default CourseCard
