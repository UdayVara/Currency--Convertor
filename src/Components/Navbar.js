import React from 'react'

export default function Navbar() {
  return (
   <>
        <nav className="navbar mt-md-1 navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Currency Convertor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className=" ms-auto navbar-nav">
        <a className="nav-link active mx-md-3" aria-current="page" href="#">Home</a>
        <a className="nav-link active mx-md-3" href="/">Currency</a>
        <a className="nav-link active mx-md-3" href="/">About</a>
        <a className="nav-link active mx-md-3" href="/" >Contact</a>
        

      </div>
    </div>
  </div>
</nav>
   </>
  )
}
