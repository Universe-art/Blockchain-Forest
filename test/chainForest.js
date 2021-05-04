const BlockchainForestDefi1 = artifacts.require("BlockchainForestDefi");

const BlockchainForestDefi2 = artifacts.require("BlockchainForestDefi");

let daiAmount = 1;




contract("BlockchainForestDefi", accounts => {
  const sender = accounts[0];
    it('should swap Dai to Usdc', async function () {
      BlockchainForestDefi1.deployed()
        .then(async function(blockchainForestDefiTest) {
          blockchainForestDefiTest = temp;
          await blockchainForestDefiTest.swapHalfDaiToUsdc(daiAmount,{ from: sender });
        })
        .then(() => done());
    });

    //  it('should add liquidity To Dai Usdt', async function () {
    //    BlockchainForestDefi2.deployed()
    //      .then(async function(blockchainForestDefi) {
    //        blockchainForestDefi = temp;
    //        await blockchainForestDefi.addliquidityToDaiUsdt(daiAmount,{ from: sender });
    //      })
    //      .then(() => done());
    //  });

});

