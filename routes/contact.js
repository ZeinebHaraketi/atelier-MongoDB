const express = require('express');
const {getAllContact, createContact, updateContact, deleteContact} = require('../controllers/contact');
const router = express.Router();

//test if routes works
// router.get('/', (req,res, next)=>{
//     res.json("works!");
// })

router.get('/',getAllContact);
router.post('/add',createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);



module.exports = router;