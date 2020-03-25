# splitsecond

A simple date manipulation library for Node. This library always returns ISO 8601 datetime stamps in UTC.

# Installation

```bash
npm i -S splitsecond
```

or 

```bash
yarn add splitsecond
```

# Usage

```javascript
const { now, update, parse } = require('splitsecond');
```

This package composes `splitsecond` modules together and exposes all of them in a single package.

You can also download individual modules under the scoped name `@splitsecond`. Checkout each module for the usage documentation.

1. [@splitsecond/now](https://www.npmjs.com/package/@splitsecond/now)
2. [@splitsecond/update](https://www.npmjs.com/package/@splitsecond/update)
3. [@splitsecond/parse](https://www.npmjs.com/package/@splitsecond/parse)