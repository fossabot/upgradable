const semver = require('semver');
const boxt = require('boxt');
const fork = require('../fork');
require('colors');
let beenthere = false;

/**
 * Offer user to upgrade program if there's a new version available
 * @param  {String}  options.name
 * @param  {String}  options.version
 * @param  {Boolean} [options.immediate=false]
 * @param  {String}  [options.message='I can fix that for you.']
 * @return {Boolean} (async)                                     is there an update available
 */
module.exports = async function init({name, version, immediate = false, message = 'I can fix that for you.'} = {}) {
    if (!name || !version) {
        return false;
    }

    const latest = await fork('latest-version', {name});

    if (!semver.gt(latest, version)) {
        return false;
    }

    async function start() {
        if (beenthere) {
            return;
        }

        beenthere = true;

        const lines = [
            `You are running ${name.yellow} version ${version.yellow}`,
            `The latest version is ${latest.green}`,
        ];
        message && lines.push(message.bold.italic);

        console.log(
            boxt(
                lines.join('\n'),
                {align: 'left', theme: 'round'}
            )
        );

        const Confirm = require('prompt-confirm');
        const confirmed = await new Confirm(`install ${name.yellow} to version ${latest.yellow} globally?`).run();

        confirmed || process.exit();
        await require('../install-latest')(name);
        process.exit();
    }

    if (immediate) {
        await start();
        return;
    }

    process.stdin.resume();
    process.on('SIGINT', await start);

    (function wait() {
        beenthere || setTimeout(wait, 1000);
    })();

    return true;
}
