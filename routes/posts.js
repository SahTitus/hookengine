import express from "express";
import {
	getPosts,
	createPost,
	getPost,
	deletePost,
	updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").delete(deletePost);
router.route("/:id").patch(updatePost);

router.route("/:id").get(getPost);

<<<<<<< HEAD
export default router; 
=======
export default router;
>>>>>>> 2c224ff8dd3b4a7e7568acf3458bd052ff361b72
