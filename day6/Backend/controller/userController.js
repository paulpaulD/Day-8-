import user from '../model/usermodel.js';

export const create=async(req,res)=>{
    try{
        
        let userdata=new user(req.body);
        console.log(userdata);
        const {email} =userdata;
        const userExist =await user.findOne({email});
        if(userExist){
            return res.status(400).json({message:"user alredy exist"});
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser})
    }
    catch(err){
        res.status(500).json({error:"Internal server error occure"});
    }
}


export const fetch=async(req,res)=>{
    try{
        const users=await user.find();
        if(users.length===0){
            return res.status(400).json({message:"No user found"});
        }
        res.status(200).json({users});

    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}

export const fetchid=async(req,res)=>{
    try{
        const users=await user.find();
        if(users.length===0){
            return res.status(400).json({message:"No user found"});
        }
        res.status(200).json({users});

    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}

export const update=async(req,res)=>{
    try{

        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"user not found"});
        }
        const updateUser=await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateUser});
    }
    catch{
        res.status(500).json({error:"Internal server error"});
    }
}

export const deleteuse=async(req,res)=>{
    try{

        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"user not found"});
        }
        await user.findByIdAndDelete(userExist);
        res.status(200).json({message:"user deleted"});
    }
    catch{
        res.status(500).json({error:"Internal server error"});
    }
}
