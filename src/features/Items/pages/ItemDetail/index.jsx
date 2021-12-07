import React, { useEffect, memo } from 'react';
import { Dialog } from '@mui/material';
import Button from '../../../../components/Button/index.jsx';
import { useStyles } from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { getItemDetailRequest } from './Slice/index.js';

function ItemDetail({ item, open, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const anItem = useSelector((state) => state.itemDetail.dataItem);
  useEffect(() => {
    if (open) {
      const id = 1;
      dispatch(getItemDetailRequest(id));
    }
  }, [open, dispatch]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <div className={classes.container}>
        <div className={classes._1}>
          <img
            className={classes._11}
            src={process.env.PUBLIC_URL + 'bánh răng 2.png'}
            alt=""
          />
          <div className={classes._12}>
            <div className={classes.player}>
              <img src={process.env.PUBLIC_URL + 'avatar.png'} alt="avatar" />
              <span>chủ sở hữu</span>
            </div>
            <p>Contract Address: </p>
            <p>{item.contractAdd}</p>
            <p style={{ marginTop: '10px' }}>tokenId: </p>
            <p>{item.tokenId}</p>
          </div>
        </div>
        <div className={classes._2}>
          <div className={classes._2Container}>
            <div>
              <span>Tên game: </span>
              <span>{item.nameGame}</span>
            </div>
            <div>
              <span>Tên vật phẩm: </span>
              <span>{item.nameItem}</span>
            </div>
            <div>
              <span>Số lượng: </span>
              <span>{item.quantity}</span>
            </div>
            <div>
              <span>Giá bán: </span>
              <span>Wei {item.price}</span>
            </div>
            <div>
              <span>Giá bid: </span>
              <span>Wei {item.bid}</span>
            </div>
            <span>Mô tả</span>
            <div className={classes._2Desc}></div>
            <div className={classes.btn}>
              <div className={classes.btnL}>
                <Button name="Sell" />
                <Button name="Buy" />
              </div>
              <div className={classes.btnR}>
                <Button name="Bid" />
                <Button name="Auction" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default memo(ItemDetail);
