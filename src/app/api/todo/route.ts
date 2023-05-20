// import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";
import { Todo } from '@/lib/drizzel';
import { todoTable,db } from '@/lib/drizzel';
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
    // const client= await db.connect(); 
    try {
       await sql`CREATE TABLE IF NOT EXISTS Todos(id serial ,Task varchar(255));`
    //    const res= await client.sql`SELECT * FROM Todos`
        const res= await db.select().from(todoTable).execute() 
    //    console.log(res.rows.find((item)=>{item.id ===1}));
    
        return NextResponse.json({data:res});
    } catch (error) {
        
        console.log((error as {message :string}).message) 
        return  NextResponse.json({message:"something went wrong"})
    }
  }
  export async function POST(request:NextRequest) {
    const req= await request.json()
    try {
        if (req.task) {
            const res= db.insert(todoTable).values({task:req.task}).returning() 
            console.log(res);
            
            return NextResponse.json({message:"Data has been added"})
        }
        else{
            throw new Error("Task field is required")
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:(error as {message:string}).message})
    }
  }