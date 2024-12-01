class IpAddressToIntegerComponents {
	constructor(ipAddress, subnetMask) {
		this.address = this.#ipAddressToInteger(ipAddress);

		if (subnetMask) {
			const bitMask = this.#createBitMask(subnetMask);

			this.networkAddress = this.#calculateNetworkAddressAsInteger(bitMask, this.address);
			this.broadcastAddress = this.#calculateBroadcastAddressAsInteger(bitMask, this.address);
		} else {
			this.networkAddress = null;
			this.broadcastAddress = null;
		}
	}

	#ipAddressToInteger(ipAddress) {
		const octets = ipAddress.split(".");
		const octetsAsBinary = octets.map((octet) => Number(octet).toString(2).padStart(8, "0"));

		return parseInt(octetsAsBinary.join(""), 2);
	}

	#createBitMask(mask) {
		const thirtyTwoBitBinaryWithAllBitsPositive = 0xffffffff;
		const hostBits = 32 - mask;

		return (thirtyTwoBitBinaryWithAllBitsPositive << hostBits) >>> 0;
	}

	#calculateNetworkAddressAsInteger(bitmask, ipAddressAsInteger) {
		return (bitmask & ipAddressAsInteger) >>> 0;
	}

	#calculateBroadcastAddressAsInteger(bitMask, ipAddressAsInteger) {
		return (~bitMask | ipAddressAsInteger) >>> 0;
	}
}

module.exports = {
	IpAddressToIntegerComponents,
};