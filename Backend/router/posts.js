import { Router } from "express";
import post from "../modules/post.js"
import User from "../modules/modules.js"
//posting in the website
const router = Router();

//create a post
router.post("/", async (req, res) => {
    const data = new post(req.body);

    try {
        const save = await data.save();
        res.status(201).json(save);

    } catch (error) {
        res.status(500).json(error)
    }
})

//update 
router.put("/:id", async (req, res) => {
    try {
        const Post = await post.findById(req.params.id);
        if (Post.userID === req.body.userID) {
            await Post.updateOne({ $set: req.body });
            res.status(200).json({ messsage: "post has been updated" });

        }
        else {
            return res.status(403).json({ message: "you can update only your post" })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

//delete
router.delete("/:id", async (req, res) => {
    const Post = await post.findById(req.params.id);
    try {

        if (Post.userID === req.body.userID) {
            await Post.deleteOne();
            res.status(200).json({ messsage: "post has been deleted" });
        }
        else {
            return res.status(403).json({ message: "you can delete only your post" })
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

//like /dislike 

router.put("/:id/like", async (req, res) => {
    try {
        const Post = await post.findById(req.params.id);
        if (!Post.likes.includes(req.body.userID)) {
            await Post.updateOne({ $push: { likes: req.body.userID } });
            res.status(200).json({ message: "post has been liked" })
        }
        else {
            await Post.updateOne({ $pull: { likes: req.body.userID } });
            res.status(200).json({ message: "post has been disliked" })
        }

    } catch (error) {
        return res.status(500).json(error.message)

    }
})

//get post
router.get('/:id', async (req, res) => {
    try {
        const Post = await post.findById(req.params.id);
        res.status(200).json(Post);
    } catch (error) {
        return res.status(500).json(error.message)

    }
})


//get timeline

router.get('/timeline/:userID', async (req, res) => {
    try {
        const createUser = await User.findById(req.params.userID);
        const userPost = await post.find({ userID: createUser._id });
        const friendPost = await Promise.all(
            createUser.following.map(friendId => (
                post.find({ userID: friendId })
            ))
        )
        res.json(userPost.concat(...friendPost));

    } catch (error) {
        return res.status(500).json(error.message)

    }
})

//get users post
router.get("/profile/:username",async (req,res) => {
    try {
        const user = await User.findOne({userName:req.params.username});
        const info = await post.find({userID : user._id});
        res.status(200).json(info)
    } catch (error) {
        return res.status(500).json(error.message)

    }
})
export default router;
