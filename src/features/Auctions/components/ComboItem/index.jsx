import React from 'react';
import { useStyles } from './styles.js';
import ItemDetail from '../../../Items/pages/ItemDetail';

export default function ComboItem({ item }) {
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
              <p>{item.nameItem}</p>
              <p style={{ marginTop: '14px' }}>SL: {item.quantity}</p>
            </div>
          </div>
          <div className={classes.tokenId}>
            <span>#tokenId</span>
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
