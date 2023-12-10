import React from "react";
import styled from "styled-components";
import  logo  from "../../public/LogoCentral.png";
const HeaderContainer = styled.header`
  color: #fff;
  padding: 1rem;
  text-align: center;
  
  
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`

const Logo = styled.div`
 
  display: flex;
  align-items: center;
  max-width: 200px;
  margin: 0 auto;
  border-radius: 999px;
`;

const Button = styled.button`
  background-color: #008000;
  color: white;
  text-size-adjust: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;

&:hover {
    background-color: #fff;
    color: #008000;
    border: 0.15rem solid #008000;
    padding: 0.35rem 0.9rem;
  }
`;

const Header = ()=> {
  return (
    <HeaderContainer>
      <Nav>
        <Button>Home</Button>
        <Button>Curiosidade sobre nós</Button>
      </Nav>
      <Logo>
        <img src={logo} alt="" width={'200px'}  />
      </Logo>
    </HeaderContainer>
  );
};

export default Header;