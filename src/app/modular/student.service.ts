import { students } from "./student.interface";
import { studentModel} from "./student.model"



const createStudentIntoDB = async(student:students)=>{
  try{
    const result = await studentModel.create(student)
  return result;
  }
  catch(error){
    console.log(error)
  }
}
const getAllStudentFromDB = async()=>{
  try{
    const result = await studentModel.find();
  return result;
  }
  catch(err){
    console.log(err)
  }
}

const singleStudentFromDB = async(id:String)=>{
  try{
    const result = await studentModel.find({id:id})
    console.log(result)
    return result;
  }
  catch(err){
    console.log(err)
  }
}


export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  singleStudentFromDB
}