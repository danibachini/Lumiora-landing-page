
import Form from "./Form"

export default function Home() {
  return (
    <main>
      <div className="w-6/12 md:w-2/12 my-8 md:my-20 m-auto">
        <img className=" mt-5" src="/logo.png" alt="Lumiora logo" />
      </div>

      <div className="bg-[url('/pic8.jpg')] h-60 lg:h-96 w-full bg-cover bg-bottom p-10 grid grid-cols-3 lg:grid-cols-4 lg:gap-20 place-content-evenly">
        <div className="max-w-xl lg:max-w-xs py-8 px-5 mx-auto bg-slate-100 shadow-md col-start-1 col-end-3 lg:col-start-2">
          <p className="text-xs md:text-sm lg:text-base text-black font-serif">STANDOUT SANDALS</p>
          <p className="text-xs md:text-sm lg:text-base text-black font-extralight">Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
        </div>
      </div>

      <div className="text-center my-14 lg:my-24">
        <h3 className="font-serif text-lg md:text-xl">True Beauty Comes From Nature</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2  container m-auto">

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
      
      <div className="bg-[url('/pic6.jpeg')] h-96 lg:h-128 w-full bg-cover bg-top p-10 my-10 grid grid-cols-3 lg:grid-cols-4 lg:gap-20 place-content-evenly">
        <div className="max-w-xl lg:max-w-xs p-8 mx-auto bg-slate-100 shadow-md col-start-1 col-end-3 lg:col-start-2">
          <Form/>
        </div>
      </div>


    </main>
  )
}

