import { NextResponse } from "next/server";
import { connectToDatabase } from "../../MongoConnect";

export const POST = async(req, res)=> {
    try {
        const  data  = req.body; 
    console.log("req.body :",data)
    console.log("reques:",req);
      const db = await connectToDatabase();
      const collection = db.collection('profile');

    
      await collection.insertOne({"data":"data"});

      return new NextResponse("inserted");
    } catch (error) {
      console.error('Error inserting data:', error);
      return new NextResponse({ error: 'Error inserting data' });
    }

}
