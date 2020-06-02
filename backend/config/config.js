module.exports = {
    server_port : 3000,
    route_info : [
        {path : "/posts/:id", type:"get", file : "./posts", method : "GetPosts"},
        {path : "/video", type:"get", file : "./images", method : "GetVideo"},
    ]
};