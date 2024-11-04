
const express= require("express");

const app= express();

const port= 5000;

 app.use(express.json()) ;

app.use(express.urlencoded({extended:false})) ;

app.use("/post",require("./routes/post.route"));

app.use("/get",require("./routes/post.route"));

app.use("/delete",require("./routes/post.route"));

app.use("/put",require("./routes/post.route"));

app.listen(port, () =>{

    console.log("Demarrage du serveur au port : " + port);

});
