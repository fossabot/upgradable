# Upgradable

[![NPM](https://nodei.co/npm/upgradable.png)](https://nodei.co/npm/upgradable/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fomrilotan%2Fupgradable.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fomrilotan%2Fupgradable?ref=badge_shield)

Prompt your users to upgrade your node CLI tool if there's a new version available
> Prompts at end of interaction when user sends interrupt signal (ctrl+c)

Use
```js
const upgradable = require('upgradable');
const { name, version } = require('./package.json');

upgradable({name, version});
```

Shorthand
```js
require('upgradable')(require('./package.json'));
```

<img width="590" alt="image" src="https://user-images.githubusercontent.com/516342/36251069-8125d026-1248-11e8-86c7-8b4307a5774c.png">

### options

#### `message` (Optional)
```js
upgradable({name, version, message: 'This is my own inspirational message'});
```
<img width="386" alt="image" src="https://user-images.githubusercontent.com/516342/36252458-59387a00-124d-11e8-86f5-31d6eaf94f3d.png">


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fomrilotan%2Fupgradable.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fomrilotan%2Fupgradable?ref=badge_large)