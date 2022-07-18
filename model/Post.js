import mongoose from "mongoose";

// const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
	text: String,
	username: String,
	userId: String,
	description: String,
	groupName: String,
	image: String,
	// image: {
	// 	public_id: {
	// 		type: String,
	// 		required: false,
	// 	},
	// 	url: {
	// 		type: String,
	// 		required: false,
	// 	}
	// },
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