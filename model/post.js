import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	text: String,
	username: String,
	userId: String,
	description: String,
	groupName: String,
<<<<<<< HEAD:model/Post.js
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
=======
>>>>>>> 2c224ff8dd3b4a7e7568acf3458bd052ff361b72:model/post.js
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