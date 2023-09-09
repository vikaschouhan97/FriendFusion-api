import express from "express";
import { getUser, getUserFriends, addRemoveFriend, getAllUser } from "../controllers/users.ts";
import { verifyToken } from "../middleware/auth.ts";

const router = express.Router();

// READ
router.get("/", verifyToken, getAllUser);
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.post("/:id/friends", verifyToken, addRemoveFriend);

// UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
