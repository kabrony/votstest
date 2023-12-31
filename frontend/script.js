
window.addEventListener('load', async () => {
    // Initialize web3
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      alert('Non-Ethereum browser detected. Consider installing MetaMask.');
      return;
    }
  
    // Load blockchain data
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const networkId = await web3.eth.net.getId();
    const networkData = YourSmartContract.networks[networkId]; // Replace YourSmartContract with your contract's name
  
    if (networkData) {
      const abi = YourSmartContract.abi; // Replace YourSmartContract with your contract's name
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
  
      // Listen for button click to mint NFT
      document.getElementById('mintButton').addEventListener('click', async () => {
        await contract.methods.mintNFT(account, "tokenURI_here").send({ from: account }); // Replace with your contract's minting method
        alert('NFT Minted Successfully');
      });
    } else {
      alert('Smart contract not deployed to the detected network.');
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const mintButton = document.getElementById("mintButton");

    mintButton.addEventListener("click", function() {
        alert("Minting NFT...");
        // Add your minting logic here
    });
});
