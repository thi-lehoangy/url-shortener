const express = require('express');
const expressApp = require('./app');

const PORT = process.env.PORT || 3001

const StartServer = async () => {
    const app = express();

    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();