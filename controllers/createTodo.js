const Todo = require("../models/Todo")

exports.createTodo = async(req,res) =>{
    try {
        const {title,discription} = req.body;
        const response = await Todo.create({title,discription});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Successfully"
            }
        )
    } catch (error) {
        console.log("Error aa gaya")
        console.error(error.message)
        res.status(500).json({
            success:false,
            data:"Entry nahi hui",
            message:error.message
        })
    }
}