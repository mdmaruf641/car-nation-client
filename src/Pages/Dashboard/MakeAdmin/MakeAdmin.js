import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      {success && (
        <Alert className="my-3 mx-auto w-50" variant={"success"}>
          Admin Made Successfully!
        </Alert>
      )}
      <Form onSubmit={handleAdminSubmit}>
        <Form.Control
          onBlur={handleOnBlur}
          className="w-50 mx-auto"
          type="email"
          placeholder="Enter Email"
        />
        <Button className="button" variant="primary" type="submit">
          Make Admin
        </Button>
      </Form>
    </div>
  );
};

export default MakeAdmin;
