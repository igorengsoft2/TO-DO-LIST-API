require('dotenv').config();

const https = require('https');
const fs = require('fs');
const app = require('./app');

const PORT = process.env.PORT;

const options = {

    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)

}

https.createServer(options, app).listen(PORT, () => {

    console.log(`Servidor HTTPS rodando na porta ${PORT}`);
})    
