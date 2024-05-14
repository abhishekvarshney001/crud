const Todo = require("../models/Todo")

exports.getTodo = async(req,res) =>{
    try {
        const response = await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Sara Data aa gaya"
            }
        )
    } catch (error) {
        console.log("Error aa gaya");
        console.error(error)
        res.status(400).json(
            {
                success:false,
                message:"Nahi aa paya Internal error aa gai",
                error:error.messasge,
            }
        )
    }
}

exports.getTodoById = async(req,res) =>{
    try {
        const id = req.params.id;
       
        const todo = await Todo.findById({_id:id});
       
        if(!todo)
        {
            return res.status(404).json(
                {
                    success:false,
                    message:"Id is wrong"
                }
            )
        }

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"data is found"
            }
        )


    } catch (error) {
        res.status(400).json(
            {
              success:false,
              error:error.messasge,
              message:"Data is not found Internal error"  
            }
        )
    }
}