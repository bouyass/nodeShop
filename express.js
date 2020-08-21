const express = require('express');

const app = express();
app.use((req,res,next)=>{
   console.log("requete recue")
    next()
});

app.use((req,res,next)=>{
    res.status(201)
    next()
});

app.use((req,res,next)=> {
    res.json({message:"votre serveur fonctionne"});
    next()
});

app.use((req,res,next)=> {
    console.log("la reponse envoyee avec succes")
});

module.exports = app;
