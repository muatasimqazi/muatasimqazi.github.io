import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='card contact mt-5 border-0'>
          <h3>Contact</h3>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-4 col-sm-12'>
                <div className='row'>
                  <div className='col-1 align-self-center'>
                    <i className='h4 fas fa-map-marker' />
                  </div>
                  <div className='col-11 pl-4 align-self-center font-weight-light text-left'>
                    <p className='h6 mb-0'>Location</p>
                    <p>Seattle, WA</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-12'>
                <div className='row'>
                  <div className='col-1 align-self-center'>
                    <i className='h4 fas fa-envelope' />
                  </div>
                  <div className='col-11 pl-4 font-weight-light text-left'>
                    <p className='h6 mb-0'>Email</p>
                    <p>
                      <a href='mailto:muatasimqazi@gmail.com'>
                        muatasimqazi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-12'>
                <div className='row'>
                  <div className='col-1 align-self-center'>
                    <i
                      className='h4 fas fa-phone'
                      data-fa-transform='rotate-90'
                    />
                  </div>
                  <div className='col-11 pl-4 font-weight-light text-left'>
                    <p className='h6 mb-0'>Phone</p>
                    <p>
                      <a href='tel:+12069793862'>206-979-3862</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
