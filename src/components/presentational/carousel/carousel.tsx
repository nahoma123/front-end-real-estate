import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CarouselItem = styled(Paper)({
  position: 'relative',
  '&:hover img': {
    filter: 'blur(4px)',
  },
});

const CarouselImage = styled('img')({
  transition: 'filter 0.3s ease-in-out',
});

const CarouselOverlay = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 2,
  padding: '1rem',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(4px)',
});

const AdvCarousel: React.FC = () => {
  const carouselItems = [
    {
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80",
      title: "Slide 1",
      description: "Description for slide 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80",
      title: "Slide 2",
      description: "Description for slide 2",
    },
    // Add more slides as needed
  ];

  return (
    <Container maxWidth="lg">
      <Carousel>
        {carouselItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </Container>
  );
};

const Item: React.FC<{ item: any }> = ({ item }) => {
  return (
    <CarouselItem>
      <CarouselImage src={item.image} alt={item.title} />
      <CarouselOverlay>
        <Typography variant="h5" gutterBottom color="white">
          {item.title}
        </Typography>
        <Typography variant="body1" color="white">
          {item.description}
        </Typography>
        <Button className="CheckButton" variant="contained" color="primary">
          View
        </Button>
      </CarouselOverlay>
    </CarouselItem>
  );
};

export default AdvCarousel;