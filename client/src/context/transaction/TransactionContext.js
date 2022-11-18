import { createContext, useState } from "react";
import { ethers } from 'ethers'

const TransactionContext = createContext({})

export const TransactionProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.log('Please Install Metamask')
    } else {
      console.log('Metamask Available')
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const connectedAddress = await signer.getAddress();
      setWalletAddress(connectedAddress)
    }
  }

  return (
    <TransactionContext.Provider value={{ walletAddress, connectWallet }}>
      {children}
    </TransactionContext.Provider >
  )
}


export default TransactionContext;