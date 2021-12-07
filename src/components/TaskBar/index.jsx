import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles.js';

export default function TaskBar() {
  const classes = useStyles();
  const taskbarId = JSON.parse(localStorage.getItem('taskbarId'));
  const [isActive, setIsActive] = useState(taskbarId || 1);

  function onTaskBarClick(id) {
    setIsActive(id);
    localStorage.setItem('taskbarId', id);
  }

  return (
    <div className={classes.root}>
      {taskBar.map((item) => (
        <div key={item.id}>
          <Link
            to={item.link}
            className={classes.link}
            onClick={() => onTaskBarClick(item.id)}
            style={{
              backgroundColor: isActive === item.id ? '#114ce6' : '',
              color: isActive === item.id ? '#fff' : '',
            }}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

const taskBar = [
  // {
  //   id: 1,
  //   name: 'List Auction',
  //   link: '/ListAuction',
  // },
  {
    id: 2,
    name: 'List Sell Item',
    link: '/ListSellItem',
  },
  {
    id: 3,
    name: 'List My Item',
    link: '/ListMyItem',
  },
  // {
  //   id: 4,
  //   name: 'List FullAuction',
  //   link: '/ListFullAuction',
  // },
  {
    id: 5,
    name: 'Create Item',
    link: '/CreateItem',
  },
];
