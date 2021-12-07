import { Snackbar } from '@mui/material';
import { useEthers } from '@usedapp/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createItemRequest,
  updateLinkImage,
} from '../features/Items/pages/MintItem/Slice';
import {
  marketItemContract,
  useMarketItemContractMethod,
} from '../smartcontracts';
import MuiAlert from '@mui/material/Alert';

export default function UnderLogin() {
  const [tokenId, setTokenId] = useState('');
  const { dataToCreate: dataUpload, createItemSuccess } = useSelector(
    (state) => state.mint
  );
  const dispatch = useDispatch();
  const { account } = useEthers();
  const [openSuccess, setOpenSuccess] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // MINT ITEM
  useEffect(() => {
    console.log('tokenId', tokenId);
    if (tokenId !== '') {
      console.log('data', dataUpload);
      if (setNewItemSmartContractState.status !== 'Null') {
        const newPayload = {
          ...dataUpload,
          owner: account,
          token_of_eth: tokenId,
        };
        console.log(newPayload);
        dispatch(createItemRequest(newPayload));
        dispatch(updateLinkImage(''));
      }
    }
  }, [tokenId]);

  /** etherjs */
  const { state: setNewItemSmartContractState, send: setNewItemSmartContract } =
    useMarketItemContractMethod('addNewItem');
  marketItemContract.once('TransferSingle', (operator, from, to, id, value) => {
    setTokenId(`${id}`);
  });

  // Action success
  useEffect(() => {
    if (createItemSuccess) {
      setOpenSuccess(true);
    }
  }, [createItemSuccess]);

  // Close notification
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  return (
    <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Create Item Successful!
      </Alert>
    </Snackbar>
  );
}
