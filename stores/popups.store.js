import { makeObservable, observable, action } from "mobx";

class PopupStore {
  isTransactionPopupVisible = false;

  constructor() {
    makeObservable(this, {
      isTransactionPopupVisible: observable,
      openTransactionPopup: action,
      closeTransactionPopup: action,
    },{
        autoBind:true
    });
  }

  openTransactionPopup() {
    this.isTransactionPopupVisible = true;
  }

  closeTransactionPopup() {
    this.isTransactionPopupVisible = false;
    
  }
}

const popupStore = new PopupStore();

export default popupStore;