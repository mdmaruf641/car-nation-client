import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "./../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // Delete Orders
  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${"id"}`;
    fetch(url, {
      method: "DELETE",
    }).then();
  };
  return (
    <div>
      <h2 className="mb-2">My Total Orders: {orders.length}</h2>
      <TableContainer
        sx={{ width: "100%", height: "100%", margin: "auto" }}
        component={Paper}
      >
        <Table aria-label="Orders Table">
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
                Action
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
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() => handleDelete(orders._id)}
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
    </div>
  );
};

export default MyOrders;
