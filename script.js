var cheerio = require('cheerio'),
    $ = cheerio.load('<ul id="tagcloud"></ul>');

function Widget (db) {
  "use strict";

  if (false === (this instanceof PostsDAO)) {
      console.log('Warning: PostsDAO constructor called without "new" operator');
      return new PostsDAO(db);
  }

  var posts = db.collection("posts");

  this.tagWidget = function (tag, num, dom, callback) {
        "use strict";
        
        var g1 = db.runCommand(
        { aggregate : "article", pipeline : [
        { $project : {
          tags : 1
          }},
          { $unwind : "$tags" },
          { $group : {
          _id : "$tags",
          docsByTag : { $sum : 1 },
          }}
        ]});

        function (err, result) {

        var highVal = 0;
        var lowVal = Number.MAX_VALUE;
        var tagName = result._id              //mongodb       dom.getElementsByTagName(tag);
        var minFont = 14:         
        var maxFont = 30;
        var fontDif = 0;
        var sizeDif = 0;
        var size = 0;
        var i = 0;
        var data = 0;

        for(i = 0; i < result.length; ++i) {
            data = tags.docsByTag[i];          //parseInt(tags[i].getAttribute('data-count'),10);
          if(data > highVal) {
            highVal = data;
          }
          if(data < lowVal) {
            lowVal = data;
          }
        }

        fontDif = maxFont - minFont;
        sizeDif = highVal - lowVal;

        for(i = 0; i < tags.length; ++i) {
            data = tags.docsByTag[i];
            size = (fontDif * (data - lowVal) / sizeDif) + minFont;
            size = Math.round(size);
            tags.docsByTag[i].style.fontSize = size + "px";
            $('ul').append(i).wrap('<a />').wrap('<li />')
        }

          db.close();
        } //this is the important one
      }      

        if (err) return callback(err, null);

        console.log('here goes nothing');

        callback(err, items);
};
//yeah idk if this works
