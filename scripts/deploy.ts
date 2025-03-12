import { ethers } from 'hardhat';

declare global {
    interface Window {
      ethereum?: any; // Allow TypeScript to recognize window.ethereum
    }
}


// refactor the deploy script later 
async function NFTMarketPlaceDeployment(){
    if (!window.ethereum) {
        console.error("MetaMask is not installed. Please install MetaMask.");
        return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const signers = await provider.getSigner();
    console.log(`Deploying contracts with the account: ${await signers.getAddress()}`);

    const NftMarketPlaceContract = await ethers.getContractFactory("NftMarketplace",signers);
    const Nft1Contract = await ethers.getContractFactory("BasicNft",signers);
    const Nft2Contract = await ethers.getContractFactory("BasicNftTwo",signers);
    
    const nftMarketPlace = (await NftMarketPlaceContract.deploy())
    await nftMarketPlace.waitForDeployment();
    console.log("NftMarketPlace deployed at:", await nftMarketPlace.getAddress());

    const nft1Contract = (await Nft1Contract.deploy())
    await nft1Contract.waitForDeployment();
    console.log("NftMarketPlace deployed at:", await nft1Contract.getAddress());

    const nft2Contract = (await Nft2Contract.deploy())
    await nft2Contract.waitForDeployment();
    console.log("NftMarketPlace deployed at:", await nft2Contract.getAddress()); 
}


NFTMarketPlaceDeployment().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

export default NFTMarketPlaceDeployment;