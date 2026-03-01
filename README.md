# Stellar Simple Payment dApp

A decentralized payment application built using React and the Stellar Test Network.  
This project demonstrates wallet integration, balance retrieval, and XLM transaction execution using Freighter Wallet.

🌐 **Live Demo:** https://steallarappweb.netlify.app/

## 📸 Application Preview
<img width="1880" height="975" alt="image" src="https://github.com/user-attachments/assets/d8b82f4e-c65f-4850-b294-55a6d2f0282a" />
<img width="1571" height="1081" alt="image" src="https://github.com/user-attachments/assets/665366c1-18b7-40b0-bbca-814c5fc9aeb6" />

---

##  Project Overview

This application connects to the Freighter browser wallet, retrieves the user's Stellar public address, fetches account balance from the Stellar Testnet, and allows sending a test XLM transaction.

The project demonstrates practical blockchain interaction using the Stellar SDK and secure wallet-based transaction signing.

---

##  Features

- Connect to Freighter Wallet
- Retrieve public wallet address
- Fetch XLM balance from Stellar Testnet
- Send 1 XLM transaction
- Secure transaction signing (no private key exposure)
- Clean React component structure

---

##  Technologies Used

- React.js
- @stellar/freighter-api
- stellar-sdk
- Stellar Test Network
- Freighter Wallet (Browser Extension)

---

##  Project Structure

src/
├── App.js
└── components/
    └── WalletUI.js

---

##  Wallet Integration

This project integrates with Freighter Wallet to:

- Request wallet access
- Retrieve the public address
- Sign transactions securely

Private keys are never stored or exposed in the application.

---

##  Network Configuration

- Network: Stellar Testnet
- Horizon Server: https://horizon-testnet.stellar.org

Make sure your Freighter Wallet is set to **Test Network** before running the application.

---

##  Installation & Setup

### 1. Clone the Repository

git clone <your-repository-url>
cd your-project-folder

### 2. Install Dependencies

npm install

### 3. Install Required Packages

npm install @stellar/freighter-api
npm install stellar-sdk

### 4. Run the Application

npm start

The application will run at:

http://localhost:3000

---

## How to Use

1. Open the application in your browser
2. Click "Connect Wallet"
3. Approve the connection in Freighter
4. Click "Check Balance"
5. Click "Send 1 XLM"
6. Approve the transaction in Freighter

After confirmation, the balance updates automatically.

---

## 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

- Web3 wallet authentication
- Building Stellar blockchain transactions
- Signing transactions using Freighter API
- Submitting transactions to Horizon Server
- React component-based architecture
- Secure blockchain interaction without exposing private keys

---

## 👨‍💻 Author

Dhanshree Atre 

 
