import {ethers} from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const address = "0x13116fbddB92A853C86Bc9c0E6811e72629Ad570";

const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/68d5e602045040fcbb3ecc41d59ee720');

const main = async() => {
    const balance = await provider.getBalance(address); 
    console.log('balance --> ',ethers.formatEther(balance));
}
main();
