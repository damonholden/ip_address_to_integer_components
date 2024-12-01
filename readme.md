# LongIp

A simple, zero-dependency, package for creating long ip addresses along with long versions of the IP's broadcast and network addresses.

## Usage

There are two ways to use this package:

1. Instantiate the `LongIp` class with a string representation of an IP and an integer representation of the ip's mask:

```JavaScript
const longIp = new LongIp("192.168.0.1", 16)
/*
	LongIp {
  		address: 3232235521,
  		networkAddress: 3232235520,
  		broadcastAddress: 3232301055
	}
*/
```

2. If you just want the long version of an IP but do not need the network and broadcast address, you can call the static method `ipToLong` of the `LongIp` class with the IP:

```JavaScript
const ipToLong = LongIp.ipToLong("192.168.0.1") // 3232235521
```

## Development

Before committing code or publishing a new package version tests must be ran using the following command:

```bash
node LongIp.test.js
```

It is also important to make sure the package actually works as an npm package before publishing:

```Bash
npm install . -g
```

Also worth checking that the correct files are being published by doing a dry run:

```Bash
npm publish --dry-run
```
