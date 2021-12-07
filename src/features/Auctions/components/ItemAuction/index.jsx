import React from 'react';
import Button from '../../../../components/Button';
import { useStyles } from './styles.js';
import ItemDetail from '../../../Items/pages/ItemDetail';

export default function ItemAuction({ item }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.info} onClick={handleClickOpen}>
            <img src={process.env.PUBLIC_URL + 'bánh răng.png'} alt="" />
            <div>
              <p>{item.nameGame}</p>
              <p>{item.nameItem}</p>
              <p>SL: {item.quantity}</p>
            </div>
          </div>
          <div className={classes.tokenId}>
            <span>#tokenId</span>
            <span>Wei 6000</span>
          </div>
          <div className={classes.player}>
            <img src={process.env.PUBLIC_URL + 'avatar.png'} alt="avatar" />
            <span>chủ sở hữu</span>
          </div>
          <div className={classes.trade}>
            <span>max bid</span>
            <Button name="Bid" />
          </div>
        </div>
      </div>
      <ItemDetail
        item={item}
        key={item.id}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}
