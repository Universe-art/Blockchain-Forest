# Design Pattern Decisions

This section explains why we chose the design patterns we are using in the code. 


- Behavioral Patterns
    - [x] **Guard Check**: Ensure that the behavior of a smart contract and its input parameters are as expected.
    - [x] **State Machine**: Enable a contract to go through different stages with different corresponding functionality exposed.
    - [ ] Oracle: Gain access to data stored outside of the blockchain.
    - [ ] Randomness: Generate a random number of a predefined interval in the deterministic environment of a blockchain.
- Security Patterns
    - [x] **Access Restriction**: Restrict the access to contract functionality according to suitable criteria.
    - [ ] Checks Effects Interactions: Reduce the attack surface for malicious contracts trying to hijack control flow after an external call.
    - [ ] Secure Ether Transfer: Secure transfer of ether from a contract to another address.
    - [ ] Pull over Push: Shift the risk associated with transferring ether to the user.
    - [ ] Emergency Stop: Add an option to disable critical contract functionality in case of an emergency.
- Upgradeability Patterns
    - [ ] Proxy Delegate: Introduce the possibility to upgrade smart contracts without breaking any dependencies.
    - [ ] Eternal Storage: Keep contract storage after a smart contract upgrade.
- Economic Patterns
    - [ ] String Equality Comparison: Check for the equality of two provided strings in a way that minimizes average gas consumption for a large number of different inputs.
    - [ ] Tight Variable Packing: Optimize gas consumption when storing or loading statically-sized variables.
    - [ ] Memory Array Building: Aggregate and retrieve data from contract storage in a gas efficient way.

[Reference](https://fravoll.github.io/solidity-patterns/)

## Guard Check

The front-end get and converts the amount of the deposit

## State Machine

To reflect the Uniswap interface used by the project, the array used to send the path for the swap is typed memory

```
    function swapHalfDaiToUsdc(uint _amount) public  {
      uint amountTemp = _amount;
      IUniswapV2Router02 UniswapRouter = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
      address[] memory path = new address[](2);
      path[0] = daiTokenAddress; 
      path[1] = usdtTokenAddress;
      IERC20 daiInstance = IERC20(daiTokenAddress);
      daiInstance.safeApprove(address(UniswapRouter), amountTemp);
      UniswapRouter.swapExactTokensForTokens(amountTemp, 1, path, address(this), now + 120 );
      
   }
```    

## Oracle

Our Dapp is based on collecting data by sensors. Those data are processed by a trusted server which were installed by a  TechMaster we certified. This is why we don't used any **Oracle**.

## Randomness

Our Dapp doesn't need any random data. 

## Access Restriction

The functions which do the swap / remove liquidity / add liquidity are restricted to internal visibility, in order to be used by one function called from the front-end

```
    function addliquidityToDaiUsdt(uint _amountDai) internal returns (bool) {
        IUniswapV2Router02 UniswapRouter = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
        uint amountDaiTemp = _amountDai;
        address[] memory path = new address[](2);
        path[0] = daiTokenAddress; 
        path[1] = usdtTokenAddress;
        uint amountUsdtOut = UniswapRouter.getAmountsOut(amountDaiTemp, path)[1];
        IERC20 daiInstance = IERC20(daiTokenAddress);
        IERC20 usdtInstance = IERC20(usdtTokenAddress); 
        daiInstance.safeApprove(address(UniswapRouter), amountDaiTemp);
        usdtInstance.safeApprove(address(UniswapRouter), amountUsdtOut);
        UniswapRouter.addLiquidity(usdtTokenAddress, daiTokenAddress, amountUsdtOut, amountDaiTemp, 1000, 1000, address(this), now + 120);
        return true;
        
    }
```    
    function removeLiquidityfromDaiUsdt(uint _lpAmount) internal returns (bool) {
        IUniswapV2Router02 UniswapRouter = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
        IERC20 lpInstance = IERC20(lpAddress);
        uint amountLpTemp = _lpAmount.mul(1e18);
        lpInstance.safeApprove(address(UniswapRouter), amountLpTemp);
        UniswapRouter.removeLiquidity(usdtTokenAddress, daiTokenAddress, amountLpTemp, 1000, 1000, address(this), now + 120);
        return true;
    }
    
```   
```

## Checks Effects Interactions

Actions are already restricted by user and by address.

## Secure Ether Transfer

*Not treated by our Dapp*

## Pull over Push

*Not treated by our Dapp*

## Emergency Stop

*Our dapp do not provide any ETH deposit/transfer.* 

## Proxy Delegate

*Not used in our projet*

## Eternal Storage
*Not treated by our Dapp*

## String Equality Comparison

*Not treated by our Dapp*


## Tight Variable Packing


*Not treated by our Dapp*

## Memory Array Building

*Not treated by our Dapp*
