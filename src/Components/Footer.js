import React from 'react'

const Footer = () => {
  return (

    <footer>

      <p>Made With Love By Ansh</p>
      <ul className="footer-social">
        <li className="footer-link"><a href="https://www.linkedin.com/anshtripathi01" target="blank"><i
          className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
        </a></li>
        <li className="footer-link"><a href="https://www.github.com/anshtripathi01" target="blank"><i
          className="fab fa-github fa-lg" aria-hidden="true"></i>
        </a></li>
        <li className="nav-link"><a href="https://www.twitter.com/ansh_tripathi01"><i className="fab fa-twitter fa-lg"
          aria-hidden="true"></i> </a></li>

      </ul>
      <h6>&copy; 2021 ApnaUI Design</h6>

    </footer>
  )
}

export default Footer