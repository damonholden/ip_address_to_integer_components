# ip_address_to_integer_components

A simple, zero-dependency, JavaScript class for converting IP addresses to integer versions of their network address components (the IP address, broadcast address, and network address).

## Usage

Instantiate the `IpAddressToIntegerComponents` class with a string representation of an IP and an integer representation of the IP's mask:

```JavaScript
const ipAddressComponents = new IpAddressToIntegerComponents("192.168.0.1", 16)
/*
	IpAddressToIntegerComponents {
  		address: 3232235521,
  		networkAddress: 3232235520,
  		broadcastAddress: 3232301055
	}
*/
```

Instantiating an `IpAddressToIntegerComponents` instance without providing a subnet mask will return the same interface with the `networkAddress` and `broadcastAddress` set to `null`:

```JavaScript
const ipAddressComponents = new IpAddressToIntegerComponents("192.168.0.1", 16)
/*
	IpAddressToIntegerComponents {
  		address: 3232235521,
  		networkAddress: null,
  		broadcastAddress: null
	}
*/
```

## Development

Before committing code or publishing a new package version tests must be ran using the following command:

```bash
npm test
```

It is also important to make sure the package actually works as an npm package before publishing:

```Bash
npm install . -g
```

Also worth checking that the correct files are being published by doing a dry run:

```Bash
npm publish --dry-run
```
