import React, { useState } from "react";
import {
  requestAccess,
  getAddress,
  signTransaction,
} from "@stellar/freighter-api";
import * as StellarSdk from "stellar-sdk";
import WalletUI from "./components/WalletUI";

function App() {
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  const server = new StellarSdk.Horizon.Server(
    "https://horizon-testnet.stellar.org"
  );

  // Connect Wallet
  const connectWallet = async () => {
    try {
      await requestAccess();
      const addressObj = await getAddress();
      setPublicKey(addressObj.address);
      alert("Wallet Connected!");
    } catch (error) {
      console.error(error);
      alert("Wallet connection failed.");
    }
  };

  // Check Balance
  const checkBalance = async () => {
    try {
      const account = await server.loadAccount(publicKey);
      const xlmBalance = account.balances.find(
        (b) => b.asset_type === "native"
      );
      setBalance(xlmBalance.balance);
    } catch (error) {
      console.error(error);
      alert("Error fetching balance.");
    }
  };

  // Send Payment
  const sendPayment = async () => {
    if (!recipient) {
      alert("Enter recipient address.");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Enter valid amount.");
      return;
    }

    try {
      setLoading(true);
      setTxHash("");

      const sourceAccount = await server.loadAccount(publicKey);

      const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.TESTNET,
      })
        .addOperation(
          StellarSdk.Operation.payment({
            destination: recipient,
            asset: StellarSdk.Asset.native(),
            amount: amount,
          })
        )
        .setTimeout(30)
        .build();

      const signed = await signTransaction(transaction.toXDR(), {
        networkPassphrase: StellarSdk.Networks.TESTNET,
      });

      const tx = StellarSdk.TransactionBuilder.fromXDR(
        signed.signedTxXdr,
        StellarSdk.Networks.TESTNET
      );

      const result = await server.submitTransaction(tx);

      setTxHash(result.hash);
      alert("Payment Successful!");
      checkBalance();
      setAmount("");
      setRecipient("");

    } catch (error) {
      console.error(error);
      alert("Transaction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WalletUI
      publicKey={publicKey}
      balance={balance}
      amount={amount}
      recipient={recipient}
      loading={loading}
      txHash={txHash}
      setAmount={setAmount}
      setRecipient={setRecipient}
      connectWallet={connectWallet}
      checkBalance={checkBalance}
      sendPayment={sendPayment}
    />
  );
}

export default App;
