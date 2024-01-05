import { makeObservable, action, observable, autorun } from 'mobx';
import "@ethersproject/shims"
import {ethers} from 'ethers'
import { getBitcoinPrice, getUSDTPrice } from '../api/api.service';
import { 
    importWalletFromTestnetPrivateKey,
} from './importBTC';


class NetworkStore {
  hasBTC = null;
  selectedNetwork = 'Polygon';
  savedAccounts = {
    BTC: '',
    Polygon: '',
  };
  privateKeys={
    BTC: '',
    Polygon: ''
  };
  usdtPrice = '';
  btcPrice = '';
  constructor() {
    makeObservable(this, {
      hasBTC: observable,
      selectedNetwork: observable, 
      usdtPrice: observable,
      usdtPrice: observable,
      setUsdtPrice: action,
      setBTCPrice: action,
      // fetchAndSetPrices:action,
      toggleBTC: action,
      saveAccount: action,
      setSelectedNetwork:action
    }, {
      autoBind: true
    });
    this.fetchUsdtPrice('Polygon');
    this.fetchUsdtPrice('BTC');
    
  }

  toggleBTC() {
    this.hasBTC = !this.hasBTC;
    this.selectedNetwork = this.hasBTC ? 'BTC' : 'Polygon';
    return this.hasBTC;
  }

  //LOGIN TO WALLET
  setBTCAddress(address) {
    this.btcAddress = address;
  }

  setPrivateKeys(network){
    if(network === 'Polygon'){
        return this.privateKeys.Polygon;
    }else{
        return this.privateKeys.BTC;
    }
  }

  setSelectedNetwork(network) {
    this.selectedNetwork = network;
    return this.selectedNetwork;
  }

  async saveAccount(privateKey) {
    if(!this.selectedNetwork){
        const errorMessage = 'PLease Choose A Netwok';
        alert(errorMessage);
        throw new Error(errorMessage)
    }
    try {
      if (this.selectedNetwork === 'BTC') {
        this.privateKeys.BTC = privateKey;
        const BTCaddress = importWalletFromTestnetPrivateKey(privateKey);
        this.savedAccounts.BTC = BTCaddress.address;
        console.log(BTCaddress.address);
        alert(`address ${this.savedAccounts.BTC}`)
      } else if (this.selectedNetwork === 'Polygon') {
        this.privateKeys.Polygon = privateKey;
        const wallet = new ethers.Wallet(privateKey);
        const polygonAddress = wallet.address;
        this.savedAccounts.Polygon = polygonAddress;
        alert(`address ${this.savedAccounts.Polygon}`)
      }

    } catch (error) {
      console.error('Error saving account:', error);
      alert("Error saving or fetching the account")
      throw error;
    }
  }

  //getting Prices
  setUsdtPrice = (price) => {
    this.usdtPrice = price;
  };

  setBTCPrice = (price) => {
    this.btcPrice = price;
  };
  async fetchUsdtPrice(network) {
    try {
      if (network === 'Polygon') {
        const usdtPrice = await getUSDTPrice(network);
        this.setUsdtPrice(usdtPrice);
        return usdtPrice;
      }else if(network === 'BTC'){
        const btcPrice = await getBitcoinPrice(network);
        this.setBTCPrice(btcPrice);
        return btcPrice;
      }
      // Handle other networks if needed
    } catch (error) {
      console.error('Error fetching price:', error);
      throw error;
    }
  }
}


const networkStore = new NetworkStore();

export default networkStore;