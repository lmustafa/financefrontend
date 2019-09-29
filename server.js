var express = require('express');

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));

// app.get('/index.js',function(req,res){
//   fs.readFile(path.join(__dirname+'/public/index.js'), 'utf8', function(err, contents) {
//     const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
//     res.contentType('application/javascript');
//     res.send(minimizedContents._obfuscatedCode);
//   });
// });
//
// app.get('/addFileToPanel', function(req , res){
// 	let fileSelected = req.query.filename;
// 	//let files = fs.readdirSync('./uploads/');
// 	//res.send(fileSelected);
// 	let f = "./uploads/"
// 	f = f + fileSelected;
// 	var jString = sharedLib.objectToJSON(f);
// 	//var jString = sharedLib.objectToJSON(fileSelected);
// 	var array   = JSON.parse(jString);
// 	console.log(f);
// 	res.send(array);
// });

//
// var server = app.listen(process.env.PORT || 3000, listen);
//
// function listen() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://' + host + ':' + port);
// }
