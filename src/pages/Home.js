import React from 'react'
import Header from '../features/header/Header'
import Footer from '../features/footer/Footer'
import NavBar from '../features/header/NavBar'
import ImageSlider from '../features/ImageSlider/ImageSlider'
import BookCard from '../features/BookCard/BookCard'

function Home() {
  const userLoggedIn = true;
  
  return (
    <>
    <Header userLoggedIn={userLoggedIn} />
    <NavBar />
    <ImageSlider />
    <BookCard />
    <Footer />
    </>
  )
}

export default Home