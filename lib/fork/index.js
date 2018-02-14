const { fork } = require('child_process');
const path = require('path');

module.exports = (name, data) => {
    const file = path.join(__dirname, '../', name);
    const forked = fork(file, {stdio: 'ignore'});

    return new Promise((resolve, reject) => {
        forked
            .on('message', async (response) => {
                resolve(response);
                forked.disconnect();
            })

            .on('error', (error) => {
                console.log('Error from child process');
                reject(new Error(error));
            })

            .on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Child process exited with code ${code}`));
                }
            })

            .send(data);
    });
}
