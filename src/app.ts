import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modular/student.router';

const app: Application = express();
// const port = 3000

//parser
app.use(express.json());
app.use(cors());

//call routes from here

app.use('/api/v1/students', studentRoutes);

const getAController = (req: Request, res: Response) => {
  // const a= 30;
  res.send('ki');
};

app.get('/', getAController);

export default app;
