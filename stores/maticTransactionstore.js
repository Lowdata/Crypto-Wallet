import {ethers} from 'ethers'
import "@ethersproject/shims"
import { makeObservable, action, observable, autorun } from 'mobx';
import networkStore from './network.store';


class MaticTransaction{
    maticBalance = 0;
    constructor(){
        makeObservable(
            this,{
                maticBalance: observable,
                setMaticBalance: action,
                sendMaticTransaction:action,
                handlePolygonBalances: action,
            },{
                autoBind: true,
            });
    }
    setMaticBalance(balance) {
        this.maticBalance = balance;
      }

      async sendMaticTransaction(toAddress, amount){
        try{
            if(networkStore.selectedNetwork === 'Polygon'){
                const provider = new ethers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/xVQGGcSOaQt5ASujUxcAk4PwvvmBsfDZ');

                const signer = new ethers.Wallet('0fe39f7502f35506adcdc324823d5be54caffe216288d2b1ef875bf34eb27bfc',provider);

                const tx = await signer.sendTransaction({
                    to: '',
                    value: ethers.parseUnits(``,'ether')
                })

            }
        }catch(error){
            alert('Issue Faced while processing the Payment!')
        }
      }

      async handlePolygonBalances(privateKey){
        try{
            const wallet = new ethers.Wallet(privateKey);
        const provider = new ethers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
        const balance = await provider.getBalance(wallet.address);
        const balanceMatic = ethers.formatUnits(balance, 'ether');
        return balanceMatic;
    }catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
      }
    }
}


const maticStore = new MaticTransaction();
export default maticStore;
