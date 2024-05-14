const Todo = require("../models/Todo")

exports.updateTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,discription} = req.body;
        const updateData = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,discription,updatedAt:Date.now()},
        )

        res.status(200).json(
            {
                success:true,
                data:updateData,
                message:"Upadate SuccessFully"
            }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json(
            {
                success:false,
                message:error.message,
            }
        )
    }
}