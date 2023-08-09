
import { Collection, Db, MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

interface userData {
    name: string;
    email: string;
}

interface userEmail {
    email: string;
}

export async function POST (req: NextRequest) {

    const driver: string = process.env.MONGO_URL ?? '';
    const client: MongoClient = new MongoClient(driver);
    
    try {
        await client.connect();
        const database: Db = client.db('CatalogUsers');  
        const collectionUsers: Collection<userData> = database.collection<userData>('users');  
        const { name, email } = await req.json();   
        
        if (name && email) { 
            
            const existEmail = await collectionUsers.findOne<userEmail>({  
                email: email
            })
            
            if (!existEmail) {  
                await collectionUsers.insertOne({
                    name: name,
                    email: email,
                });
            }

            return NextResponse.json({ message: 'Received POST request successfully' });

        } else {
            throw Error('Missing information: Name and Email are mandatory')
        }

    } catch (error) {
        throw Error(`Couldn't save info in the database`);

    } finally {
        await client.close();
    }
}