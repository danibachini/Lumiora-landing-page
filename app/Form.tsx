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
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

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

        setIsLoading(false);
        setEmail('');
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className="font-serif text-lg md:text-xl mb-6">Get Our Catalog</h1>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Name</span>
                    </label>

                    <input required 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    placeholder="Your name here" 
                    disabled={isLoading}
                    className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />

                    <label className="label">
                        <span className="label-text font-extralight text-xs md:text-sm lg:text-base">Email</span>
                    </label>

                    <input required 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Your email here" 
                    disabled={isLoading}
                    className="input w-full max-w-xs bg-slate-100 border-b-2 outline-none mt-2 mb-8 placeholder:font-extralight" />
                </div>

                <div className="form-control flex justify-center md:justify-end">
                    {isLoading ? (
                        <span className="loading loading-spinner loading-xs text-black"></span>
                    ) : (
                        <button
                        type="submit"
                        className="btn bg-black text-slate-100 hover:bg-slate-100 border hover:border-black hover:text-black font-light py-1 px-4">
                            Take it !
                        </button>
                    )}
                </div>

            </div>
        </form>
    )
}