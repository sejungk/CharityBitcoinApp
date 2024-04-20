import React from 'react';
import './LinkWalletCard.css';
import SmallButton from '../../Button/SmallButton'


const LinkWalletCard = () => {
  return (
    <div className="link-wallet-card-container">
      <div className="wallet-card-wrapper">
      <p className="wallet-card-header">Connect your MetaMask Wallet to start donating</p>
        <input
          type="text"
          placeholder="Enter your MetaMask ID"
          className="wallet-input"
        />
        <SmallButton onClick={() => {}} text="Link Wallet" />
      </div>
    </div>
  );
};

export default LinkWalletCard;
