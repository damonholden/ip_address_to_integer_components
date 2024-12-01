const { describe, test } = require("node:test");
const assert = require('node:assert/strict');

const { LongIp } = require("./LongIp.js");

describe("LongIp class", () => {
	describe("when instantiated with an ip and mask, it should return the correct long versions of the ip address, broadcast address, and network address", () => {
		test("255.255.255.255/32 should have `4_294_967_295` for the long address, broadcast address, and network address", () => {
			const LARGEST_UNSIGNED_THIRTY_TWO_BIT_NUMBER = 4_294_967_295;

			assert.deepEqual(Object.assign({}, new LongIp("255.255.255.255", 32)), {
				address: LARGEST_UNSIGNED_THIRTY_TWO_BIT_NUMBER,
				broadcastAddress: LARGEST_UNSIGNED_THIRTY_TWO_BIT_NUMBER,
				networkAddress: LARGEST_UNSIGNED_THIRTY_TWO_BIT_NUMBER,
			});
		});

		test("10.0.0.0/8 should have `167_772_160` for the long address, `184_549_375` for the broadcast address, and `167_772_160` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("10.0.0.0", 8)), {
				address: 167_772_160,
				broadcastAddress: 184_549_375,
				networkAddress: 167_772_160,
			});
		});

		test("192.168.1.10/24 should have `3_232_235_786` for the long address, `3_232_236_031` for the broadcast address, and `3_232_235_776` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("192.168.1.10", 24)), {
				address: 3_232_235_786,
				broadcastAddress: 3_232_236_031,
				networkAddress: 3_232_235_776,
			});
		});

		test("10.0.1.5/16 should have `167_772_421` for the long address, `167_837_695` for the broadcast address, and `167_772_160` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("10.0.1.5", 16)), {
				address: 167_772_421,
				broadcastAddress: 167_837_695,
				networkAddress: 167_772_160,
			});
		});
		test("172.16.5.12/12 should have `2_886_731_020` for the long address, `2_887_778_303` for the broadcast address, and `2_886_729_728` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("172.16.5.12", 12)), {
				address: 2_886_731_020,
				broadcastAddress: 2_887_778_303,
				networkAddress: 2_886_729_728,
			});
		});

		test("192.168.100.50/26 should have `3_232_261_170` for the long address, `3_232_261_183` for the broadcast address, and `3_232_261_120` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("192.168.100.50", 26)), {
				address: 3_232_261_170,
				broadcastAddress: 3_232_261_183,
				networkAddress: 3_232_261_120,
			});
		});
		test("10.10.5.50/20 should have `168_428_850` for the long address, `168_431_615` for the broadcast address, and `168_427_520` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("10.10.5.50", 20)), {
				address: 168_428_850,
				broadcastAddress: 168_431_615,
				networkAddress: 168_427_520,
			});
		});
		test("172.20.30.40/19 should have `2_886_999_592` for the long address, `2_887_000_063` for the broadcast address, and `2_886_991_872` for the network address", () => {
			assert.deepEqual(Object.assign({}, new LongIp("172.20.30.40", 19)), {
				address: 2_886_999_592,
				broadcastAddress: 2_887_000_063,
				networkAddress: 2_886_991_872,
			});
		});
	});

	test("the LongIp class should have one static method `ipToLong` that allows a single IP address to be converted to long form", () => {
		assert.deepEqual(LongIp.ipToLong("172.20.30.40"), 2_886_999_592);
	});

	test("the `ipToLong` static method of the LongIp class should not be available on instantiations", () => {
		assert.equal("ipToLong" in new LongIp("172.20.30.40", 19), false);
	});
});
