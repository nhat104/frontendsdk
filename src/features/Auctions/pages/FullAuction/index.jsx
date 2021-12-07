import Pagination from '@mui/material/Pagination';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { id } from '../../../../constants/global';
import ItemFullAuction from '../../components/ItemFullAuction';
import { getFullAuctionRequest } from './Slice';
import { useStyles } from './styles.js';

export default function FullAuctionItemPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.fullAuction.dataItem);
  useEffect(() => {
    dispatch(getFullAuctionRequest(id));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {listItem.map((item) => (
          <ItemFullAuction items={item.items} key={item.id} info={item} />
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
