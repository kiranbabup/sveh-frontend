import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { productCategories } from "../assets/content";

function ProductsPage() {
  return (
    <>
      <HeaderPage />
      <Container sx={{ py: 8, minHeight: "60vh" }}>
        <Typography variant="h3" fontWeight={800} mb={4}>
          Our Products
        </Typography>
        <Typography variant="h4" fontWeight={800} mb={4}>
          Coming soon! We are currently updating our product catalog. Please check back later.
        </Typography>
        <Typography variant="h5" fontWeight={700} mb={4}>
        </Typography>
        <Grid container spacing={3}>
          {productCategories.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {item.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterPage />
    </>
  );
}

export default ProductsPage;
