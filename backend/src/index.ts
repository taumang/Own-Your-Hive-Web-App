import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import { HiveService } from './database/services/hiveService';
import { HiveData } from './database/models/HiveInterface';


const PORT = process.env.PORT || 3001;

const uri: string = 'mongodb+srv://tauk09ph:09Taumang@own-hive.ct3kqxl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  maxPoolSize: 10
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any)
.then(()=>{
  console.log('Connected to MongoDB');

  const app = express();
  app.use(express.json()); 
  //endpoints here 

  app.post('/hive', async (req: Request, res: Response) => {
    try {
        const data: HiveData = req.body;
        const hive = await HiveService.createHive(data);
        res.json(hive);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/hives', async (req: Request, res: Response) => {
    try {
        const hives = await HiveService.getHives();
        res.json(hives);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/hive/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const hive = await HiveService.getHiveById(id);
        if (hive) {
            res.json(hive);
        } else {
            res.status(404).send('Hive not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


app.put('/hive/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data: HiveData = req.body;
        const updatedHive = await HiveService.updateHive(id, data);
        if (updatedHive) {
            res.json(updatedHive);
        } else {
            res.status(404).send('Hive not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


app.delete('/hive/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deletedHive = await HiveService.deleteHive(id);
        if (deletedHive) {
            res.json(deletedHive);
        } else {
            res.status(404).send('Hive not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

  //app port
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch(error =>{
  console.error(`Error in Connecting to MongoDB ${error}`)
});


