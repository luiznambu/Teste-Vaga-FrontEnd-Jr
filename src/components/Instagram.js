import React from 'react'
import insta1 from '../images/insta1.png'
import insta2 from '../images/insta2.png'
import insta3 from '../images/insta3.png'

function Instagram() {
  return (
    <div className="instagram">
        <h2 className="container">Instagram</h2>
        <div className="instagram__vitrine">
            <div className="instagram__photo">
                <img src={insta1} alt="insta1" />
            </div>
            <div className="instagram__photo">
                <img src={insta2} alt="insta2" />
            </div>
            <div className="instagram__photo">
                <img src={insta3} alt="insta3" />
            </div>
            <div className="instagram__photo">
                <img src={insta1} alt="insta1" />
            </div>
            <div className="instagram__photo">
                <img src={insta2} alt="insta2" />
            </div>
            <div className="instagram__photo">
                <img src={insta3} alt="insta3" />
            </div>
        </div>
    </div>
  )
}

export default Instagram