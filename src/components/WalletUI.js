import React from "react";

function WalletUI({
  publicKey,
  balance,
  loading,
  connectWallet,
  checkBalance,
  sendPayment,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Stellar Payment App</h2>

        {!publicKey ? (
          <button style={styles.primaryBtn} onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <>
            <div style={styles.infoBox}>
              <p style={styles.label}>Connected Address</p>
              <p style={styles.address}>{publicKey}</p>
            </div>

            <button style={styles.secondaryBtn} onClick={checkBalance}>
              Check Balance
            </button>

            {balance && (
              <div style={styles.balanceBox}>
                <p style={styles.balanceText}>{balance} XLM</p>
              </div>
            )}

            <button
              style={styles.primaryBtn}
              onClick={sendPayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Send 1 XLM"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "420px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  infoBox: {
    background: "#f4f6f8",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  label: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "5px",
  },
  address: {
    fontSize: "14px",
    wordBreak: "break-all",
  },
  balanceBox: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  balanceText: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  primaryBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background: "#2a5298",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  secondaryBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#e2e8f0",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default WalletUI;import React from "react";

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
