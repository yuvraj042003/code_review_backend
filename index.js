const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const aiRoutes = require('./src/router/ai.routes');



const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/ai', aiRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
