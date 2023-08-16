
export default function Cards () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 container m-auto">

            <div className="lg:col-start-2 md:col-start-1 py-14 px-6 md:px-0">
                <div className="h-full w-full -mt-14">
                    <img className="min-w-full min-h-full object-cover" src="/pic1.webp" alt="" />
                </div>
                <div className="text-center mt-6">
                    <p className="font-serif font-light">Glamorous Summer</p>
                    <p className="font-extralight">Sandals For All Styles</p>
                </div>
            </div>

            <div className="lg:col-start-3 md:col-start-2 py-14 px-6 md:px-0">
                <div className="h-full w-full -mt-14">
                    <img className="min-w-full min-h-full object-cover" src="/pic4.webp" alt="" />
                </div>
                <div className="text-center mt-6">
                    <p className="font-serif font-light">Party All Night</p>
                    <p className="font-extralight">Comfortable Deluxe Heels</p>
                </div>
            </div>

            <div className="lg:col-start-4 md:col-start-3 py-14 px-6 md:px-0">
                <div className="h-full w-full -mt-14">
                    <img className="min-w-full min-h-full object-cover" src="/pic9.webp" alt="" />
                </div>
                <div className="text-center mt-6">
                    <p className="font-serif font-light">Dream Wedding</p>
                    <p className="font-extralight">Sexy, Elegant, and Romantic</p>
                </div>
            </div>
        
        </div>
    )
}