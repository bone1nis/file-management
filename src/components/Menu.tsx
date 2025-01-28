import { useState } from "react";

import { Link } from "@tanstack/react-router";
import { routes } from "../routes/routes";

import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";

const Menu: React.FC = () => {
  const theme = useTheme();
  const activeStyle = { backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <List component="nav">
      {routes.map((route) => (
        <ListItem
          key={route.to}
          activeProps={{ style: activeStyle }}
          component={Link}
          to={route.to}
          sx={{
            color: theme.palette.common.black,
            transition: "all 0.2s ease",
            textAlign: "center",
            "&:hover": {
              color: theme.palette.primary.light,
            },
          }}
        >
          <ListItemText primary={route.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Drawer
        sx={{
          width: 100,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: 100,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            maxHeight: 300,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Button
        aria-label="open drawer"
        variant="contained"
        onClick={handleDrawerToggle}
        sx={{
          margin: 2,
          display: { sm: "none" },
          [theme.breakpoints.down("sm")]: {
            margin: 0,
          },
        }}
      >
        Меню
      </Button>
    </>
  );
};

export default Menu;
