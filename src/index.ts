import express from 'express'
import cors from "cors";
import routes from './http/routes/'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Server started on server 3333");
});

