class apiController{

    // [GET] /api/:slug
    getUserInfo(req, res){
        
        res.json({
            ipaddress: req.ip,
            language: req.headers['accept-language'],
            software: req.headers['user-agent']
        })
    }

    //[GET] /api/Hello
    greeting (req, res) {
        res.json({greeting: 'hello API'});
    }

}


module.exports = new apiController();