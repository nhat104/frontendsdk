import Pagination from '@mui/material/Pagination';
import { useEthers } from '@usedapp/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyItem from '../../components/MyItem';
import { getMyItemRequest } from './Slice';
import { useStyles } from './styles.js';

export default function MyItemPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.myItem.dataItem);

  const { account } = useEthers();

  useEffect(() => {
    if (account !== '') {
      const owner = {
        owner: account,
      };
      dispatch(getMyItemRequest(owner));
    }
  }, [dispatch, account]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {listItem.map((item) => (
          <MyItem item={item} key={item.id} />
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
