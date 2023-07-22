
export default function Home() {
  return (
    <main>
      <div className="w-6/12 md:w-2/12 my-8 md:my-20 m-auto">
        <img className=" mt-5" src="/logo.png" alt="Lumiora logo" />
      </div>

        <div className="bg-[url('/pic8.jpg')] h-60 lg:h-96 w-full bg-cover bg-bottom p-10 grid grid-cols-3 lg:grid-cols-4 lg:gap-20 place-content-evenly">
          <div className="max-w-xl lg:max-w-xs py-8 px-5 mx-auto bg-slate-100 shadow-md col-start-1 col-end-3 lg:col-start-2">
            <p className="text-xs lg:text-base text-black font-semibold ">STANDOUT SANDALS</p>
            <p className="text-xs lg:text-base text-black">Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 m-10">

        <div className="p-5 md:col-start-2">
          <img className="object-contain max-h-96 m-auto " src="/pic1.webp" alt="" />
          <div className="py-5 text-center">
            <p className="font-semibold">Glamorous Summer</p>
            <p>text text text text</p>
          </div>
        </div>

        <div className="p-5 md:col-start-3">
          <img className="object-contain max-h-96 m-auto " src="/pic4.webp" alt="" />
          <div className="py-5 text-center">
            <p className="font-semibold">Party All Night</p>
            <p>text text text text</p>
          </div>
        </div>

        <div className="p-5 md:col-start-4">
          <img className="object-contain max-h-96 m-auto " src="/pic9.webp" alt="" />
          <div className="py-5 text-center">
            <p className="font-semibold">Dream Wedding</p>
            <p>text text text text</p>
          </div>
        </div>
      </div>
      


    </main>
  )
}

