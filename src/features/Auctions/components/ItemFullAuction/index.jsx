import React from 'react';
import ComboItem from '../ComboItem';
import Button from '../../../../components/Button';
import { useStyles } from './styles.js';

export default function ItemFullAuction({ items, info }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>{info.nameGame}</p>
      <div className={classes.container}>
        <div className={classes.comboItem}>
          {items.map((item) => (
            <ComboItem key={items.id} item={item} />
          ))}
        </div>
        <div className={classes.player}>
          <img src={process.env.PUBLIC_URL + 'avatar.png'} alt="avatar" />
          <span>chủ sở hữu</span>
        </div>
        <div className={classes.trade}>
          <span>Wei 600</span>
          <Button name="Bid" />
        </div>
      </div>
    </div>
  );
}
