import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-ocean-27772.herokuapp.com/orders/admin")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <Container>
        <h2>Manage {orders.length} Orders</h2>
        <TableContainer
          sx={{ width: "90%", height: "100%", margin: "auto" }}
          component={Paper}
        >
          <Table className="table" aria-label="Orders Table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "20px", color: "#ff5400 " }}
                  align="center"
                >
                  User Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "#ff5400 " }}
                  align="center"
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "#ff5400 " }}
                  align="center"
                >
                  Products Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "#ff5400 " }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "#ff5400 " }}
                  align="center"
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", color: "#ff5400 " }}
                  align="center"
                >
                  Approve
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.UserName}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.productName}</TableCell>
                  <TableCell align="center">${row.price}</TableCell>
                  <TableCell align="center">PENDING</TableCell>
                  <TableCell align="center">
                    <button className="button">Approve</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ManageOrders;
