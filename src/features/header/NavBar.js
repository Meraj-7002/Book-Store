import React , { useState, useEffect } from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';
function NavBar() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
    fetch('API_ENDPOINT')
    .then((response) => response.json())
    .then((data) => setBooks(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);
  
   return (
    <nav className="navbar">
    <div className="links">
      <Link to="/new-arrivals">New Arrivals</Link >
      <span>|</span>
      <Link to="/box-set">Box Set</Link >
      <span>|</span>
      <Link to="/best-sellers">Best sellers</Link >
      <span>|</span>
      <Link to="/fiction-books">Fiction Books</Link >
      <span>|</span>
      <Link to="/award-winners">Award Winners</Link >
      <span>|</span>
      <Link to="/featured-authors">Featured Authors</Link >
      <span>|</span>
      <Link to="/request-book">Request a Book</Link >
    </div>
    <div className="dropdown">
      <button className="dropbtn">Books</button>
      <div className="dropdown-content">
        {books.map((book) => (
          <a href="/" key={book.id}>{book.title}</a>
        ))}
      </div>
    </div>
  </nav>
  )
}

export default NavBar