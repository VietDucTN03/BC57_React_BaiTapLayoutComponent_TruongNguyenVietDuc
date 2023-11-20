import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header bg-dark mb-4'>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="name text-white d-flex align-items-center">Start Boostrap</div>
            <div className="menu">
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-secondary" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-secondary" href="#">Service</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-secondary" href='#'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
