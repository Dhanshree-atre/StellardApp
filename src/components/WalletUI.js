import React from "react";

function WalletUI({
  publicKey,
  balance,
  amount,
  loading,
  txHash,
  setAmount,
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
          <p><strong>Wallet:</strong> {publicKey}</p>

          <button onClick={checkBalance}>Check Balance</button>
          <p><strong>Balance:</strong> {balance} XLM</p>

          <hr style={{ margin: "20px" }} />

          <h3>Send XLM (Self Transfer)</h3>

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: "250px", padding: "8px", margin: "10px" }}
          />

          <br />

          <button onClick={sendPayment} disabled={loading}>
            {loading ? "Sending..." : "Send XLM"}
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
