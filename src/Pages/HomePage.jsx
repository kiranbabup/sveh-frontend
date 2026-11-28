import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

import StorefrontIcon from "@mui/icons-material/Storefront";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { storeInfo, aboutContent, productCategories } from "../assets/content";
import hero_xs from "../assets/hero_xs.png";
import hero_md from "../assets/hero_md.png";

function HomePage() {
  return (
    <>
      <HeaderPage />
      <Box>
        {/* HERO SECTION */}
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${hero_xs})`,
              md: `url(${hero_md})`,
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // background:
            //   "linear-gradient(120deg, #102d50 0%, #1d4e78 65%, #d97706 100%)",
            color: "#fff",
            py: { xs: 3, md: 5 },
          }}
        >
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="overline"
                  sx={{ color: "#ffc875", fontWeight: 700 }}
                >
                  TRUSTED SINCE 1973
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: 25, md: 55 },
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Everything Electrical & Hardware, All in One Place.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#e0e8f1",
                    mb: 4,
                    fontWeight: 400,
                    fontSize: { xs: 15, md: 18 },
                  }}
                >
                  Welcome to Sri Venkateswara Electricals and Hardware. Quality
                  products and trusted service for generations.
                </Typography>

                <Stack direction={{ xs: "row" }} spacing={2}>
                  <Button
                    component={Link}
                    to="/products"
                    variant="contained"
                    // size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "#f59e0b",
                      color: "#111",
                      fontWeight: 700,
                      fontSize: { xs: 12, md: 16 },
                      "&:hover": { bgcolor: "#d97706" },
                    }}
                  >
                    Explore Products
                  </Button>

                  <Button
                    href={`tel:${storeInfo.phone}`}
                    variant="outlined"
                    // size="large"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      fontSize: { xs: 12, md: 16 },
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    textAlign: "center",
                    border: "1px solid #ffffff55",
                    borderRadius: 4,
                    p: 4,
                    bgcolor: "#00000039",
                  }}
                >
                  <StorefrontIcon
                    sx={{
                      fontSize: 90,
                      color: "#d97706",
                      background: { xs: "#fff", md: "#ffffff00" },
                      borderRadius: "20px",
                      p: 1,
                    }}
                  />

                  <Typography variant="h3" fontWeight={800}>
                    50+
                  </Typography>

                  <Typography>Years of Trust & Service</Typography>

                  <Typography sx={{ mt: 2, color: "#ffc875", fontWeight: 700 }}>
                    ESTABLISHED {storeInfo.established}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* TRUST SECTION */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            {[
              {
                icon: <VerifiedIcon />,
                title: "Trusted Quality",
                text: "Serving customers since 1973.",
              },
              {
                icon: <LocalShippingIcon />,
                title: "Wide Selection",
                text: "Electrical and hardware essentials.",
              },
              {
                icon: <SupportAgentIcon />,
                title: "Customer Support",
                text: "Personal assistance and reliable service.",
              },
            ].map((item) => (
              <Grid item xs={12} sm={4} key={item.title}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Box sx={{ color: "#d97706", mb: 1 }}>{item.icon}</Box>
                  <Typography fontWeight={700}>{item.title}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ABOUT SVEH */}
        <Box sx={{ bgcolor: "#f6f7f9", py: 9 }}>
          <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    bgcolor: "#173b68",
                    color: "#fff",
                    p: 5,
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="overline">OUR LEGACY</Typography>
                  <Typography variant="h1" fontWeight={800}>
                    1973
                  </Typography>
                  <Typography variant="h6">A Legacy of Trust</Typography>
                  <Typography sx={{ mt: 2, color: "#ddd" }}>
                    Founded by Late Dadi Apparao
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography color="#d97706" fontWeight={700} variant="overline">
                  OUR STORY
                </Typography>

                <Typography variant="h3" fontWeight={800} mb={2}>
                  {aboutContent.heading}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.9} mb={3}>
                  {aboutContent.description}
                </Typography>

                <Typography fontWeight={700} mb={2}>
                  Founded by: {storeInfo.founder}
                </Typography>

                <Typography fontWeight={700} mb={3}>
                  Currently managed by: {storeInfo.proprietor}
                </Typography>

                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  sx={{ bgcolor: "#173b68" }}
                >
                  Know More About Us
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* PRODUCT CATEGORY HIGHLIGHTS */}
        <Container maxWidth="lg" sx={{ py: 9 }}>
          <Box textAlign="center" mb={5}>
            <Typography color="#d97706" fontWeight={700}>
              WHAT WE OFFER
            </Typography>

            <Typography variant="h3" fontWeight={800} mt={1}>
              Explore Our Products
            </Typography>

            <Typography color="text.secondary" mt={1}>
              Discover electrical and hardware essentials for your needs.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {productCategories.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid #eee",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 5,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <StorefrontIcon
                      sx={{ fontSize: 42, color: "#d97706", mb: 2 }}
                    />

                    <Typography variant="h6" fontWeight={700} mb={1}>
                      {product.name}
                    </Typography>

                    <Typography color="text.secondary" variant="body2">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button
              component={Link}
              to="/products"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
            >
              View All Products
            </Button>
          </Box>
        </Container>

        {/* CONTACT / VISIT SECTION */}
        <Box sx={{ bgcolor: "#173b68", color: "#fff", py: 7 }}>
          <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" fontWeight={800}>
                  Looking for Electrical & Hardware Products?
                </Typography>
                <Typography sx={{ mt: 1, color: "#ddd" }}>
                  Visit our store or contact us for assistance.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Button
                  fullWidth
                  href={`tel:${storeInfo.phone}`}
                  variant="contained"
                  size="large"
                  startIcon={<LocationOnIcon />}
                  sx={{ bgcolor: "#f59e0b", color: "#111" }}
                >
                  Contact SVEH
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <FooterPage />
    </>
  );
}

export default HomePage;
