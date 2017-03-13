
exports.mysqli = function(data,row)
{
     k = mysqli[row];    
     for(var i in data)
     {        
     	k = k.replace(new RegExp('{{'+i+'}}', 'g'), data[i]);    	
     }
     return k;
}

var mysqli = [];

mysqli[6]  = 'select * from users';
mysqli['tododb'] = 'insert into users (name,username,address,email,phone) values (?,?,?,?,?)';