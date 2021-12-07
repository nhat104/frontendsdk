import React, { useEffect } from 'react';
import ItemAuction from '../../components/ItemAuction';
import { useStyles } from './styles.js';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctionRequest } from './Slice';
import { id } from '../../../../constants/global';

export default function AuctionPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.auction.dataItem);
  useEffect(() => {
    dispatch(getAuctionRequest(id));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {listItem.map((item) => (
          <ItemAuction item={item} key={item.id} />
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
