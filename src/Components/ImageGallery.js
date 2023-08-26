import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className='bg-lightBlack text-white flex flex-col flex-nowrap gap-10 p-5'>
      <h1 className='text-2xl font-bold'>More Books</h1>
      <div className='flex gap-20 flex-wrap justify-around'>
        {images.map((image, index) => (
          <div key={index}>
            {image.volumeInfo.imageLinks && image.volumeInfo.imageLinks.thumbnail && (
              <img
                src={image.volumeInfo.imageLinks.thumbnail}
                alt={image.volumeInfo.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
