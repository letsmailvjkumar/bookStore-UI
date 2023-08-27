import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

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

  const bookDetails = (book) => {
    setSelectedBook(book);
  };

  const goBack = () => {
    setSelectedBook(null); // Reset the selected book state
    window.location.reload(); // Refresh the page
  };

  return (
    <div className='text-white'>
      {!selectedBook ? (
        <>
          <h2 className='text-2xl font-bold ps-10 p-10'>Top trending</h2>
          <div className='flex justify-between p-5 h-68 gap-10'>
            {bestSellers.map((book, index) => (
              <div 
                key={index} 
                className={`book-card flex border ${index === 0 ? 'bg-mattBlue' : index === 1 ? 'bg-mattPurple' : 'bg-mattPink'}`}
              >
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || ""}
                  alt={book.volumeInfo.title}
                  className="book-image bg-transparent absolute ms-5 mt-5 p-auto"
                />
                <div className='flex flex-col ps-5 pt-5 ms-36'>
                  <h3 className="book-title  font-bold">{book.volumeInfo.title}</h3>
                  <p className='mt-5 text-xs'>Description - Loreum ipsum dolor sit amet, 
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Massa elit lectus enim id euismod. 
                  Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.</p>
                  <div className='flex justify-center'>
                    <button className='border w-28 h-10 m-5' onClick={() => bookDetails(book)}>
                      Now Read!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='bg-mattBlue flex mt-5 p-5'>
          <img src={selectedBook.volumeInfo.imageLinks?.thumbnail || ''} alt={selectedBook.volumeInfo.title} className='relative w-50 h-auto'/>
          <div className='text-white ps-10'>
            <div className='flex justify-between'>
            <h3 className='title text-2xl font-bold py-2 '>{selectedBook.volumeInfo.title}</h3>
            <h4 className='text-xl font-bold pt-5 text-gray-200'>Published Date: "{selectedBook.volumeInfo.publishedDate}"</h4>
            </div>
            <p className='author text-gray-300 text-xl'>{selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.join(', ')}</p>
            <p className='description text-gray-300 text-md pt-3'>{selectedBook.volumeInfo.description}</p>
            <div className='book-statstics flex pt-3 text-lg gap-10'>
              <p className='avg-rating'>Average Rating: {selectedBook.volumeInfo.averageRating || 'N/A'}</p>
              <p className='raitng'>Ratings Count: {selectedBook.volumeInfo.ratingsCount || 'N/A'}</p>
              <p className='publisher'>Publisher: {selectedBook.volumeInfo.publisher || 'N/A'}</p>
              <p className='language'>Language: {selectedBook.volumeInfo.language || 'N/A'}</p>
            </div>
            <div className='flex float-right'>
              <button className='border w-28 h-10 m-5'>Now Read!</button>
              <button className='border w-28 h-10 m-5' onClick={goBack}>Go back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestSeller;
