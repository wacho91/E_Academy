
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const Focus = () => {
  return (
    <>
        <section>
            <div className="container py-12 md:py-24">

                <p className="text-3xl md:text-5xl font-bold text-center uppercase">
                WHAT THW FOCUS ON
                </p>

                {/*Card Section*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex gap-6">
                            <p className="text-3xl px-2 font-bold">REAL-WORLD SKILLS</p>
                            <div className=" bg-white text-black h-15 w-20 flex-shrink flex justify-center items-center rounded-md">
                                <IoChatboxEllipsesSharp  className="text-5xl"/>
                            </div>
                        </div>
                        <p className="text-sm">
                            We teach paractical real-world skills 
                            thatwe trully believe can have a 
                            positive impact on your life.
                        </p>
                    </div>
                    <div></div>
                    <div></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Focus
