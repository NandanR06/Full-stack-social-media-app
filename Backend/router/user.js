import { Router } from "express";
import bcrypt from "bcryptjs"
import user from "../modules/modules.js";

const router = Router();

//update
router.put('/:id', async (req, res) => {
    if (req.body.userID === req.params.id) {
        if (req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: "error in hashing the password" })
            }
        }
        try {
            const data = await user.findByIdAndUpdate(req.params.id, { $set: req.body })
            return res.status(201).json({ data });
        } catch (err) {
            return res.status(500).json({ message: err })
            console.log(err)
        }

    }
    else {
        res.status(403).json({ message: "You can update only your account " });
    }
})


//delete

router.delete('/:id', async (req, res) => {
    if (req.body.userID === req.params.id) {
        try {
            const data = await user.findOneAndDelete(req.params.id)
            res.status(201).json({ message: "account has been deleted" });
        } catch (err) {
            return res.status(500).json({ message: err })

        }
    }
    else {
        res.status(403).json({ message: "You can delete only your account " });
    }
})

//get 
router.get('/', async (req, res) => {

    const userId = req.query.userID;
    const username = req.query.userName;
    try {
        const userdata = userId 
        ? await user.findById(userId)
         : await user.findOne({ userName: username });

        const { password, createdAt, updatedAt, ...other } = userdata._doc;
        res.status(200).json(other)
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//follow a user

router.put('/:id/follow', async (req, res) => {
    if (req.body.userID !== req.params.id) {
        try {
            const User = await user.findById(req.params.id);
            const currentUser = await user.findById(req.body.userID);

            if (!User.followers.includes(req.body.userID)) {
                await User.updateOne({ $push: { followers: req.body.userID } });
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(201).json({ message: "user has been followed" });

            } else {
                res.status(403).json({ message: "you already following" })
            }


        } catch (error) {
            res.status(500).json(error.message)
        }

    }
    else {
        res.status(403).json({ message: "you cannot  follow yourself" })
    }

})

//unfollow a user

router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userID !== req.params.id) {
        try {
            const User = await user.findById(req.params.id);
            const currentUser = await user.findById(req.body.userID);

            if (User.followers.includes(req.body.userID)) {
                await User.updateOne({ $pull: { followers: req.body.userID } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(201).json({ message: "user has been unfollowed" });

            } else {
                res.status(403).json({ message: "you already unfollowing" })
            }


        } catch (error) {
            res.status(500).json(error.message)
        }

    }
    else {
        res.status(403).json({ message: "you can unfollow yourself" })
    }

})
export default router;
