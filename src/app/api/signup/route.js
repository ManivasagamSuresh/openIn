import { NextResponse } from "next/server";
import { connectToDatabase } from "../../MongoConnect";
import bcrypt from 'bcrypt';

export const POST = async(req)=> {
    try {
        const  data  =await req.json(); 
    console.log(data)
      
    const hash = await bcrypt.hash(data.password,10);
    console.log(hash);
    data.password = hash;
      const db = await connectToDatabase();
      const user =await db.collection('users').insertOne(data);

    
     

      return new NextResponse("inserted");
    } catch (error) {
      console.error('Error inserting data:', error);
      return new NextResponse({ error: 'Error inserting data' });
    }

}
