import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TtyIcon from '@mui/icons-material/Tty';
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";
import logo from "../assets/sveh-logo.jpeg";
import { storeInfo } from "../assets/content";

function HeaderPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Login", path: "/login" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navigation = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to="/cart"
          onClick={toggleDrawer(false)}
        >
          <ShoppingCartIcon sx={{ mr: 2 }} />
          <ListItemText primary="Cart" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "#ffffff",
        color: "#222222",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 80 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="SVEH Logo"
              sx={{
                width: 65,
                height: 65,
                objectFit: "contain",
                mr: 1.5,
              }}
            />

            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: "#173b68" }}
              >
                SVEH
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#666", display: "block" }}
              >
                Since 1973
              </Typography>
            </Box>
          </Box>

          {!isMobile ? (
            <>
              <Box sx={{ display: "flex", gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color:
                        location.pathname === item.path ? "#d97706" : "#222",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <ShoppingCartIcon
                  sx={{ mt: 1, ml: 2, mr: 2, color: "#222", cursor: "pointer" }}
                  onClick={() => (window.location.href = "/cart")}
                />
                {/* <Button
                  component={Link}
                  to="/cart"
                  color="inherit"
                  startIcon={<ShoppingCartIcon />}
                >
                  Cart
                </Button> */}
              </Box>
              <TtyIcon
                sx={{ mr: 1, color: "#d97706", cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = `tel:${storeInfo.phone}`)
                }
              />
              {/* <Button
                href={`tel:${storeInfo.phone}`}
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  // ml: 2,
                  bgcolor: '#d97706',
                  '&:hover': { bgcolor: '#b45309' },
                }}
              >
                 {storeInfo.phone}
              </Button> */}
            </>
          ) : (
            <IconButton
              onClick={toggleDrawer(true)}
              aria-label="Open navigation menu"
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={700}>SVEH Menu</Typography>

            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {navigation}

          <Button
            fullWidth
            variant="contained"
            startIcon={<PhoneIcon />}
            href={`tel:${storeInfo.phone}`}
            sx={{ mt: 2, bgcolor: "#d97706" }}
          >
            Call Store
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default HeaderPage;
