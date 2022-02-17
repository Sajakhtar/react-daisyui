// import { Connect } from '@stacks/connect-react';
import React from 'react';
// import { authenticate } from '../lib/auth';
import { LoginIcon } from '@heroicons/react/outline';

function ConnectWallet() {
  return (
    <div>
      <button className="btn btn-primary">
        <LoginIcon className="h-5 w-5 mr-2"/>
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
