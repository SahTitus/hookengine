import express from "express";
import {
	addComment,
	getComment,
	// deleteComment,
	updateComments, 
	// likeComment,
} from "../controllers/comments.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(auth, addComment);
// router.route("/:id").delete(auth, deleteComment);
// router.route("/:id").patch(auth, updateComment);
// router.route("/:id/likeComment").patch(auth, likeComment);
router.route("/:id/more").patch(auth, updateComments);

router.route("/:id").get(getComment);

export default router;