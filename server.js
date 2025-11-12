const { error } = require('console');
const express = require('express');

const app = express();

app.get("/api/user", (require, response) => {
    response.status(200).json({ name: "vicky sharma",email:"kumarvicky01@gmail.com", id: 30 });
});


app.listen(4001,(error)=>{
    if(error){
        console.error('Error', error);
    }
    console.log('Server is running on port 4001');
})