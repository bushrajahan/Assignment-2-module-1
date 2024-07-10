import { Schema, model, connect } from 'mongoose';
import { Guardian, Name, students } from './student.interface';

export const nameSchema = new Schema<Name>({
  firstName:{type:String,required:true},
  middleName:{type:String},
  lastName:{type:String,required:true}
})
export const GuardianSchema = new Schema<Guardian>({
  FatherName:{type:String,required:true},
  MotherName:{type:String,required:true},
  FatherOccupation:{type:String,required:true},
  MotherOccupation:{type:String,required:true},
  PhoneNumber:{type:String,required:true}
})

export const studentSchema = new Schema<students>({
  id:{type:String,required:true},
  name:nameSchema,
  email: { type: String, required: true },
  gender:{type:String,required:true},
  DOB:{type:String,required:true},
  guardian:GuardianSchema,
  bloodGroup:['A+','A-','B+','B-','O'],
  country:{type:String,required:true},
  localGuardian:{type:String,required:true},
  profileImage:{type:String},
  IsActive:['true','false']


});
// 3. Create a Model.
export const studentModel = model<students>('student', studentSchema);
