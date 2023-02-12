import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
<div>
        <div className="container text-center pt-5">
            <div className="features bg-light pt-3">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="fa fa-download"></i>
                </div>
                <div className="content">
                    <h2 className='font-weight-bold'>Fresh new download</h2>
                    <p className='p-3'>As always, Start Bootstrap has a powerful collectin of free templates. </p>
                </div>
            </div>
        </div>
      </div>


    )
  }
}
