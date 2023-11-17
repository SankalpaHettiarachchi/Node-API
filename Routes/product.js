const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>
{
    res.status(200).json
    (
        {
            message:'Handling GET'
        }
    )
})

router.post('/',(req,res,next)=>
{
    res.status(200).json
    (
        {
            message:'Handling POST'
        }
    );
});

router.patch('/:product_id',(req,res,next)=>
{
    const id = req.params.product_id;
    res.status(200).json
    (
        {
            message:'Handling Patch',
            id:id
        }
    );
});

router.put('/',(req,res,next)=>
{
    res.status(200).json
    (
        {
            message:'Handling PUT'
        }
    );
});

router.delete('/:product_id',(req,res,next)=>
{
    const id = req.params.product_id;
    res.status(200).json
    (
        {
            message:'Handling Patch',
            id:id
        }
    );
});

module.exports = router;