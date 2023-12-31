
import styled from "styled-components";
import im from "../assets/Barauna.jpeg"

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  flex-direction: row;
  align-content: start;
`;

const ProductCard = styled.div`
  width: 25%;
  max-width: 20rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 35%;
    height: 314px
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ProductDetails = styled.div`
  text-align: center;
`;

const WhatsAppButton = styled.a`
  background-color: #25d366;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background-color: #128c7e;
  }
`;

const ProductList = () => {
  const products = [
    {id: 1, name: 'Jacarandá', price: 19.99, image: im},
    {id: 2, name: 'Paineira Branca', price: 39.99, image: im},
    {id: 3, name: 'Imbiruçi', price: 15.99, image: im},
    {id: 3, name: 'Angico', price: 15.99, image: im},
  ];

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image}/>
          <ProductDetails>
          <h3>{product.name}</h3>
          <p>{`R$ ${product.price.toFixed(2)}`}</p>
          <WhatsAppButton href={`https://wa.me/5574999843814?text=${product.name} no valor de ${product.price} ainda esta disponível?`} target="_blank">
            Whatsapp
          </WhatsAppButton>
          </ProductDetails>
         
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;