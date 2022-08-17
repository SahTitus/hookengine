import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  postId: { type: "String", required: true },
  comments: {
	type: [Object],
  creatorName: String,
userDp: String,
image: String,
likes: {
  type: [String],
  default: [],
},
replies: {
  type: [String],
  default: [],
},
createdAt: {
  type: Date,
  default: new Date(),
},
}
  
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

