// pages/api/myEndpoint.js

import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../MongoConnect";


export const POST = async(req,{params})=> {
    
      try {

       const data =await req.json(); 
       console.log(data);
        const Email = params.email[0];
        console.log(Email);
        // const db = await connectToDatabase();
        // const collection = db.collection('users');
        // // const user=  await collection.findOne({email:data.email});
        
      return new NextResponse("data inserted");
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return new NextResponse(error)
 
      }
   
  }
  