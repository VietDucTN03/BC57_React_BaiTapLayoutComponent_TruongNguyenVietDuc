import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className="container">
          <div className="row">
            <div className="item1 col-md-3">
              <div className="card text-center">
                <img src="https://i.pravatar.cc?u=5" alt="..." class="card-img-top"/>
                <div className="card-body">
                  <h3 className='card-title'>Card title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni saepe in.</p>
                </div>
                <div className="card-footer">
                  <button className='btn btn-primary'>Find Out More!</button>
                </div>
              </div>
            </div>
            <div className="item2 col-md-3">
              <div className="card text-center">
                <img src="https://i.pravatar.cc?u=10" alt="..." class="card-img-top"/>
                <div className="card-body">
                  <h3 className='card-title'>Card title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni saepe in.</p>
                </div>
                <div className="card-footer">
                  <button className='btn btn-primary'>Find Out More!</button>
                </div>
              </div>
            </div>
            <div className="item3 col-md-3">
              <div className="card text-center">
                <img src="https://i.pravatar.cc?u=15" alt="..." class="card-img-top"/>
                <div className="card-body">
                  <h3 className='card-title'>Card title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni saepe in.</p>
                </div>
                <div className="card-footer">
                  <button className='btn btn-primary'>Find Out More!</button>
                </div>
              </div>
            </div>
            <div className="item4 col-md-3">
              <div className="card text-center">
                <img src="https://i.pravatar.cc?u=20" alt="..." class="card-img-top"/>
                <div className="card-body">
                  <h3 className='card-title'>Card title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni saepe in.</p>
                </div>
                <div className="card-footer">
                  <button className='btn btn-primary'>Find Out More!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
