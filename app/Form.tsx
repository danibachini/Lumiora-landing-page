'use client';

export default function Form () {
    return (
        <form>
            {/* <h1 className="font-serif text-lg mb-4">GET OUR CATALOG</h1> */}
            <h1 className="font-serif text-lg md:text-xl mb-6">Get Our Catalog</h1>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Name</span>
                </label>
                <input type="text" placeholder="Your name here" className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />

                <label className="label">
                    <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Email</span>
                </label>
                <input type="text" placeholder="Your email here" className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />
            </div>

            <div className="form-control flex justify-end">
                <button className="btn bg-black text-slate-100 hover:bg-slate-500 font-light py-1 px-4" type="submit">
                    Take it! 
                </button>
            </div>

        </form>
    )
}