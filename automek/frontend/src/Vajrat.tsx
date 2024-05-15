import React, { useState } from 'react';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Vajrat = () => {
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
      imageUrl: 'https://m.media-amazon.com/images/I/61qTiWc9aNL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Roil Gold 500ml €25'
    },
    {
      id: 2,
      imageUrl: 'https://m.media-amazon.com/images/I/612gYRN4ODL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Vaj për motorë €13.59'
    },
    {
      id: 3,
      imageUrl: 'https://m.media-amazon.com/images/I/51YDQcUbmQL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Aromatizues për makina €6.50'
    },
    {
      id: 4,
      imageUrl: 'https://m.media-amazon.com/images/I/51MXlIxaIRL._AC_SX679_.jpg',
      price: ' Vaj për Rrota €15.30'
    },
    {
      id: 5,
      imageUrl: 'https://m.media-amazon.com/images/I/414FeaJ2WIL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Thithëse me presion për vajra €7.49'
    },
    {
      id: 6,
      imageUrl: 'https://m.media-amazon.com/images/I/71nm-39Xz1L._AC_UL480_FMwebp_QL65_.jpg',
      price: 'Vaj për frena €25.40'
    },
    {
      id: 7,
      imageUrl: 'https://m.media-amazon.com/images/I/91NChfZf+0L._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Vaj për makina €5.98'
    },
    {
      id: 8,
      imageUrl: 'https://m.media-amazon.com/images/I/71iEDuW7FtL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Air fresh €35'
    },
    {
      id: 9,
      imageUrl: 'https://m.media-amazon.com/images/I/61UvuEU6kcL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Vaj për motor €3'
    },
    {
      id: 10,
      imageUrl: 'https://m.media-amazon.com/images/I/71bJ50weDtL._AC_UL480_FMwebp_QL65_.jpg',
      price: ' Volvoline €26.30'
    },
    
  ];

  return (
    <div>
      <h2>Vajra të ndryshme</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pjeset.map(pjeset => (
          <div key={pjeset.id} style={{ margin: '20px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={pjeset.imageUrl}
                alt={`Pjeset ${pjeset.id}`}
                style={{ width: '100px', height: '200px', objectFit: 'cover', border: selectedPjeset.includes(pjeset.id) ? '3px solid green' : '3px solid black' }}
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

export default Vajrat;