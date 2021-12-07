import React, { useState, useEffect } from 'react';
import Button from '../../../../components/Button';
import { useStyles } from './styles.js';
import ItemDetail from '../../pages/ItemDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useEthers } from '@usedapp/core';
import { buyAnItemRequest } from './Slice';
import {
  Box,
  Snackbar,
  Alert,
  Backdrop,
  CircularProgress,
} from '@mui/material';
// import { Box } from '@mui/system';
import {
  useTransactionContractMethod,
  transactionContract,
} from '../../../../smartcontracts/transaction';
import { transactionAddress, marketItemAddress } from '../../../../contracts';
import { ethers } from 'ethers';

export default function ItemSell({
  item,
  loadingBuySC,
  setLoadingBuySC,
  openSuccess,
  setOpenSuccess,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const buyResult = useSelector((state) => state.buyAnItem.dataItem);
  const loadingBuyItem = useSelector(
    (state) => state.buyAnItem.loadingBuyAnItem
  );
  const errorBuyItem = useSelector((state) => state.buyAnItem.errorBuyAnItem);
  const { account } = useEthers();

  const [open, setOpen] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);

  /** smart contract */

  const { state: buyItemSmartContractState, send: buyItemSmartContract } =
    useTransactionContractMethod('buyItem');
  /*transactionContract.once('BuyTransaction', (transID) => {
    console.log(`BuyTransaction ${transID}`);
    setBuySuccess(`${transID}`);
  });*/

  /*** */
  /*useEffect(() => {
    if (buySuccess != 0) {
      console.log('buySuccess');
      console.log(buySuccess);
      // call buy BE
      const body = {
        item_id: item.id,
        buyer: account,
        transaction_sc: buySuccess,
      };
      dispatch(buyAnItemRequest(body));
      setLoadingBuySC(false);
      if (!loadingBuyItem && !errorBuyItem) {
        setOpenSuccess(true);
      }
    }
  }, [buySuccess]);*/

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenWarning(false);
    setOpenSuccess(false);
  };

  function handleBuyItem(event) {
    event.preventDefault();
    if (item.seller === account) {
      setOpenWarning(true);
    } else {
      setLoadingBuySC(true);
      console.log('buy*******');
      console.log(item.transaction_id);
      console.log(item.amount);
      // buy smart contract
      buyItemSmartContract(
        marketItemAddress,
        item.transaction_id, //transaction_sc
        item.amount, // amount
        '0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001b434f444c55434b4d41524b4554504c4143455f315f355f315f315f00000000000000000000000000000000000000000000000000000000000000000000000007436f646c75636b00000000000000000000000000000000000000000000000000', // security_code
        { value: ethers.utils.parseEther(`${item.price * 0.001}`) }
      );
    }
  }

  return (
    <>
      <div className={classes.root}>
        <Box
          className={classes.container}
          component="form"
          onSubmit={handleBuyItem}
        >
          <div className={classes.info} onClick={handleClickOpen}>
            <img src={item.image_url} alt="" />
            <div>
              <p>{item.name}</p>
              <p>{item.nameItem}</p>
              <p>SL: {item.amount}</p>
            </div>
          </div>
          <div className={classes.tokenId}>
            <span>TokenID {item.token_of_eth}</span>
            <span>Wei {item.price}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={classes.player}>
              <img src={process.env.PUBLIC_URL + 'avatar.png'} alt="avatar" />
              <span
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  width: '100px',
                }}
              >
                {item.seller}
              </span>
            </div>
            <Button name="Buy" type="submit" />
          </div>
        </Box>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingBuyItem || loadingBuySC}
      >
        <>
          <CircularProgress size={50} value={0} />
          <p
            style={{
              fontSize: '30px',
              fontWeight: 500,
              marginLeft: '20px',
            }}
          >
            Buying item. Please wait in few seconds!
          </p>
        </>
      </Backdrop>
      <Snackbar
        open={openWarning}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Can't buy. You owned this product.
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess && !loadingBuyItem}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Buy Item Successful!
        </Alert>
      </Snackbar>
      <ItemDetail
        item={item}
        key={item.id}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}
