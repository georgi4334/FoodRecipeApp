import React from 'react'
import Image1 from './nathan-dumlao-aZ9X3L1Va2Y-unsplash.jpg'

const  ErrorPage = () => {
    return(
    <div className="container-fluid">
        <div className="row error-cont">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="error-image">
                   <img src={Image1} alt="eating panda" />
                </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
                <h2>Sorry, we don't have this one...</h2>
            </div>
        </div>
    </div>
    )
}

export default ErrorPage