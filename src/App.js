import React from "react";

function WalletUI({
  publicKey,
  balance,
  amount,
  recipient,
  loading,
  txHash,
  setAmount,
  setRecipient,
  connectWallet,
  checkBalance,
  sendPayment,
}) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🚀 Stellar Payment dApp</h1>

      {!publicKey ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p><strong>Connected Wallet:</strong> {publicKey}</p>

          <button onClick={checkBalance}>Check Balance</button>
          <p><strong>Balance:</strong> {balance} XLM</p>

          <hr style={{ margin: "20px" }} />

          <h3>Send XLM</h3>

          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={{ width: "300px", padding: "8px", margin: "5px" }}
          />

          <br />

          <input
            type="number"
            placeholder="Amount (XLM)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: "300px", padding: "8px", margin: "5px" }}
          />

          <br />

          <button onClick={sendPayment} disabled={loading}>
            {loading ? "Sending..." : "Send Payment"}
          </button>

          {txHash && (
            <div style={{ marginTop: "20px" }}>
              <p><strong>Transaction Hash:</strong></p>
              <p>{txHash}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WalletUI;
