const db = require('../util/database');


exports.postDataToTheServer = (req, res, next) => {
    const {id,money,description,category} = req.body;
    const insertQuery = 'INSERT INTO userdata (id,money,description,category) VALUES (?,?,?,?)';
    db.execute(insertQuery,[id,money,description,category]).then((result)=>{
        const responseData = {id,money,description,category};
        return res.json(responseData);
    })
}

exports.getAllDataFromServer = (req,res,next)=>{
    db.execute('SELECT * FROM userdata')
    .then((result) => {
        res.json(result[0]);//and send it to the client
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.getSingleDataFromServer = (req,res,next)=>{
    const userID = req.params.userID;
    const selectQuery = 'SELECT * FROM userdata WHERE id=?';

    db.execute(selectQuery,[userID])
    .then(([userData])=>{
        console.log("single user data:",userData);
        return res.json(userData);
    })
}


exports.deleteDataFromServer = (req,res,next)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const deleteQuery = 'DELETE FROM userdata WHERE ID = ?';
    db.execute(deleteQuery, [id])
    .then((results)=>{
        const userId = results.insertId;
        res.json({ userId, message: 'Data deleted successfully' });
    })
    .catch((err)=>{
        console.error('Error deleting data:', err);
        res.status(500).json({ error: 'Error deleting data' });
    })
}