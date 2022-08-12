import React from 'react'

function Card({image, name, price}) {

    let amount = Number(price.slice(1))

    function Sell() {
      if(amount <= 400) {
        alert("Cheaper")
      } else {
        alert("Expensive")
      }
    }

  return (
    <div className='col-md-3 mt-4'>
         
    <div className='card'>
      <img
        src={image}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <p className='card-text'>{name}</p>
        <h4 className='card-text font-bold'>{price}</h4>
        <br />
        <button onClick= {Sell} className="btn btn- secondary">
            Tictker buy
            </button>
      </div>
    </div>
  </div>
);
}


export default Card;