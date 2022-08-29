const helpDetails = (req,res) =>{
    return res.status(200).send({
        message:"Successfully hitting the help API",
        success:true,
        data:{
            contact:"+9138XXXXXX"
        }
    })
}

module.exports = {
    helpDetails
}