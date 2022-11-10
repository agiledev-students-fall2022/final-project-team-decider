let router = require('express').Router();
let Group = require('../model/group.model');
let SavedLocation = require('../model/savedLocation.model');

router.route('/').get((req, res) => {
    Group.find().then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
}
);


router.route('/vote').post((req, res) => {
    const group_id = req.body.group_id;
    const location_id = req.body.location_id;
    const vote = req.body.vote;

    const newVote = new Vote({
        group_id,
        location_id,
        vote
    });

    newVote.save()
        .then(() => res.json('Vote added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

export default router;