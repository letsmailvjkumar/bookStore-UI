import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Fetch data for best-selling books
    const fetchBestSellers = async () => {
      try {
        const harryPotterResponse = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
        const sherlockHolmesResponse = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");

        // Get the first three books and set the fetched data in state
        const combinedBooks = [
          ...harryPotterResponse.data.items,
          ...sherlockHolmesResponse.data.items
        ];
        setBestSellers(combinedBooks.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    fetchBestSellers();
  }, []);

  const getRandomColor = () => {
    const colors = ['mattBlue', 'mattPink', 'mattPurple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className='text-white'>
      <h2 className='text-2xl font-bold ps-10 p-10'>Top trending</h2>
      <div className='flex justify-between p-5 h-68 gap-10'>
        {bestSellers.map((book, index) => (
            <div 
            key={index} 
            className="book-card flex border"
            style={{ backgroundColor: `var(--${getRandomColor()})` }}
            >          
            <img
            src={book.volumeInfo.imageLinks?.thumbnail || ""}
            alt={book.volumeInfo.title}
            className="book-image bg-transparent absolute ms-5 mt-20 p-auto"
          />
          <div className='flex flex-col ps-5 pt-5 ms-36'>
          <h3 className="book-title text-xl font-bold">{book.volumeInfo.title}</h3>
          <p className='mt-5'>Description - Loreum ipsum dolor sit amet, 
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Massa elit lectus enim id euismod. 
            Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.</p>
            <div className='flex justify-center'> {/* Center the button */}
                <button className='border w-28 h-10 m-5'>Now Read!</button>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default BestSeller;
