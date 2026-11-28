import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  Stack,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "react-router-dom";
import logo from "../assets/sveh-logo.jpeg";
import { storeInfo } from "../assets/content";

function FooterPage() {
  return (
    <Box sx={{ bgcolor: "#101f33", color: "#fff", pt: 6, pb: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* BRAND */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo}
              alt="SVEH Logo"
              sx={{
                width: 85,
                height: 85,
                objectFit: "contain",
                bgcolor: "#fff",
                borderRadius: 2,
                p: 1,
              }}
            />

            <Typography variant="h5" fontWeight={800} mt={2}>
              {storeInfo.name}
            </Typography>

            <Typography color="#b9c5d3" mt={1}>
              A legacy of trust, quality and service since 1973.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Quick Links
            </Typography>

            <Stack spacing={1}>
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["About Us", "/about"],
                ["Login", "/login"],
                ["Cart", "/cart"],
              ].map(([label, path]) => (
                <MuiLink
                  key={path}
                  component={Link}
                  to={path}
                  underline="none"
                  color="#b9c5d3"
                  sx={{ "&:hover": { color: "#f59e0b" } }}
                >
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Contact Us
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon color="warning" />
                <MuiLink
                  href={`tel:${storeInfo.phone}`}
                  color="inherit"
                  underline="none"
                >
                  {storeInfo.phone}
                </MuiLink>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOnIcon color="warning" />
                <Typography color="#b9c5d3">{storeInfo.address}</Typography>
              </Stack>
            </Stack>
            <Box sx={{ p: 1 }} />
            {/* <Box p={4} /> */}

            <Stack direction="row" spacing={1} mt={2}>
              <IconButton
                component="a"
                href={storeInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ color: "#fff", bgcolor: "#243d5c" }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href={storeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ color: "#fff", bgcolor: "#243d5c" }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #34445a",
            mt: 5,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="#b9c5d3">
            © {new Date().getFullYear()} SVEH - Sri Venkateswara Electricals and
            Hardware. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default FooterPage;
