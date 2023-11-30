import React , {useState , useEffect} from 'react'
import Header from '../../features/header/Header'
import NavBar from '../../features/header/NavBar'
import Footer from '../../features/footer/Footer'
import './FictionsBook.css'

function FictionsBook() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch fiction books from Google Books API
    fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=10')
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
    // Apply search filter
    const filteredResult = books.filter(book =>
      book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredResult);
  }, [searchTerm, books]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };



  return (
    <>
    <Header />
    <NavBar />
    
    <div className="friction-books-page">
      <div className="book-navbar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
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

export default FictionsBook