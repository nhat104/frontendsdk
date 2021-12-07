import React from 'react';
import SellForm from '../../features/Items/pages/SellForm';
import AuctionForm from '../../features/Auctions/pages/AuctionForm';

export default function Button({ item, name }) {
  const [openSell, setOpenSell] = React.useState(false);
  const [openAuction, setOpenAuction] = React.useState(false);

  const handleClose = () => {
    setOpenSell(false);
    setOpenAuction(false);
  };

  function handleClickButton() {
    if (name === 'Sell') {
      setOpenSell(true); // Open sell form
    } else if (name === 'Auction') {
      setOpenAuction(true); // Open auction form
    }
    // else if (name === 'Buy') {
    //   const body = {
    //     item_id: item.id,
    //     buyer: account,
    //   };
    //   console.log(body);
    //   dispatch(buyAnItemRequest(body)); // request buy item
    // }
  }

  return (
    <>
      <button
        onClick={handleClickButton}
        style={{
          width: '80px',
          height: '36px',
          border: '1px solid #999',
          fontSize: '18px',
          fontWeight: 500,
          borderRadius: 10,
          backgroundColor: '#289df9',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        {name}
      </button>
      {openSell && (
        <SellForm open={openSell} item={item} handleClose={handleClose} />
      )}
      {openAuction && (
        <AuctionForm open={openAuction} item={item} handleClose={handleClose} />
      )}
    </>
  );
}
