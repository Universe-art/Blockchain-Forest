var web3 = new Web3(Web3.givenProvider);

var contractInstance;

let amountToDeposit;


let defiAddress  = "0xB37CDA4Dc21B7d6D69553A704Ee74f8df3836F0E";
let daiAddress = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";

////////////////////////////////////////////////////////////////////////



$(document).ready(function() {
    //alert("DOCUMENT READY DU MAIN.JS!!");
    $("#stake_button_1").prop('disabled', true);
    $("#connect_button").click(connectAndDisplay);
    $("#approve_button_1").click(approveBeforeStaking);
    $("#stake_button_1").click(launchToDefi);
    
});


function connectAndDisplay(){
   window.ethereum.enable().then(function(accounts){
        contractInstance = new web3.eth.Contract(defiForestAbi, defiAddress, {from: accounts[0]});
          //alert("OK DISPLAY !!");
          myAddress = contractInstance.currentProvider.selectedAddress;
          //$("#Wallet_user_output").text(myAddress);
          $("#connectedAddress").text("My address : " + myAddress);
          //displayInfo(res);
  });
};




function approveBeforeStaking(){
    //alert("Fonction APPROVE !!!");
    amountToDeposit = $("#stake_input").val();

    amountToDeposit = new BigNumber(amountToDeposit).times(10**18).toFixed(0);
 

    daiInstance = new window.web3.eth.Contract(daiAbi, daiAddress);

      daiInstance.methods.approve(defiAddress, amountToDeposit).send({from: myAddress})
      .on('confirmation', function(confirmationNumber, receipt){

          $("#stake_button_1").prop('disabled', false);
          $("#approve_button_1").html("Approved !");
          $("#approve_button_1").prop('disabled', true);
          daiInstance.methods.allowance(myAddress, defiAddress).call()
            .then(console.log);
      })

};


async function launchToDefi() {
  await stakeLP1()
  .then(await swapAndSend()
   //     .then(await addLiquidity())
  )
}

async function stakeLP1(){
  //alert("Fonction STAKE !!");
  //contractUniLP1.methods.transferFrom(myAddress, adressVault, amountToStake1).send({from: myAddress,gas: 200000})

  daiInstance.methods.transfer(defiAddress, amountToDeposit).send({from: myAddress,gas: 200000})
    //.on('receipt', function(receipt){
    //  alert(receipt);
    //})
    .on('confirmation', function(confirmationNumber, receipt){
        //console.log("confirmation number" + confirmationNumber);
        //console.log("TRANSFERT DONE :-)");

    })
    .on('receipt', function(receipt){
      console.log(receipt[0]);
      console.log("RECEIPT DONE :-)");
      //contractInstance.methods.stakeVegeEthTokens(myAddress,amountToStake1);
      console.log("PUSH ARRAYS EN COURS");
    })
};



async function swapAndSend(){
    defiInstance = new window.web3.eth.Contract(defiForestAbi, defiAddress);

    defiInstance.methods.sendToDefi(amountToDeposit).send({from: myAddress,gas: 500000})
      .on('confirmation', function(confirmationNumber, receipt){
        //console.log("confirmation number" + confirmationNumber);
        //console.log("TRANSFERT DONE :-)");
    })

}





