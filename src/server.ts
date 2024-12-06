import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
// import cors from 'cors';
// import tablesRoutes from './tables/tables.routes';
// import { verifyAPIKey } from './middlewares/auth';
import { log } from './commons/log';

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Messaging App Running")
})

app.use(express.json());
// app.use(cors());
// app.use(verifyAPIKey());
// app.use(tablesRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  log(`🚀 Messaging App has started on port ${PORT}`);
})