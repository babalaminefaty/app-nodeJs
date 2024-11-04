
const express = require("express");

const router = express.Router();

router.post("/",(req,
                 res)=>{

    console.log(req.body);

    res.json({message:req.body.message});

});


router.get("/",(req,res)=>{

    res.json({message:"********************: Voici les données ******************"});
})


router.delete("/:id",(req,res)=>{

    res.json({message:"Post supprimé avec ID :"+ req.params.id});
})


router.put("/:id",(req,res)=>{
    console.log(req.body);

    res.json({message:"message modifié avec succes:::::"});
})

module.exports = router;
