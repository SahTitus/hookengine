import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	text: String,
	creatorName: String,
	userId: String,
	description: String,
	groupName: String,
	question: String,
	pollQuestion: String,
	pollOptions: [String],
	link: String,
	linkData: {},
	imageData: {},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	repost: Boolean,
});

const Post = mongoose.model("Post", postSchema);

export default Post;