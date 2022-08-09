import express from "express";
import {
	getPosts,
	createPost,
	getPost,
	deletePost,
	updatePost,
	likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getPosts);
router.route("/").post(auth, createPost);
router.route("/:id").delete(auth, deletePost);
router.route("/:id").patch(auth, updatePost);
router.route("/:id/likePost").patch(auth, likePost);

router.route("/:id").get(getPost);

export default router;