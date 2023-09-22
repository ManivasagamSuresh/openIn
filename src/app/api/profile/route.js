// pages/api/myEndpoint.js

import { NextResponse } from "next/server";

export const POST = async(req, res)=> {
    
      try {
        // Parse the incoming JSON data from the request body
        const data = req.body;
        console.log(data);
      return new NextResponse("good")
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return new NextResponse(error)
 
      }
   
  }
  