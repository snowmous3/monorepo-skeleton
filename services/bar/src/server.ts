import express from 'express';
const app = express();
const port = 3000;
import { UserType } from '@libraries/types'

app.get('/', (req: any, res: any) => {
  res.send(`Hello World! ${UserType.ADMIN}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});