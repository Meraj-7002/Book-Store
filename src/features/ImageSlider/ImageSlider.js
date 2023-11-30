import React, {useState , useEffect} from 'react';
import './ImageSlider.css';

function ImageSlider() {
  const [books, setBooks] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=5')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % books.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, books.length]);

  return (
    <div className="image-slider">
      {books.length > 0 && (
        <img
          className="slide"
          src={books[currentSlide].volumeInfo.imageLinks.thumbnail}
          alt={`Book ${currentSlide + 1}`}
        />
      )}
    </div>
  )
}

export default ImageSlider