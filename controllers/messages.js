const Message = require('./../models/message');

const getAll = (req, res) => {
    // console.log(req.query); 
    const username = req.query.user;
    if(req.query.user){
        //res.send(username);
        const response = {
            status: "success",
            data: {
                "user": username,
                "message": `getting message with username ${username}`,
            }
        }
        res.json(response);
    } else {

    const response = {
        status: "success",
        message: "getting messages",
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
    
}
const getId = (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id;
    //res.send(`getting message with id ${id}`);
    const response = {
        status: "success",
        message: `getting message with id ${id}`,
        data: {
            message: 
                {
                    "username": "ellen",
                    "message": "yo lol",
                }
        }
    }
    res.json(response);
};




const create = async (req, res) => {
    //message saven
    //console.log("🤙🏼");
    let username = req.body.username;
    let message = req.body.message;

    // let m = new Message();
    // m.username = username;
    // m.message = message;
    // await m.save();

    const response = {
        status: "success",
        data: {
            "user": username,
            "message": "nodejs isn’t hard, or is it?",
        }
    }
    res.json(response);
}

const update = (req, res) => {
    //res.send('updating messages');
    const id = req.params.id;
    const response = {
        status: "success",
        data: {
            "message": `updating message with id ${id}`,
        }
    }
    res.json(response);
};

const del = (req, res) => {
    const id = req.params.id;
    //res.send(`deleting message with id ${id} `);
    const response = {
        status: "success",
        data: {
            "message": `deleting message with id ${id}`,
        }
    }
    res.json(response);
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.getId = getId;
module.exports.update = update;
module.exports.del = del;