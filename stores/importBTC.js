// walletUtils.js
import ecc from '@bitcoinerlab/secp256k1';
import { ECPairFactory } from 'ecpair';
import * as bitcoin from 'bitcoinjs-lib';
export function importWalletFromTestnetPrivateKey(privateKeyHex) {
  const privateKeyBuffer = Buffer.from(privateKeyHex, 'hex');

  if (privateKeyBuffer.length !== 32) {
    throw new Error('Invalid private key length. Must be 32 bytes.');
  }

  try {
    // Use the testnet network configuration
    const network = bitcoin.networks.testnet;
    const keyPair = ECPairFactory(ecc).fromPrivateKey(privateKeyBuffer, { network });

    // Derive the public key and address
    const publicKey = keyPair.publicKey.toString('hex');
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network });

    return {
      privateKey: privateKeyHex,
      publicKey,
      address,
    };
  } catch (error) {
    throw new Error('Error creating ECPair from private key: ' + error.message);
  }
}
