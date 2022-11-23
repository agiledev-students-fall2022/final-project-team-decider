const router = require('express').Router();
const { Schema } = require('mongoose');
let Group = require('../model/group.model');

router.route('/').get((req, res) =>
{
    Group.find().then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const idx = req.body.idx;

    const newGroup = new Group({idx: idx});

    newGroup.save()
        .then(() => res.json('Group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/remove', (req, res) =>
{
    Group.remove()
    .then(() => res.json('removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>
{
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/idx/:idx').get((req, res) =>
{
    Group.find({idx: req.params.idx})
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>
{
    Group.findByIdAndDelete(req.params.id)
        .then(() => res.json('Group deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/idx/:idx').delete((req, res) =>
{
    Group.deleteMany({idx: req.params.idx})
        .then(() => res.json(`Group ${req.params.idx} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
    Group.findById(req.params.id)
        .then(group => {
            group.id = req.body.id;
            group.save()
                .then(() => res.json('Group updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cur_group').get(async(req, res) =>
{
    cur_group = await user.findOne({username: this.body.idx}).exec();
    res.json(cur_group);
});

module.exports = router;