import {ethers} from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const address = "0x13116fbddB92A853C86Bc9c0E6811e72629Ad570";
const privateKey = 'd46347fe69bc0183ff95660a8ed8cb0d01401c0cb5501834023f1961af1164b2'

const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/68d5e602045040fcbb3ecc41d59ee720');

const main = async() => {
    const wallet = new ethers.Wallet(privateKey,provider);
    const tx = await wallet.sendTransaction({
        to: address,
        value: ethers.parseEther('0.01')
    })

    const receipt = await tx.wait();
    console.log(`Transaction hash : ${tx.hash}`);
    console.log(`Block number : ${receipt.blockNumber}`);
    console.log(`Gas fee : ${receipt.gasUsed.toString()}`);
    console.log(`Status : ${receipt.status}`);
    console.log('Logs:', receipt.logs);

}
main();
