import React, { useState } from 'react';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Pjeset = () => {
  const [ratings, setRatings] = useState<{ [key: number]: number | null }>({});
  const [selectedPjeset, setSelectedPjeset] = useState<number[]>([]);

  const handleChange = (pjesetId: number, newValue: number | null) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [pjesetId]: newValue
    }));
  };

  const handleButtonClick = (pjesetId: number) => {
    if (selectedPjeset.includes(pjesetId)) {
      setSelectedPjeset(selectedPjeset.filter(id => id !== pjesetId));
    } else {
      setSelectedPjeset([...selectedPjeset, pjesetId]);
    }
  };

  // Define an array of dress objects with image URLs and prices
  const pjeset = [
    {
      id: 1,
      imageUrl: 'https://m.media-amazon.com/images/I/51OcvbZtQoL._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Mbrojtësi i parakolpit €50'
    },
    {
      id: 2,
      imageUrl: 'https://m.media-amazon.com/images/I/515lPvu8BVL._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Fshesa për xhamë €13.59'
    },
    {
      id: 3,
      imageUrl: 'https://m.media-amazon.com/images/I/61b5XHGJAmL._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Timon për makina €70.60'
    },
    {
      id: 4,
      imageUrl: 'https://m.media-amazon.com/images/I/61WimPTIKJS._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Rrota për makina €154'
    },
    {
      id: 5,
      imageUrl: 'data:image/jpeg;base64,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',
      price: ' Motora për makina €139'
    },
    {
      id: 6,
      imageUrl: 'https://m.media-amazon.com/images/I/71pPQze7jxL._AC_UY327_FMwebp_QL65_.jpg',
      price: 'Mjete për makina €25.40'
    },
    {
      id: 7,
      imageUrl: 'https://m.media-amazon.com/images/I/71gt++2TMVL._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Drita për makina €5.98'
    },
    {
      id: 8,
      imageUrl: 'https://m.media-amazon.com/images/I/71woxDjIz8L._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Sedilje për makina €55'
    },
    {
      id: 9,
      imageUrl: 'https://m.media-amazon.com/images/I/51Sz+btdDML._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Varse për celsa €3'
    },
    {
      id: 10,
      imageUrl: 'https://m.media-amazon.com/images/I/616I8527mDL._AC_UY327_FMwebp_QL65_.jpg',
      price: ' Frena për makina €102'
    },
    
  ];

  return (
    <div>
      <h2>Pjeset e makinave</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pjeset.map(pjeset => (
          <div key={pjeset.id} style={{ margin: '50px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={pjeset.imageUrl}
                alt={`Pjeset ${pjeset.id}`}
                style={{ width: '250px', height: '200px', objectFit: 'cover', border: selectedPjeset.includes(pjeset.id) ? '3px solid green' : '3px solid black' }}
              />
              <button onClick={() => handleButtonClick(pjeset.id)} style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: selectedPjeset.includes(pjeset.id) ? 'green' : 'white' }}>Order</button>
              

            </div>
            <p>{pjeset.price}</p>
            <Rating
              name={`rating-${pjeset.id}`} // Add a unique name for each Rating component
              value={ratings[pjeset.id] || 0}
              onChange={(_event, newValue) => handleChange(pjeset.id, newValue)}
              precision={0.2}
              size='small'
              icon={<FavoriteIcon fontSize='inherit' />}
              emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pjeset;
