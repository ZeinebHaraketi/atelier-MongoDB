const { default: mongoose } = require('mongoose');
const contactModel = require('../models/contact');


    // GET All Contact
 const getAllContact = async(req,res,next)=>{
    try {

        const contacts = await contactModel.find();
        if (!contacts || contacts.length == 0) {
            throw new Error("contacts  not found")
        }

        res.status(200).json(contacts);

    } catch (error) {
       res.status(500).json(error.message); 
    }
}

    // ADD New Contact
 const createContact = async(req,res,next)=>{
    const contact = req.body;

    const newContact = contactModel(contact);

    try {
        await newContact.save();
        res.status(201).json(newContact);
        

    } catch (error) {
        res.status(500).json(error.message);
    }
}

    // DELETE Contact
const deleteContact = async(req,res,next)=>{
     //get the ID or fetch the ID
     const { id } = req.params;

     if (!mongoose.Types.ObjectId.isValid(id))  
     return res.status(404).send('no contact with that id');

     await contactModel.findByIdAndRemove(id);

     res.status(200).json({ message: 'contact deleted successfully'});
}

const updateContact = async(req,res,next)=>{
    const { id: _id } = req.params;
    const contact = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('no contact with that id');

        const updatedContact = await contactModel.findByIdAndUpdate(_id, {...contact,_id}, {new: true});
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    getAllContact,
    createContact,
    deleteContact,
    updateContact
}

