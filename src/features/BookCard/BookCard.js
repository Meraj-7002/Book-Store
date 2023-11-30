import React, { useState, useEffect } from 'react';
import './BookCard.css'
import { Link } from 'react-router-dom';

function BookCard() {
  const [books1, setBooks1] = useState([]);
  const [books2, setBooks2] = useState([]);
  const [books3, setBooks3] = useState([]);
  const [books4, setBooks4] = useState([]);
  const [books5, setBooks5] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=latest&maxResults=3')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks1(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books 1:', error));
    
      fetch('https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=3')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks2(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books 2:', error));
    
      fetch('https://www.googleapis.com/books/v1/volumes?q=award-winning&maxResults=3')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks3(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books 3:', error));
    
      fetch('https://www.googleapis.com/books/v1/volumes?q=boxset&maxResults=3')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks4(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books 4:', error));
    
      fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=3')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks5(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books 5:', error));
    
  }, []);


  return (
   <div className="home-page">
      <div className="row">
        <div className="heading">New Arrivals</div>
        <div className="cards-container">
          {books1.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
        <Link to="/new-arrivals"><div className="text">See All</div></Link>
      </div>
      
      <div className="row">
        <div className="heading">Best Seller</div>
        <div className="cards-container">
          {books2.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
        <Link to="/best-sellers"><div className="text">See All</div></Link>
      </div>

      <div className="row">
        <div className="heading">Award Winners</div>
        <div className="cards-container">
          {books3.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
        <Link to="/award-winners"><div className="text">See All</div></Link>
      </div>

      <div className="row">
        <div className="heading">Box Set</div>
        <div className="cards-container">
          {books4.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
        <Link to="/box-set"><div className="text">See All</div></Link>
      </div>

      <div className="row">
        <div className="heading">Fictions Books</div>
        <div className="cards-container">
          {books5.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
        <Link to="/fiction-books"><div className="text">See All</div></Link>
      </div>
      
    </div>
  )
}

export default BookCard