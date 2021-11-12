import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import DashboardHome from "./../DashboardHome/DashboardHome";
import AddProduct from "./../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import Reviews from "../Reviews/Reviews";
import useAuth from "./../../../Hooks/useAuth";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // for nested route
  let { path, url } = useRouteMatch();

  const drawer = (
    <div style={{ backgroundColor: "#1F2F50", height: "100%" }}>
      <Toolbar />

      <Nav.Link className="menu-items fs-5 text-white" as={HashLink} to="/home">
        Home
      </Nav.Link>
      <Divider style={{ color: "#fff" }} />
      <Nav.Link
        className="menu-items mt-1 fs-5 text-white"
        as={HashLink}
        to={`${url}`}
      >
        Dashboard
      </Nav.Link>
      <Divider style={{ color: "#fff" }} />
      {admin && (
        <>
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/manageOrders`}
          >
            Manage All Orders
          </Nav.Link>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            to={`${url}/makeAdmin`}
            as={HashLink}
          >
            Make Admin
          </Nav.Link>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/addProduct`}
          >
            Add Product
          </Nav.Link>
        </>
      )}
      <Divider style={{ color: "#fff" }} />
      {!admin && (
        <>
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/myOrders`}
          >
            My Orders
          </Nav.Link>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/payment`}
          >
            Payment
          </Nav.Link>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/review`}
          >
            Review
          </Nav.Link>
        </>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#1F2F50" }}
          className="app-bar"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              className="text-white mx-auto"
              variant="h5"
              noWrap
              component="div"
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/manageProduct`}></Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/review`}>
              <Reviews></Reviews>
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
