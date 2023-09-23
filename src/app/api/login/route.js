import { NextResponse } from "next/server";
import { connectToDatabase } from "../../MongoConnect";
import bcrypt from 'bcrypt';

export const POST = async(req)=> {
    try {
        const  data  =await req.json(); 
    console.log(data)
   
      const db = await connectToDatabase();
      const collection = db.collection('users');

    
     const user=  await collection.findOne({email:data.email});
     console.log(user);
     console.log(data.password);
     console.log(user.password);
     if(user){
      const compare = await bcrypt.compare(data.password,user.password);
      if(compare){
        return new NextResponse("success");
      }else{
        return new NextResponse("Not Authorized");
      }
     }else{
      return new NextResponse("User not Found");
     }

      
    } catch (error) {
      console.error('Error inserting data:', error);
      return new NextResponse({ error: 'Error inserting data' });
    }

}
