

const TestimonialCard = ({id, name, review, rating}) => {
  return (
    <>
        <section className="p-12 bg-[#222222] rounded-3xl">
            <p className="text-6xl font-serif rotate-180 inline-block">,,</p>
            <p>{review}</p>    
            <div className="flex items-center gap-4 mt-8">
                <div className="h-10 w-10 flex justify-center items-center text-black bg-white rounded-full">
                    {name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p>{name}</p>
                    <p>🌟🌟🌟🌟🌟</p>
                </div>
            </div>
        </section> 
    </>
  )
}

export default TestimonialCard
