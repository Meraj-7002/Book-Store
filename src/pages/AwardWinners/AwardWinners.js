import React , { useState, useEffect } from 'react'
import Header from '../../features/header/Header'
import NavBar from '../../features/header/NavBar'
import Footer from '../../features/footer/Footer'

function AwardWinners() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [authorFilter, setAuthorFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Fetch award-winning books from Google Books API
    fetch('https://www.googleapis.com/books/v1/volumes?q=award-winning&maxResults=10')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setBooks(data.items);
          setFilteredBooks(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    // Apply filters and sorting
    let filteredResult = books;

    if (authorFilter) {
      filteredResult = filteredResult.filter(book => book.volumeInfo.authors && book.volumeInfo.authors.includes(authorFilter));
    }

    if (sortOption === 'priceAsc') {
      filteredResult.sort((a, b) => {
        const priceA = a.saleInfo?.listPrice?.amount || 0;
        const priceB = b.saleInfo?.listPrice?.amount || 0;
        return priceA - priceB;
      });
    } else if (sortOption === 'priceDesc') {
      filteredResult.sort((a, b) => {
        const priceA = a.saleInfo?.listPrice?.amount || 0;
        const priceB = b.saleInfo?.listPrice?.amount || 0;
        return priceB - priceA;
      });
    }

    setFilteredBooks(filteredResult);
  }, [books, authorFilter, sortOption]);

  const handleAuthorFilterChange = (event) => {
    setAuthorFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <>
    <Header />
    <NavBar />

    <div className="landing-page">
      <div className="filter-menu">
        <select value={authorFilter} onChange={handleAuthorFilterChange}>
          <option value="">Select Author</option>
          {/* Add author options */}
        </select>
      </div>

      <div className="sort-menu">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      <div className="book-container">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-card">
            <div className="book-details">
              <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt="Book Cover" />
              <h3>{book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors?.join(', ') || 'N/A'}</p>
              <p>Publisher: {book.volumeInfo.publisher || 'N/A'}</p>
              <p>Price: {book.saleInfo?.listPrice?.amount || 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default AwardWinners