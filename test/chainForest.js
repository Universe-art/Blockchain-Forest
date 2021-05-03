const BlockchainForestDefi = artifacts.require("BlockchainForestDefi");


let daiAmount = 1;

contract("BlockchainForestDefi", accounts => {
  it("should swap Dai to Usdc", () =>
    BlockchainForestDefi.deployed()
      .then(instance => instance.method.swapHalfDaiToUsdc(daiAmount).send(accounts[0]))
      .then(console.log("OK"))
        );
      });