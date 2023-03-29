
import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary d-flex" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand">Black&White</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Sacos</a>
                        <a className="nav-link" href="#">Camisas</a>
                      
                    </div>
                </div>
            </div>
            <CartWidget />
        </nav>
        </header>
    )
}

export default Navbar