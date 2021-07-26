import CryptoJS from 'crypto-js';

export class UserPassword {
  verify(HASH: string, input: string) {
    const plain = CryptoJS.AES.decrypt(HASH, process.env.privateKey).toString(CryptoJS.enc.Utf8);

    return plain === input;
  }

  generate(plain: string) {
    const SHA256 = CryptoJS.SHA256(plain);

    return SHA256;
  }
}
