import React from 'react';
import Button from '../../../../components/Button';
import { useStyles } from './styles.js';
import ItemDetail from '../../pages/ItemDetail';

export default function MyItem({ item }) {
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
            <img src={item.image_url} alt="" />
            <div>
              <p>{item.nameGame}</p>
              <p>{item.name}</p>
              <p>SL: {item.quantity}</p>
            </div>
          </div>
          <div className={classes.tokenId}>
            <span>tokenId: {item.token_of_eth}</span>
          </div>
          <div className={classes.player}>
            <img src={process.env.PUBLIC_URL + 'avatar.png'} alt="avatar" />
            <span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {item.owner}
            </span>
          </div>
          <div className={classes.trade}>
            <Button item={item} name="Sell" />
            <Button item={item} name="Auction" />
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
