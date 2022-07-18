import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	text: String,
	description: String,
	groupName: String,
	question: String,
	pollQuestion: String,
	pollOptions: [String],
	link: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	repost: Boolean,
});

const Post = mongoose.model("Post", postSchema);

export default Post;