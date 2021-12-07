import React from 'react';
import { Dialog } from '@mui/material';
import {
  Button,
  TextField,
  Container,
  Autocomplete,
  Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auctionAnItemRequest } from './Slice';

AuctionForm.propTypes = {};

function AuctionForm(props) {
  const { open, handleClose, item } = props;
  const dispatch = useDispatch();
  const auctionResult = useSelector((state) => state.auctionAnItem.dataItem);

  function handleAuctionClick() {
    if (open) {
      const id = {
        auction_id: item.id,
      };
      dispatch(auctionAnItemRequest(id));
    }
    handleClose();
  }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <Container component="main" maxWidth="xs">
        <TextField
          margin="normal"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          autoFocus
        />
        <Autocomplete
          disablePortal
          id="priceType"
          options={['Ether', 'CLCoin']}
          sx={{ mt: 1, mb: 1 }}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="time"
          label="Time"
          name="time"
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="auction"
              onClick={handleAuctionClick}
            >
              Auction
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
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
    </Dialog>
  );
}

export default AuctionForm;
