var q = require('q');
var util    = require('util');
var mysqli = require('./mysqli');

exports.selectAllValue1 = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 6);
	var defered = q.defer();
	query =  mysql.query(strQuery,defered.makeNodeResolver());
	query.on('error',function(err){
	throw err;
	});
	
	return defered.promise;
}
exports.testregister = function(mysql,req, res)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli,'tododb');
    var defered = q.defer();
    
    escape_data =[req.body.id,req.body.name,req.body.username,req.body.address,req.body.email,req.body.phone];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());

    console.log(query.sql);

    query.on('error',function(err){
        console.log("Cannot create!")
        throw err;
    });

    return defered.promise;
}

exports.selectAllValue = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 6);
    var defered = q.defer();
    escape_data =[];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    query.on('error',function(err){
        throw err;
    })
    return defered.promise;
}
