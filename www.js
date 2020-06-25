const env = require('./environment_variables.js');

exports.getIndex = function(ips) {
    const message = `
        <html>
            <head>
                <script type = "text/javascript" src = "https://code.jquery.com/jquery-3.5.1.min.js"></script>
                
                <script type = "text/javascript">
                    $(document).ready(function() {
			var host = '` + env.BACKEND_HOST + `';//env.BACKEND_HOST ? env.BACKEND_HOST : location.hostname;
			if(!host) { host = location.hostname; }

                        var path = '` + env.BACKEND_PATH + `';
                        if(!path) { path = ""; }

			console.log('backend: ', host, ` + env.BACKEND_PORT + `);
                        $.get('http://' + host + ':` + env.BACKEND_PORT + `' + path).done(function (data) {
                            $('#div1').html(data);
                        });
                    });
                </script>
            </head>

            <body>
                *** FRONTEND:<br />
                ` + ips + `<br />
                <br />
                <div id="div1">Loading data...</div>
            </body>
        </html>
    `
    
    return message;
}
