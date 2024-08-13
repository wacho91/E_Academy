
const CardText = ({courseData}) => {
    const { title, subtitle, description, link, benefits } = courseData;
    
  return (
    <>
        <section>
            <div className="space-y-4">
                <p className="text-sm uppercase bg-white text-black rounded-md inline-block px-3 py-2 font-semibold">{subtitle}</p>
                <p className="text-2xl md:text-3xl font-bold uppercase">{title}</p>
                <p className="text-xs">{description}</p>
                <div>
                    <ul className="space-y-2 text-xs list-disc list-inside">
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </div>
                <button className="bg-white text-black uppercase rounded-full px-8 py-2 font-bold">Get Started</button>
            </div>
        </section> 
    </>
  )
}

export default CardText
