
export default function Testimonials () {

    interface testimonial {
        message: string;
        person: string;
    }

    const messages:testimonial[] = [
        {
            message: `Lumiora's shoes are the epitome of class. Walking in them is a dream, and the vegan aspect makes them even better. 
            They're beyond comfortable and my go-to for elegance. They are a must-have. Wearing them feels so empowering!`,
            person: `Emily Turner`
        },
        {
            message:`I feel so elegant wearing those shoes. They are as pretty as they are kind to our planet`,
            person: `Isabella Martinez`
        },
        {
            message:`Being animal friendly and looking classy is a wonderful combo. Gentle Gaze model is my new favorite. I'm just in love!!`,
            person: `Olivia Jackson`
        },
        {
            message:`Those shoes are out-of-this-world elegant. I'm in awe!`,
            person: `Mia Wilson`
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container m-auto">
            {messages.map((eachMessage) => (
                <div className="bg-red-400 rounded-md m-9 text-slate-50 p-6 carousel-item w-full">
                    <h3 className="font-light text-lg md:text-xl">{eachMessage.message}</h3>
                    <p className="font-thin">{eachMessage.person}</p>
                </div>
            ))}
        </div>
    )
}


