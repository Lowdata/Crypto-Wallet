// bitcoinStore.js
import { makeObservable, action, observable } from 'mobx';
import axios from 'axios';

class BitcoinStore {
  btcBalance = 0;

  constructor() {
    makeObservable(this, {
      btcBalance: observable,
      setBTCBalance: action,
      fetchBTCBalance: action,
    //   sendBTCTransaction: action,
    });
  }

  setBTCBalance(balance) {
    this.btcBalance = balance;
  }

 
  async fetchBTCBalance(address) {
    try {
      const apiUrl = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`;
      const response = await axios.get(apiUrl);
      const balanceSatoshis = response.data.final_balance;
      const balanceBTC = balanceSatoshis / 1e8;
      this.setBTCBalance(balanceBTC);
      return balanceBTC;
    } catch (error) {
      console.error('Error fetching BTC balance:', error);
      throw error;
    }
  }

//   async sendBTCTransaction(toAddress, amount, privateKey) {
    // try {
    //   const wallet = new ethers.Wallet(privateKey);
    //   const provider = new ethers.JsonRpcProvider('https://blockstream.info/testnet/api');

    //   const tx = await wallet.sendTransaction({
    //     to: toAddress,
    //     value: ethers.utils.parseUnits(amount, 'btc'),
    //     gasPrice: ethers.utils.parseUnits('20', 'gwei'), // Adjust gas price as needed
//       });

//       console.log('BTC Transaction:', tx);
//       return tx;
//     } catch (error) {
//       console.error('Error sending BTC transaction:', error);
//       throw error;
//     }
//   }
}

const bitcoinStore = new BitcoinStore();
export default bitcoinStore;
