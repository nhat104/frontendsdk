import React, { useState } from 'react';
import { useStyles } from './styles.js';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

export default function Header() {
  const classes = useStyles();
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  //const [isLogin, setIsLogin] = useState(true);

  function onLoginClick() {
    if (etherBalance) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  }

  return (
    <div className={classes.root}>
      <span className={classes.playerId}>{account}</span>
      <div className={classes.coin}>
        <span>0 CLCoin</span>
      </div>
      <div className={classes.money}>
        <div className={classes.dollar}>
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </div>
        <span className={classes.net}>Ropsten test</span>
      </div>
      <span className={classes.login} onClick={onLoginClick}>
        {
          //isLogin ? 'Logout' : 'Login'}
          etherBalance ? 'Logout' : 'Login'
        }
      </span>
    </div>
  );
}
