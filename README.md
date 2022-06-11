# nodejs-intership-lesson-1
NodeJs internship, lesson 1. Get Info by My Ip

```sh
npm install nodejs-intership-lesson-1
```

## Usage

```js
import { getIpByRequest, getPublicIpV4ByNetwork } from 'nodejs-intership-lesson-1';

console.log(getIpByRequest(request));
//=> '0.0.0.0'

console.log(await getPublicIpV4ByNetwork());
//=> '127.0.0.1'
```

## API

The package returns the address of the internet-facing interface, as determined from the default gateway. When the address cannot be determined for any reason, `0.0.0.0` will be returned.

The package relies on operating systems tools and also can return ip with request connection.

### getIpByRequest()

Returns the IPv4 address with request connection.

### getPublicIpV4ByNetwork()

Returns the internal IPv4 address.
