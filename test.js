const CRLF = '\r\n';
const net = require('net');
var i = 0;
const client = net.connect({ port: 5038 }, () => {

    client
        .on('data', chunk => {
            console.log(chunk.toString());

            client.write([
                'Action: ping',
                'ActionID: ' + i
            ].join(CRLF) + CRLF.repeat(2))
i++
            // client.destroy();
        })

        .write([
            'Action: Login',
            'Username: test',
            'Secret: test',
            'ActionID: 999'
        ].join(CRLF) + CRLF.repeat(2))
});

