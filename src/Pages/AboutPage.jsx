
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';
import { Container, Typography, Box } from '@mui/material';
import { aboutContent, storeInfo } from '../assets/content';

function AboutPage() {
  return (
    <>
      <HeaderPage />
      <Container sx={{ py: 8, minHeight: '60vh' }}>
        <Typography variant="h3" fontWeight={800} mb={3}>
          {aboutContent.heading}
        </Typography>

        <Typography color="text.secondary" lineHeight={2}>
          {aboutContent.description}
        </Typography>

        <Box mt={4}>
          <Typography><b>Established:</b> {storeInfo.established}</Typography>
          <Typography><b>Founder:</b> {storeInfo.founder}</Typography>
          <Typography><b>Currently managed by:</b> {storeInfo.proprietor}</Typography>
          <Typography><b>Contact:</b> {storeInfo.phone}</Typography>
          <Typography><b>Address:</b> {storeInfo.address}</Typography>
        </Box>
      </Container>
      <FooterPage />
    </>
  );
}

export default AboutPage;
