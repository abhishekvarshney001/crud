const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res) =>{
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
                success:true,
                message:"Delete SuccessFully"
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json(
            {
                success:false,
                message:error.message
            }
        )
    }
}