import React , {useState , useEffect } from 'react'
import Header from '../../features/header/Header'
import NavBar from '../../features/header/NavBar'
import Footer from '../../features/footer/Footer'
import './FeaturedAuthors.css'

function FeaturedAuthors() {


  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch data of authors from Google Books API
    fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:tolkien&maxResults=25')
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          const authorList = data.items.map(book => ({
            name: book.volumeInfo.authors?.[0] || 'N/A',
            photo: book.volumeInfo.imageLinks?.thumbnail || ''
          }));
          setAuthors(authorList);
        }
      })
      .catch((error) => console.error('Error fetching authors:', error));
  }, []);


  return (
    <>
    <Header />
    <NavBar />

    <div className="authored-feature-page">
      <h1>Featured Authors</h1>
      <div className="authors-container">
        {authors.map((author, index) => (
          <div key={index} className="author-card">
            <img src={author.photo} alt="Author" />
            <p>{author.name}</p>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  )
}

export default FeaturedAuthors