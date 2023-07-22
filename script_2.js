import {ethers} from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/68d5e602045040fcbb3ecc41d59ee720');
const ABI = ["function setValue(uint256 _number) public",
             "function getValue() public view returns(uint256)"];

const privatekey = 'd46347fe69bc0183ff95660a8ed8cb0d01401c0cb5501834023f1961af1164b2';
const address = "0x478fe1cee0101d215f78cc24578136544300c523";
const wallet = new ethers.Wallet(privatekey,provider);

const main = async() => {
   const writeContract = new ethers.Contract(address,ABI,wallet);

   const tx = await writeContract.setValue(100);
   console.log(`Trasnsaction Hash : ${tx.hash}`);
   const receipt = await tx.wait();
   console.log("Transaction Mined!");
   console.log(`Gas Used : ${receipt.gasUsed}`);
   console.log(`Transaction Status : ${receipt.status}`);
   console.log(`Block : ${receipt.blockNumber}`);

   const value = await writeContract.getValue();
   console.log(`The value that has been set --> ${value}`);
}

main();
