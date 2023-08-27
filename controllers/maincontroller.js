const db = require('../util/database');




exports.postDataToTheServer = (req, res, next) => {

    const {id,money,description,category} = req.body;
    
    const insertQuery = 'INSERT INTO userdata (id,money,description,category) VALUES (?,?,?,?)';

    db.execute(insertQuery,[id,money,description,category]).then((result)=>{
        console.log("data saved sucess");
        const responseData = {id,money,description,category};
        return res.json(responseData);
    })
}

exports.getAllDataFromServer = (req,res,next)=>{
    db.execute('SELECT * FROM userdata')
    .then((result) => {
         console.log("server se aya:",result[0]);
        res.json(result[0]);//and send it to the client
    })
    .catch((err) => {
        console.log(err);
    })

}