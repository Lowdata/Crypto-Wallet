import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class BtcPriceStore {
  btcPrice = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBtcPrice = async () => {
    this.loading = true;

    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      this.btcPrice = response.data.bitcoin.usd;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  };

  startAutoRefresh = () => {
    // Set an interval for periodic updates
    setInterval(() => {
      this.fetchBtcPrice();
    }, 60000); // Update every 1 minute (adjust as needed)
  };
}

const btcPriceStore = new BtcPriceStore();
export default btcPriceStore;