import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, Container } from "react-bootstrap";

const ManageProducts = () => {
  const [orders, setOrders] = useState([]);
  const [notifyCancel, setNotifyCancel] = useState(false);
  useEffect(() => {
    fetch("https://car-nation-server-site.vercel.app/orders/admin")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  // Delete Orders
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure, you want to cancel this order?"
    );
    if (proceed) {
      const url = `https://car-nation-server-site.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setNotifyCancel(true);
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <Container>
        {/* orders delete notification */}
        {notifyCancel && (
          <Alert className="mt-3 w-50 mx-auto" variant={"success"}>
            Products successfully canceled!
          </Alert>
        )}

        <h2>Manage {orders.length} Products</h2>
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
                  Cancel
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
                  <TableCell align="center">
                    <button
                      onClick={() => handleDelete(row._id)}
                      className="button"
                    >
                      Delete
                    </button>
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

export default ManageProducts;
