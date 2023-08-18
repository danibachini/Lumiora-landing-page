
export default function Testimonials () {

    interface testimonial {
        message: string;
        person: string;
    }

    const messages:testimonial[] = [
        {
            message: `Lumiora's shoes are the epitome of class. Walking in them is a dream, and the vegan aspect makes them even better. 
            They're beyond comfortable and my go-to for elegance.`,
            person: `Emily Turner`
        },
        {
            message:`I feel so elegant wearing those shoes. They are as pretty as they are kind to our planet — a must-have!`,
            person: `Isabella Martinez`
        },
        {
            message:`Being animal friendly and looking classy is a wonderful combo. Gentle Gaze model is my new favorite. I'm just in love!!`,
            person: `Olivia Jackson`
        },
        {
            message:`Those shoes are out-of-this-world elegant. Wearing them feels so empowering! I'm in awe!`,
            person: `Mia Wilson`
        }
    ]

    return (
        <div className="carousel carousel-center max-w-xl p-4 space-x-4 ">
            {messages.map((eachMessage) => (
                <div className="bg-stone-100 shadow-md rounded-box carousel-item w-5/6">
                    <div className="p-8">
                        <h3 className="font-light text-lg md:text-xl">{eachMessage.message}</h3>
                        <p className="font-thin">{eachMessage.person}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
