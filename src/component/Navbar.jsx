import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img src="/reactLogo.png" alt="" width={"40px"} />
          </a>
          <span className="me-5 ">v19</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 one mt-2"
                  type="search"
                  placeholder='serch'
                  aria-label="Search"
                />
              </form>
              <li className="nav-item">
                <a className="nav-link active ms-4" aria-current="page" href="#">
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="#">
                  Reference
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4">Blog</a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand ms-5 mb-3" href="#">
            <img src="/half moon icon.png" alt="" width={"25px"} />
          </a>
          <a className="navbar-brand mb-4 ms-3 mt-3" href="#">
            <img src="/github.png" alt="" width={"40px"} />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
