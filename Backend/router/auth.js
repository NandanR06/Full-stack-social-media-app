import { Router } from "express";
import user from "../modules/modules.js";
import bcrypt from "bcryptjs"

const router = Router();

router.post('/register', async (req, res) => {

    try {
        //generating hash password
        const hashpassword = await bcrypt.hash(req.body.password, 10);
        //uploding the data to database

        const data = new user({...req.body, password : hashpassword});
        const save = await data.save();
        res.status(201).json(save);

    } catch (error) {
        console.log(error.message)
    }

})

router.post("/login" ,async (req,res)=>{
    try {
        const info = await user.findOne({email:req.body.email});
        !info && res.status(400).json({message :"email doesn't exist"});

        const password  = await bcrypt.compare(req.body.password,info.password);
        !password && res.status(400).json({message :"password doesn't exist"})

        res.status(200).json(info);
    } catch (error) {
        console.log(error.message)
    }
})
export default router;
