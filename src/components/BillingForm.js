import React, { useState } from "react";
import Form from "react-bootstrap/Form";
//import { CardElement, injectStripe } from "react-stripe-elements";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./BillingForm.css";
import { useHistory } from "react-router-dom";

export default function BillingForm({ isLoading, onSubmit, ...props }) {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    storage: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(true);
  const history = useHistory();

  isLoading = isProcessing || isLoading;

  function validateForm() {
    return fields.name !== "" && fields.storage !== "" && isCardComplete;
  }

  async function handleSubmitClick(event) {
    event.preventDefault();

    setIsProcessing(true);

    setTimeout(500);
    //const { token, error } = await props.stripe.createToken({
      //name: fields.name,
    //});

    setIsProcessing(false);
    //const token = {"id": "sample_id"};
    //const error = null
    //onSubmit(fields.storage, {token, error
    history.push('/');
  }

  return (
    <Form className="BillingForm" onSubmit={handleSubmitClick}>
      <Form.Group size="lg" controlId="storage">
        <Form.Label>Storage</Form.Label>
        <Form.Control
          min="0"
          type="number"
          value={fields.storage}
          onChange={handleFieldChange}
          placeholder="Number of notes to store"
        />
      </Form.Group>
      <hr />
      <Form.Group size="lg" controlId="name">
        <Form.Label>Cardholder&apos;s name</Form.Label>
        <Form.Control
          type="text"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Name on the card"
        />
      </Form.Group>
      <Form.Label>Credit Card Info</Form.Label>
      <h3>Stripe card input goes here</h3>
      {/*<CardElement
        className="card-field"
        onChange={(e) => setIsCardComplete(e.complete)}
        style={{
          base: {
            fontSize: "16px",
            color: "#495057",
            fontFamily: "'Open Sans', sans-serif",
          },
        }}
      />*/}
      <LoaderButton
        block
        size="lg"
        type="submit"
        isLoading={isLoading}
        disabled={!validateForm()}
        onClick={(e) => handleSubmitClick(e)}
      >
        Purchase
      </LoaderButton>
    </Form>
  );
}

//export default injectStripe(BillingForm);
