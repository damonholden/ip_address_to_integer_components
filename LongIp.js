class LongIp {
	constructor(ip, subnetMask) {
		this.address = LongIp.ipToLong(ip);

		const bitMask = this.#createBitMask(subnetMask);

		this.networkAddress = this.#calculateNetworkAddress(bitMask, this.address);
		this.broadcastAddress = this.#calculateBroadcastAddress(bitMask, this.address);
	}

	static ipToLong(ip) {
		const octets = ip.split(".");
		const octetsAsBinary = octets.map((octet) => Number(octet).toString(2).padStart(8, "0"));

		return parseInt(octetsAsBinary.join(""), 2);
	}

	#createBitMask(mask) {
		const thirtyTwoBitBinaryWithAllBitsPositive = 0xffffffff;
		const hostBits = 32 - mask;

		return (thirtyTwoBitBinaryWithAllBitsPositive << hostBits) >>> 0;
	}

	#calculateNetworkAddress(bitmask, longIp) {
		return (bitmask & longIp) >>> 0;
	}

	#calculateBroadcastAddress(bitMask, longIp) {
		return (~bitMask | longIp) >>> 0;
	}
}

module.exports = {
	LongIp,
};