import React, { useState, useEffect } from 'react';
import ItemSell from '../../components/ItemSell';
import { useStyles } from './styles.js';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getSellItemRequest } from './Slice';
import { id } from '../../../../constants/global';
import { buyAnItemRequest } from '../../components/ItemSell/Slice';
import {
  useTransactionContractMethod,
  transactionContract,
} from '../../../../smartcontracts/transaction';
import { transactionAddress, marketItemAddress } from '../../../../contracts';
import { useEthers } from '@usedapp/core';
export default function SellPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.sellItem.dataItem);
  const { account } = useEthers();
  const [buySuccess, setBuySuccess] = useState(0);
  const [loadingBuySC, setLoadingBuySC] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const loadingBuyItem = useSelector(
    (state) => state.buyAnItem.loadingBuyAnItem
  );
  const errorBuyItem = useSelector((state) => state.buyAnItem.errorBuyAnItem);

  transactionContract.once('BuyTransaction', (transID) => {
    console.log(`BuyTransaction ${transID}`);
    setBuySuccess(`${transID}`);
  });
  //const result = GetAllSellItem(listItem);
  //const temp = useTransactionReturnValue("getBalance", [])
  //const { state: sellItemSmartContractState, send: sellItemSmartContract } =
  //useTransactionContractMethod('getBalance');

  useEffect(() => {
    if (buySuccess !== 0) {
      console.log('buySuccess');
      console.log(buySuccess);
      // call buy BE
      const body = {
        buyer: account,
        transaction_sc: buySuccess,
      };
      dispatch(buyAnItemRequest(body));
      setLoadingBuySC(false);
      if (!loadingBuyItem && !errorBuyItem) {
        setOpenSuccess(true);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    }
  }, [buySuccess]);
  console.log('loadingBuySC', loadingBuySC);

  useEffect(() => {
    dispatch(getSellItemRequest(id));
  }, [dispatch]);
  if (listItem.length > 0) {
    console.log(listItem);
    //console.log(result);
    //console.log(temp);
    //sellItemSmartContract();
    //console.log(sellItemSmartContractState);
  }
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {listItem.map((item) => (
          <ItemSell
            item={item}
            key={item.id}
            loadingBuySC={loadingBuySC}
            setLoadingBuySC={setLoadingBuySC}
            openSuccess={openSuccess}
            setOpenSuccess={setOpenSuccess}
          />
        ))}
      </div>
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        sx={{ float: 'right', marginTop: '30px' }}
      />
    </div>
  );
}
