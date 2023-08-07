'use client';

import { useState } from "react";

export default function Form () {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); 

        if (name !== '' && email !== '') {

            //   !!!! download of the catalog here !!!!

            try {
                //send data to backend
                const response = await fetch('/api/sendData', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email }),
                });
       
                if (response.ok) {
                    // data saved successfully
                    console.log('Data saved to database');
                    
                } else {
                    // handle error
                    console.error('Failed to save data');
                }
                
            } catch (error) {
                // console.error('Error:', error);
                throw Error;
            } 

        } else {
            console.log('Name and Email are mandatory');
            throw Error;
        }


    };
      

    return (
        <form onSubmit={handleSubmit}>

            {isLoading ? "" : (
                <div>
                    <h1 className="font-serif text-lg md:text-xl mb-6">Get Our Catalog</h1>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Name</span>
                        </label>

                        <input required 
                        type="text" 
                        onChange={e => setName(e.target.value)} 
                        placeholder="Your name here" 
                        className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />

                        <label className="label">
                            <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Email</span>
                        </label>

                        <input required 
                        type="email" 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Your email here" 
                        className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />
                    </div>

                    <div className="form-control flex justify-center md:justify-end">
                        <button 
                        type="submit" 
                        className="btn bg-black text-slate-100 hover:bg-slate-100 border hover:border-black hover:text-black font-light py-1 px-4">
                            Take it ! 
                        </button>
                    </div>
                </div>
            )}

            {isLoading ?
                <div>
                    <h1 className="font-serif text-lg md:text-xl mb-6">Get Our Catalog</h1>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Name</span>
                        </label>

                        <input disabled 
                        type="text" 
                        placeholder="Your name here" 
                        className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />

                        <label className="label">
                            <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Email</span>
                        </label>

                        <input disabled 
                        type="email" 
                        placeholder="Your email here" 
                        className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />
                    </div>

                    <div className="form-control flex justify-center md:justify-end">
                        <span className="loading loading-spinner loading-xs text-black"></span>
                    </div>
                </div>
            : ''}

        </form>
    )
}