import mongoose from "mongoose";

// const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
	title: String,
	description: String,
	groupName: String,
	image: String,
	imageDescription: String,
	question: String,
	pollQuestion: String,
	pollOptions: [String],
	link: String,
	linkDescription: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	repost: Boolean,
});

const Post = mongoose.model("Post", postSchema);

export default Post;