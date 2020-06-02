const fs = require('fs');

const postDir = __dirname + "/../posts/";

var GetPosts = function(req, res, next)
{


    const path = postDir + req.params.id + ".md";
    console.log("dir" + path);
    fs.readFile(path, 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }
        txt  = data.toString();
        console.log(txt)
        res.send(txt);
    });
};

module.exports.GetPosts = GetPosts;