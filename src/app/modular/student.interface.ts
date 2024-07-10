import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  FatherName:string;
  MotherName:string;
  FatherOccupation:string;
  MotherOccupation:string;
  PhoneNumber:string
}
export type Name = {
  firstName:string;
  middleName?:string;
  lastName:string
}

export type students= {
  id:string;
  name:Name;
  email: string;
  gender:'male'|'Female',
  DOB:string;
  guardian:Guardian;
  bloodGroup?:'A+'|'A-'|'B+'|'B-'|'O'  ;
  country:string;
  localGuardian:string;
  profileImage?:string;
  IsActive:'active'|'inActive'
}
