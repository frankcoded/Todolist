const express = require('express');
const { json } = require('express');
const connect = require('./config/database');
const userRoute = require('./router/userRoutes');
connect();
const app = express();

app.use(json());
app.use('/user', userRoute);

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Zuri Traning on MongoDB")
})


app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
