import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner mb-4'>
        <div className="container bg-light py-5 px-4">
          <h1 className='display-4'>A Warm Welcome!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, aliquid, tenetur et fugiat ipsum quis dolores earum doloribus est nobis ab quas ex tempore soluta magnam reiciendis eum odit mollitia.</p>
          <button className='btn btn-primary'>Call to action!</button>
        </div>
      </div>
    )
  }
}
