import React , {useState ,useEffect} from 'react'
import Header from '../../features/header/Header'
import NavBar from '../../features/header/NavBar'
import Footer from '../../features/footer/Footer'
import './BestSellers.css'

function BestSellers() {

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [authorOptions, setAuthorOptions] = useState([]);
  const [authorFilter, setAuthorFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch best-seller books from Google Books API
    fetch('https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40')
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
    // Extract author options from fetched books
    const options = books.reduce((authors, book) => {
      if (book.volumeInfo.authors) {
        book.volumeInfo.authors.forEach(author => {
          if (!authors.includes(author)) {
            authors.push(author);
          }
        });
      }
      return authors;
    }, []);
    setAuthorOptions(options);
  }, [books]);

  useEffect(() => {
    // Apply author filter
    if (authorFilter) {
      const filteredResult = books.filter(book =>
        book.volumeInfo.authors && book.volumeInfo.authors.includes(authorFilter)
      );
      setFilteredBooks(filteredResult);
    } else {
      setFilteredBooks(books);
    }
  }, [authorFilter, books]);

  const handleAuthorFilterChange = (event) => {
    setAuthorFilter(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResult = books.filter(book =>
      book.volumeInfo.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredBooks(filteredResult);
  };
  return (
    <>
    <Header />
    <NavBar />

    <div className="best-seller-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="filter-menu">
        <select value={authorFilter} onChange={handleAuthorFilterChange}>
          <option value="">Select Author</option>
          {authorOptions.map((author, index) => (
            <option key={index} value={author}>{author}</option>
          ))}
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

export default BestSellers