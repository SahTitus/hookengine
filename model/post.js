import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	text: String,
	creatorName: String,
	creator: String,
	userId: String,
	userDp: String,
	description: String,
	groupName: String,
	question: String,
	pollQuestion: String,
	pollOptions: [String],
	link: String,
	linkData: {},
	imageData: {},
	tags: [String],
	likes: {type: [String], default: []},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	repost: Boolean,
});

const Post = mongoose.model("Post", postSchema);

export default Post;