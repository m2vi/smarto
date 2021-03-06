import CryptoJS from 'crypto-js';

export class AES {
  #PRIVATE_KEY: any;
  constructor() {
    this.#PRIVATE_KEY = process.env.AES_SECRET;
  }

  encrypt(text: string) {
    return CryptoJS.AES.encrypt(text, this.#PRIVATE_KEY).toString();
  }

  decrypt(ciphertext: string) {
    return CryptoJS.AES.decrypt(ciphertext, this.#PRIVATE_KEY).toString(CryptoJS.enc.Utf8);
  }
}

export default new AES();
