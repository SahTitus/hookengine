import Comment from "../model/comment.js";
import mongoose from "mongoose";

export const addReply = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send({ message: `Comment ID ${id} not found` });

  const comment = await Comment.findOne({ _id: id }).exec();

  const foundComment = comment.comments.find(
    (comment) => comment.id === body.commentId
  );

  foundComment.replies.push({
    ...body,
    id: Math.floor(Math.random() * 100) * 149126400,
    
    createdAt: new Date().toISOString(),
  });

  const updatedComment = await Comment.findByIdAndUpdate(id, comment, {
    new: true,
  });

  res.json(updatedComment);
};
