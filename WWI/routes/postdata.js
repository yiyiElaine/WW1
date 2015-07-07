var request = require('request');

module.exports = function(app) {
  app.post('/postdata', function(req, res) {

    var data = JSON.stringify({
      username: req.body.username,
      password: req.body.password

    });
    request(
      {url: 'http://ec2-52-7-80-138.compute-1.amazonaws.com/rest/ww1_sql/USER?app_name=ww1',
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: data}, 
      function(error, response, body){
          if(error){
            console.log(error);
          }
          else{
            console.log(response.statusCode);
            console.log("success");
          }
      }
    );
    res.redirect("/");
  });
}
