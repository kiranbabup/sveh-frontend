
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function LoginPage() {
  return (
    <>
      <HeaderPage />
      <Container maxWidth="sm" sx={{ py: 10, minHeight: '60vh' }}>
        <Box sx={{ p: 4, boxShadow: 3, borderRadius: 3 }}>
          <Typography variant="h4" fontWeight={800} mb={3}>
            Login
          </Typography>

          <TextField
            fullWidth
            label="Mobile Number / Email"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />

          <Button fullWidth variant="contained" sx={{ mt: 3 }}>
            Login
          </Button>
        </Box>
      </Container>
      <FooterPage />
    </>
  );
}

export default LoginPage;
