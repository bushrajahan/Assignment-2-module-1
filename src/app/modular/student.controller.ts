import { Request,Response } from "express";
import { studentServices } from "./student.service";


const createStudent = async(req:Request,res:Response)=>{
  try{
    const {student} = req.body;
  //will call service function 
  const result = await studentServices.createStudentIntoDB(student)


  //send response 
  res.status(200).json({
    success:true,
    message:'student is created successfully in mongodb',
    data:result
  })

  }
  catch(error){
    console.log(error)
  }
}
const getAllStudents = async(req:Request,res:Response)=>{
   try{
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success:true,
      message:'student is created successfully in mongodb',
      data:result
    })
   }
   catch(err){
    console.log(err)
   }
}
const getSingleStudent = async(req:Request,res:Response)=>{
  try{
  const id= req.params.id;

  console.log(id);

    const result = await studentServices.singleStudentFromDB(id);
    console.log(result );
  res.status(200).json({
    success:true,
    message:'student is retrieved successfully ',
    data:result
  })
}
  catch(err){
    console.log(err)
  }
  

}
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent

}