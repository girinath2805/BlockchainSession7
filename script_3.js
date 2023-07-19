import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.min.js";

const provider = new ethers.providers.JsonRpcProvider('YourAPIkeylink');


const privateKey = '';
const address = '';

const wallet = new ethers.Wallet(privateKey,provider);
const transfer = {
    to : address,
    value: ethers.utils.parseEther("0.01")
}

const main = async() => {
    const tx = await wallet.sendTransaction(transfer);

    const receipt = await tx.wait();

    console.log(`Transaction hash : ${receipt.transactionHash}`);
    console.log(`Block number : ${receipt.blockNumber}`);
    console.log(`Gas fee : ${receipt.gasUsed.toString()}`);
    console.log(`Status : ${receipt.status}`);
    console.log('Logs:', receipt.logs);

}

main();
