var Blynk = require("blynk-library");

var exec = require('child_process').exec, child;

var AUTH = '5WnJQczJdxKv-ZmcvpX6s779Gst_dgUb';

var blynk = new Blynk.Blynk(AUTH);

var v5 = new blynk.VirtualPin(5);



v5.on('write', function(param) {  

	console.log('V5:', param[0]); 
		v5.on('write', function(param) {
	if (param[0] == '1') {
		child = exec('sudo service motion stop',
		    function (error, stdout, stderr) {
		        console.log('stdout: ' + stdout);
		        console.log('stderr: ' + stderr);
		        if (error !== null) {
		             console.log('exec error: ' + error);
                        }
		    });
        }
	else if (param[0] == '0') {
		child = exec('sudo service motion start',
	    	function (error, stdout, stderr) {
		        console.log('stdout: ' + stdout);
		        console.log('stderr: ' + stderr);
	        	if (error !== null) {
	            	console.log('exec error: ' + error);
        		}
    		});

        }
});

});
