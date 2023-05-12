# Download

Easily download urls

## Usage

```js
// CJS
const download = require("@doggybootsy/download").default;
// ESM
import download from "@doggybootsy/download";
// Later
download(
  "url",
  "path"
);
```

## Returns

Returns a promise (type `Promise<true>`)

### Resolved

Will resolve with the value `true` if it didn't error

### Rejection

Will reject if either of these conditions happen
* FileSystem Write Stream errors
* Http/Https fails
* If the url protocol isn't `http:` or `https:`

