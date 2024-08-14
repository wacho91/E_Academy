

import bgImg from "../../assets/testimonials.png"
import TestimonialCard from "./TestimonialCard";

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
};

const TestimonialData = [
    {
      id: 1,
      name: "Prithu H.",
      review:
        "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Raghav Goel",
      review:
        "I Believe conducting the course in Hindi Language was the best part. All the concepts were explained in a very simple easy to understand way. The prompt sheets prepared are also very useful for future use. Looking forward for more such creative courses by Dhruv.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Harsh ",
      review:
        "The lessons were given and organised in a fantastic way. Dhruv has the capacity to maintain the audience's attention. If you would have included how ChatGPT could be utilized for more coding-related subjects, it would be more beneficial to me personally. But I am aware that this course needs to be more inclusive to appeal to all students.",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Prithu H.",
      review:
        "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Keyur Kumbhare",
      review:
        "This course proved to be a game changer and helped me a lot in killing by habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Krishnapreet ",
      review:
        "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
      rating: 4.5,
    },

];

const Testimonials = () => {
  return (
    <>
        <section style={bgStyle} className="py-12 md:py-24 bg-[#121212]">
            <div className="container">
                {/*Title Section*/}
                <p className="text-3xl md:text-6xl font-bold md:w[800px] mx-auto text-center uppercase">Here's what our Current Students have to say...</p>
                {/*Review card section*/}
                <div className=" mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:gridcols3 gap-8">
                    {TestimonialData.map((data) => (
                        <TestimonialCard key={data.id} {...data} />
                    ))}
                </div>
            </div> 
            <div className="flex justify-center py-10 md:py-11 md:translate-y-20 bg-gradient-to-t from-[#121212] from-50% to-transparent">
              <button className="bg-white text-black text-2xl rounded-md font-bold px-24 py-15 inline-block w-[300px]">
                    See More
              </button>
            </div>   
        </section> 
    </>
  )
}

export default Testimonials
