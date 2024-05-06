import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Main() {
  return (
    <div className='Main'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">IT Paris</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#android">Android</Nav.Link>
            <Nav.Link href="#iphone">iPhone</Nav.Link>
            <Nav.Link href="#ipad">iPad</Nav.Link>
            <Nav.Link href="#desktop">Desktop</Nav.Link>
            <Nav.Link href="#mac">Mac</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg-container'>
      <img className='main-bg-image' src={process.env.PUBLIC_URL + '/img/main-bg.webp'}  /> 
      <div className='main-bg-text1'>
      "합리적인 가격으로 당신의 지갑을 소매치기 합니다"
      </div>
      </div>
    </div>
  );
}

export default Main;