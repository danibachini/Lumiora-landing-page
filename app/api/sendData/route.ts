
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

interface userData {
    name:string;
    email:string;
}

export async function POST (req: NextRequest, res: NextResponse) {

    const driver: string = process.env.MONGO_URL ?? '';
    const client = new MongoClient(driver);
    console.log('this is the driver: ', client);
    
    
    try {
        console.log('inside API try');
        
        await client.connect();
        console.log('Connected to MongoDB');
        
        const database = client.db('CatalogUsers');                            // connect to the 'CatalogUsers' database
        const collectionUsers = database.collection<userData>('users');        // access the 'users' collection
        const { name, email } = await req.json();  

        console.log('inside API try after creating the consts');
        console.log('this is name and email: ', name, email);
        
        if (name && email) {
            console.log('inside API try if');
            
            const insertUserData = await collectionUsers.insertOne({
                name: name,
                email: email,
            });

            console.log('Data inserted into the db: ', insertUserData.insertedId);
            
            return NextResponse.json({ message: 'Received POST request successfully' });

        } else {
            throw Error('Missing information: Name and Email are mandatory')
            // return NextResponse.json({message: "Missing information: Name and Email are mandatory"});
        }

    } catch (error) {
        // return NextResponse.json({message: "Internal Server Error"});
        throw Error(`Couldn't save info in the database`);

    } finally {
        await client.close;
    }

}