// pages/api/myEndpoint.js

import { NextResponse } from "next/server";
import { connectToDatabase } from "../../MongoConnect";


export const POST = async(req,{params})=> {
    
      try {

       const data =await req.json(); 
       console.log(data)

        // const db = await connectToDatabase();
        // const collection = db.collection('users');
        // const updatedData  = collection.updateOne({email:})
      return new NextResponse("profile added to user")
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return new NextResponse(error)
 
      }
   
  }
  