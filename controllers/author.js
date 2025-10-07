const Author = require('../models/author');
const ContactData = require('../models/contactData');

class AuthorController {
    async create(req, res) {
        const newContactData = new ContactData({
            address: req.body.contact.address,
            phone: req.body.contact.phone
        })
        try {
            const contactData = await newContactData.save();

            const newAuthor = new Author({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                personalCode: req.body.personalCode,
                contactData: contactData._id
            })
            console.log(newAuthor);
            try {
                const author = await newAuthor.save();

                return res.status(200).json(author);
            } catch (error) {
                return res.status(500).json({message: error});
            }
        } catch (error) {
            return res.status(500).json({message: error});
        }    
    }
    
    async getAll(req, res) {
        try {
            const authors = await Author.find().populate('contactData');
            return res.status(200).json(authors);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const author = await Author.findById(req.params.id).populate('contactData');
            return res.status(200).json(author);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            await Author.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: 'Author deleted' });
        } catch (error) {
            return res.status(500).json({message: error});
        };
    }

    async update(req, res) {
        try{
            const id = req.params.id;

            const author = await Author.findById(id);
            const contactDataId = author.contactData;

            const updatedContactData = {
                address: req.body.contact.address,
                phone: req.body.contact.phone
            };

            await ContactData.findByIdAndUpdate(
            contactDataId, updatedContactData
            )

            const updatedAuthor = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                personalCode: req.body.personalCode,
                contactData: contactDataId
            } 

            const result = await Author.findByIdAndUpdate(
            id, updatedAuthor, { new: true }
            ).populate("contactData")

            return res.status(200).json(result)
        }
        catch(error){
            return res.status(500).json({message: error})
        }
    }
    
}

module.exports = new AuthorController();