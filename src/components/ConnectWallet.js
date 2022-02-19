// import { Connect } from '@stacks/connect-react';
import React, { useState } from 'react';
import { authenticate } from '../lib/auth';
import { LoginIcon } from '@heroicons/react/outline';
// import { showConnect } from '@stacks/connect';
// import { userSession } from '../lib/auth';
// import { useConnect } from "@stacks/connect-react";


function ConnectWallet() {
  // const [isLoginProcessStarted, setLoginProcessStarted] = useState(false)
	// const setUser = useStore(state => state.setUser)

  // const handleAuthentication = React.useCallback(() => {
	// 	setLoginProcessStarted(true)
	// 	showConnect({
	// 		appDetails: {
	// 			name: 'TRUBIT',
	// 			icon: `${window.location.origin}/logo.svg`,
	// 		},
	// 		redirectTo: '/',
	// 		onFinish: () => {
	// 			const userData = userSession.loadUserData()
	// 			setLoginProcessStarted(false)
	// 			// setUser(userData)
	// 		},
	// 		userSession,
	// 	})
	// }, [])

  // const { doOpenAuth } = useConnect();

  return (
    <div>
      <button
        className="btn btn-primary"
        // onClick={handleAuthentication}
				// disabled={isLoginProcessStarted}
        // onClick={() => doOpenAuth()}
        onClick={() => authenticate()}
      >
        <LoginIcon className="h-5 w-5 mr-2"/>
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
