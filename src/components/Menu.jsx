import React from 'react';
import NavBar from './NavBar';
import Container from 'react-bootstrap/esm/Container';



function Menu() {

  return (
    <Container>
    <div>
     <nav>
      <ul>
        
        <li>
          <ul>
            <li><a href="/shoes/sneakers">Sneakers</a></li>
            <li><a href="/shoes/boots">Boots</a></li>
            <li><a href="/shoes/sandals">Sandals</a></li>
            <li><a href="/shoes/dress-shoes">Dress Shoes</a></li>
          </ul>
        </li>
      
      </ul>
    </nav>
    </div>
    </Container>
  )
}

export default Menu