
import Form from "./components/Form"
import Carousel from "./components/Carousel"
import Testimonials from "./components/Testimonials"
import Cards from "./components/Cards"

export default function Home() {
  return (
    <main>
      <div className="w-6/12 md:w-2/12 my-8 md:my-20 m-auto">
        <img className="mt-5" src="/logo.png" alt="Lumiora logo" />
      </div>

      <div className="bg-[url('/pic8.jpg')] h-60 lg:h-96 w-full bg-cover bg-bottom p-10 grid grid-cols-3 lg:grid-cols-4 lg:gap-20 place-content-evenly">
        <div className="max-w-xl lg:max-w-xs py-8 px-5 mx-auto bg-slate-50 shadow-md col-start-1 col-end-3 lg:col-start-2">
          <p className="text-xs md:text-sm lg:text-base font-serif">STANDOUT SANDALS</p>
          <p className="text-xs md:text-sm lg:text-base font-extralight">Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
        </div>
      </div>

      <div className="text-center my-14 lg:my-24">
        <h3 className="font-serif text-lg md:text-xl">True Beauty Comes From Nature</h3>
      </div>

      <Cards/>
      
      <div className="bg-[url('/pic14.webp')] h-60 lg:h-96 w-full bg-cover bg-center my-10"/>

      <div className="text-center mt-14 mb-8 lg:mt-16">
        <h3 className="font-serif text-lg md:text-xl">Our Customers Are In Love !</h3>
      </div>
      <div className="mx-6 flex justify-center">
        <Testimonials/>
      </div>

      <div className="bg-[url('/pic6.jpeg')] h-96 lg:h-128 w-full bg-cover bg-top p-10 my-10 grid grid-cols-3 lg:grid-cols-4 lg:gap-20 place-content-evenly">
        <div className="max-w-xl auto-rows-min lg:max-w-xs p-8 mx-auto bg-slate-50 shadow-md col-start-1 col-end-3 lg:col-start-2">
          <Form/>
        </div>
      </div>

      <div className="text-center my-14 lg:my-20">
        <Carousel/>
      </div>

      <div className="bg-[url('/pic12-2.jpeg')] h-60 lg:h-96 w-full bg-cover bg-center"/>

    </main>
  )
}

