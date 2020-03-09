const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }

    res.send('Middleware'); 
});

router.post('/',async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//get a specific post
router.get('/:postId',async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//delete a specific post
router.delete('/:postId',async (req,res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId})
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});
module.exports = router;
