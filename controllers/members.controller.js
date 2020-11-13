const data = require('../data');
const uuid = require ('uuid');

exports.getAllMembers = (req, res) => {
    res.json(data);
}

exports.getAMember = (req, res) => {
    const found = data.some(member => member.id == parseInt(req.params.id));

    if (found) {
        res.json(data.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}`})
    }
}

exports.createAMember = (req, res) => {
    const newMember = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    if (!newMember.firstName || !newMember.lastName) {
        return res.status(400).json({ msg: 'Please include a first and last name'})
    } 

    data.push(newMember);
    res.json(newMember);
}

exports.updateAMember = (req, res) => {
    const found = data.some(member => member.id == parseInt(req.params.id));

    if (found) {
        const updateMember = req.body;
        data.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.firstName = updateMember.firstName ? updateMember.firstName : member.firstName;
                member.lastName = updateMember.lastName ? updateMember.lastName : member.lastName;
                res.json({msg: 'Member was updated', member})
            }
        });
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}`})
    }
}

exports.deleteAMember = (req, res) => {
    const found = data.some(member => member.id == parseInt(req.params.id));

    if (found) {
        res.json({ 
            msg: `Member with id ${req.params.id} deleted`, 
            members: data.filter(member => member.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}`})
    }
}