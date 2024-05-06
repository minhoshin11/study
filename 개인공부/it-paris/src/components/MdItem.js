import React from 'react';

function MdItem() {
  return (
    <div>
      <div className='md-container'>
        <div className="md-item">
          <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-newiPhone.webp'} />
          <h4>iPhone</h4>
          <p>마치 새폰 같은 iPhone을 저렴하게</p>
        </div>
        <div className="md-item">
        <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-ipad.webp'} />
          <h4>iPad</h4>
          <p>당신에게 최고의 선택</p>
        </div>

        <div className="md-item">
        <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-galaxy.webp'} />
        <h4>Galaxy</h4>
        <p>세련된, 그리고 절제된</p>
        </div>

        <div className="md-item">
        <img className='md-item-image' src={process.env.PUBLIC_URL + '/img/md-pc.webp'} />
        <h4>PC</h4>
        <p>Desktop부터 iMac까지</p>
        </div>
        
      
    </div>
    </div>
  );
}

export default MdItem;