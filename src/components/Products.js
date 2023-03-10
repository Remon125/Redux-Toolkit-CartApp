import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/ProductSlice";
import { addToCart } from "../rtk/CartSlice";

const Products = () => {

  const [popup, setPopUp] = useState(false);

  // Products
  const products = useSelector((state) => state.products);
  // console.log(products);
  // Action Products addToCart
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetching All Products
    dispatch(fetchProducts());
  }, []);

  const add = (product) => {
    dispatch(addToCart(product));
    setPopUp(true);
    // popup.classList.add("active")
    setTimeout(() => {
      setPopUp(false);
    }, 1000);

  };


  return (
    <Container className="pt-5 pb-5">
      <div className={popup != true ? "popup" : "popup active"}>
        Success Add To Cart
      </div>
      <Row className="gap-3 justify-content-center">
        {products.map((product) => (
          <Col xs="auto" md="auto" lg={3} key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.disc}</Card.Text>
                <Card.Text>{product.price} $</Card.Text>

                <Button variant="primary" onClick={() => add(product)}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
