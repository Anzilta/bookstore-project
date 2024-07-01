import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const HomePage = () => {
  // Dummy data for books (replace with actual data from your backend)
  const books = Array(20).fill().map((_, index) => ({
    id: index + 1,
    title: `Book ${index + 1}`,
    author: `Author ${index + 1}`,
    imageUrl: `https://via.placeholder.com/150?text=Book+${index + 1}`,
  }));

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Logo src="/path-to-your-logo.png" alt="Bookstore Logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore Library
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our Bookstore Library
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover our latest collection of books
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {books.map((book, id) => (
            <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
              <StyledCard>
                <StyledCardMedia
                  image={book.imageUrl}
                  title={book.title}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography>
                    by {book.author}
                  </Typography>
                </StyledCardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                  <Button size="small" color="primary">
                    Rent
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;