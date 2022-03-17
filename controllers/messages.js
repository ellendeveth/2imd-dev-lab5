const Message = require('./../models/message');

const getAll = (req, res) => {
    const response = {
        status: "success",
        data: {
            messages: [
                {
                    "username": "ellen",
                    "message": "yo lol",
                },
                {
                    "username": "fien",
                    "message": "hallooo",
                }
            ]
        }
    }
    res.json(response);
}
const create = async (req, res) => {
    //message saven
    //console.log("🤙🏼");
    let username = req.body.username;
    let message = req.body.message;

    let m = new Message();
    m.username = username;
    m.message = message;
    await m.save();

    res.send("POST API messages");
}

module.exports.getAll = getAll;
module.exports.create = create;