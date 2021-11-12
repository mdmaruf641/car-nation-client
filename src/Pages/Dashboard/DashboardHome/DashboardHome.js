import React from "react";
import { Container } from "react-bootstrap";
import userImg from "../../../images/user.png";
import useAuth from "./../../../Hooks/useAuth";
import "./DashboardHome.css";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Container>
        <div className=" mx-auto mt-5 py-5 px-2 user-box">
          <img src={userImg} className="w-75 mb-3" alt="" />
          <h3>{user.displayName}</h3>
          <h5>{user.email}</h5>
        </div>
      </Container>
    </div>
  );
};

export default DashboardHome;
