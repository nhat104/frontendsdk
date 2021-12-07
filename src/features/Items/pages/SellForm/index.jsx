import {
  Alert,
  Autocomplete,
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Grid,
  Snackbar,
  TextField,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellAnItemRequest } from './Slice';
import { useEthers } from '@usedapp/core';
import {
  useTransactionContractMethod,
  transactionContract,
} from '../../../../smartcontracts/transaction';
import { transactionAddress, marketItemAddress } from '../../../../contracts';
import {
  useMarketItemContractMethod,
  marketItemContract,
} from '../../../../smartcontracts/market';

SellForm.propTypes = {};

function SellForm(props) {
  const { open, handleClose, item } = props;
  const dispatch = useDispatch();
  const sellResult = useSelector((state) => state.sellAnItem.dataItem);
  const loadingSellItem = useSelector(
    (state) => state.sellAnItem.loadingSellAnItem
  );
  const { account } = useEthers();
  const [loadingSellSC, setLoadingSellSC] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const [tokenId, setTokenId] = useState('');
  const [approve, setApprove] = useState('');
  const [formData, setFormData] = useState('');
  const { state: sellItemSmartContractState, send: sellItemSmartContract } =
    useTransactionContractMethod('sellItem');
  const { send: approveSellItem } =
    useMarketItemContractMethod('setApprovalForAll');

  transactionContract.once('GetTransaction', (transID) => {
    console.log(`GetTransaction ${transID}`);
    setTokenId(`${transID}`);
  });
  marketItemContract.once('ApprovalForAll', (from, to, value) => {
    console.log(`${from} to ${to} value ${value}`);
    setApprove(`${value}`);
  });

  // Tạo options cho amount
  const optionAmount = [];
  for (let i = 1; i <= item.quantity; i++) {
    optionAmount.push(i.toString());
  }

  useEffect(() => {
    if (approve !== '' && formData !== '') {
      console.log('approveSellItem');
      console.log(formData.get('amount'));
      console.log(formData.get('price'));
      sellItemSmartContract(
        marketItemAddress,
        item.token_of_eth, //token id
        formData.get('price'), // price
        formData.get('amount'), // amount
        false
      );
    }
  }, [approve]);

  useEffect(() => {
    if (tokenId !== '' && formData !== '') {
      console.log('token');
      console.log(tokenId);
      console.log('formData', formData);
      // send to backend
      const body = {
        token_of_eth: item.token_of_eth,
        sub_category: item.sub_category,
        status: 1,
        seller: account,
        price: formData.get('price'), //data.get('price'),
        amount: formData.get('amount'),
        transaction_sc: tokenId,
      };
      console.log('body', body);
      dispatch(sellAnItemRequest(body));
      setLoadingSellSC(false);
      handleClose();
      if (!loadingSellItem) {
        setOpenSuccess(true);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    }
  }, [tokenId]);

  const handleSellClick = (event) => {
    event.preventDefault();
    setLoadingSellSC(true);
    if (open) {
      const data = new FormData(event.currentTarget);
      setFormData(data);
      approveSellItem(transactionAddress, true);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <Container
        component="form"
        maxWidth="sm"
        sx={{ height: '500px' }}
        onSubmit={handleSellClick}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          autoFocus
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />

        <Autocomplete
          disablePortal
          id="amount"
          name="amount"
          options={optionAmount}
          sx={{ mt: 1, mb: 1 }}
          renderInput={(params) => (
            <TextField {...params} name="amount" required label="Số lượng" />
          )}
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="sell"
            >
              Sell
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="cancel"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        // open={loadingSellItem || loadingSellSC}
        open={false}
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
            Selling item. Please wait in few seconds!
          </p>
        </>
      </Backdrop>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Sell Item Successful!
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default SellForm;
