import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div>
      <div className="container text-center bg-light">
          <div className="content p-3 p-lg-5 m-4 m-lg-5">
              <h1 className='font-weight-bold display-5 pt-4'>A warm welcome!</h1>
              <p className='h4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <button className='btn btn-primary btn-lg'>Call to action</button>
          </div>
      </div>
    </div>

    )
  }
}
