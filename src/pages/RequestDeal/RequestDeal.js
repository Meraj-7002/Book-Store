import React , {useState , useEffect}  from 'react'
import Header from '../../features/header/Header'
import NavBar from '../../features/header/NavBar'
import Footer from '../../features/footer/Footer'
import './RequestDeal.css'

function RequestDeal() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookTitle: '',
    author: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    bookTitle: '',
    author: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newErrors = { ...formErrors };


    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        valid = false;
      }
    });

    if (!valid) {
      setFormErrors(newErrors);
      return;
    }

    // Submit logic (send the data)
    console.log('Form submitted:', formData);


    setFormData({
      name: '',
      email: '',
      bookTitle: '',
      author: '',
      message: ''
    });
    setFormErrors({
      name: '',
      email: '',
      bookTitle: '',
      author: '',
      message: ''
    });
  };
  return (
    <>
    <Header />
    <NavBar />

    <div className="request-book-page">
      <h1>Request a Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleInputChange}
          />
          {formErrors.bookTitle && <span className="error">{formErrors.bookTitle}</span>}
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          {formErrors.author && <span className="error">{formErrors.author}</span>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
    <Footer />
    </>
  )
}

export default RequestDeal