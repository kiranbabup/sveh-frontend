
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';
import { Container, Typography } from '@mui/material';

function CartPage() {
  return (
    <>
      <HeaderPage />
      <Container sx={{ py: 10, minHeight: '60vh' }}>
        <Typography variant="h3" fontWeight={800}>
          Shopping Cart
        </Typography>

        <Typography color="text.secondary" mt={2}>
          Your cart is currently empty.
        </Typography>
      </Container>
      <FooterPage />
    </>
  );
}

export default CartPage;
