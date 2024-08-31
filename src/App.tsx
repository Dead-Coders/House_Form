import * as React from "react";
import { Field as HouseField, Form as HouseForm } from "houseform";
import { z } from "zod";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="m-3">
      <HouseForm
        onSubmit={(values) => {
          alert("Form was submitted with: " + JSON.stringify(values));
        }}
      >
        {({ isValid, submit }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <HouseField
              name="email"
              onBlurValidate={z.string().email("This must be an email")}
            >
              {({ value, setValue, onBlur, errors }) => {
                return (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        value={value}
                        onBlur={onBlur}
                        onChange={(e) => setValue(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                      />
                      {errors.map((error) => (
                        <Form.Text className="text-danger" key={error}>
                          {error}
                        </Form.Text>
                      ))}
                    </Form.Group>
                  </div>
                );
              }}
            </HouseField>
            <Button disabled={!isValid} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </HouseForm>
    </div>
  );
}
