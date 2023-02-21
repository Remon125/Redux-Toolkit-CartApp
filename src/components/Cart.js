import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeFromCart } from "../rtk/CartSlice";

const Cart = () => {
  // Cart Product
  const cart = useSelector((state) => state.cart);
  // Total Price Of All Cart
  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  // Actions
  const dispatch = useDispatch();

  // console.log(total)
  return (
    <Container>
      <Button
        variant="danger"
        className="mt-5"
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </Button>
      <p className="mt-5">total Price{total} $</p>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  style={{ width: "50px", height: "50px" }}
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
