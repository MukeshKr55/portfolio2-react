import React from 'react'
import '../footer/footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Mukesh. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
