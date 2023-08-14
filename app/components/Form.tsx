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
            // create a download link
            const link = document.createElement('a');
            link.href = '/Catalog_Lumiora.pdf';  
            link.download = 'Catalog_Lumiora.pdf';

            // trigger the download
            try {
                document.body.appendChild(link);
                link.click();
            } catch (error) {
                console.log(error);
            } finally {
                document.body.removeChild(link);
                setIsLoading(false);
            }

            try {   
                const response = await fetch('/api/sendData', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email }),
                });
       
                if (response.ok) {   
                    console.log('Data saved in the database');
                    
                } else {
                    // handle error
                    console.error('Failed to save data');
                }
                
            } catch (error) {
                // handle error
                throw Error;
            } 

        } else {
            console.log('Both Name and Email are mandatory');
            throw Error;
        }

        setEmail('');
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className="font-serif text-lg md:text-xl mb-6">Get Our Catalog</h1>

                <div className="form-control w-full max-w-xs">
                    <label className="label p-0">
                        <span className="label-text font-extralight text-sm lg:text-base">Name</span>
                    </label>

                    <input 
                    required 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    placeholder="Your name here" 
                    
                    className="input w-full max-w-xs max-h-10 bg-slate-100 
                    rounded-none border-b-slate-300 border-t-0 border-r-0 border-l-0 
                    focus:outline-none text-slate-500 font-light mb-4 p-0 placeholder:font-extralight" 
                    />

                    <label className="label p-0 mt-3">
                        <span className="label-text font-extralight text-sm lg:text-base">Email</span>
                    </label>

                    <input 
                    required 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Your email here" 
                    
                    className="input w-full max-w-xs max-h-10 bg-slate-100 
                    rounded-none border-b-slate-300 border-t-0 border-r-0 border-l-0 
                    focus:outline-none text-slate-500 font-light mb-4 p-0 placeholder:font-extralight" 
                    />
                </div>

                <div className="form-control grid md:grid-cols-2 justify-items-center md:justify-items-end mt-5">
                    <div className="md:col-start-2 md:col-span-1  "> 
                        {isLoading ? (
                            <span className="loading loading-spinner loading-xs text-black"></span>
                            ) : (
                                <button
                                type="submit"
                                className="btn bg-black rounded-none text-slate-100 hover:bg-slate-100 
                                border hover:border-black hover:text-black font-light btn-sm ">
                                Take it !
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </form>
    )
}