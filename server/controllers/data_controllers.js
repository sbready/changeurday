const db = require("../data.js")

let dnpGif = [];

module.exports = {
    //external api
    getdnp(req, res){
        let dnpGif = 
           "https://api.giphy.com/v1/gifs/3ohzdQ1IynzclJldUQ?api_key=euvUR5gAUl4sqKKakv3eAxXxERoNWh8n"
        res.status( 200 ).json( dnpGif );
    },

    //internal api
    getSadGifs(req, res){
        res.status( 200 ).send( db.sadGif );
    },

    //internal api
    getHappyGifs(req, res){
        res.status( 200 ).send( db.funnyGif );
    },

    // //unused internal api
    // getHappyPhoto(req, res) {
    //     res.status( 200 ).send( db.funnyPhoto );
    // },

    // getSadPhoto(req, res) {
    //     res.status( 200 ).send(db.sadPhoto );
    // }

};