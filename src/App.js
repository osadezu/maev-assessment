import './App.css';
import { Box, Flex, ThemeProvider } from 'theme-ui';
import { Frame } from './components/Frame';
import { theme } from './styles/theme';
import { PrimaryHeader } from './components/Text';
import { PrimaryButton } from './components/buttons/PrimaryButton';
import { SecondaryButton } from './components/buttons/SecondaryButton';
import { TertiaryButton } from './components/buttons/TertiaryButton';
import { AddToCartButton } from './components/buttons/AddToCartButton';
import { useState } from 'react';

function App() {
  // Placeholder data for demo
  const sampleItem = {
    id: 'XYZ123',
    price: 149.0,
    periodWeeks: 4,
  };

  // Dummy cart state for demo
  const cartStates = ['Ready', 'Adding', 'Added'];
  const [cartState, setCartState] = useState(0);

  // Dummy add to cart handler for demo
  const handleAddToCart = (e, item) => {
    console.log(e.target);
    console.log(`Item added to cart: ${item.id}`);
    setCartState(1);

    // BAD! for demo only
    setTimeout(() => {
      setCartState(2);
      setTimeout(() => {
        setCartState(0);
      }, 1000);
    }, 1500);
  };

  console.log(cartStates[cartState]);

  return (
    <ThemeProvider theme={theme}>
      <Flex
        my={6}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PrimaryHeader>Component Testing</PrimaryHeader>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Frame>
            {/* Put your components in here */}
            {/* I gave the containers an arbitrary width to illustrate the framed buttons taking up 100% of parent */}
            <Box my={2} sx={{ width: '300px' }}>
              <PrimaryButton>Primary Button</PrimaryButton>
            </Box>
            <Box my={2} sx={{ width: '300px' }}>
              <SecondaryButton>Secondary Button</SecondaryButton>
            </Box>
            <Box my={3} sx={{ width: '300px', textAlign: 'center' }}>
              <TertiaryButton>See Details</TertiaryButton>
            </Box>
            <Box my={2} sx={{ width: '360px' }}>
              <AddToCartButton
                item={sampleItem}
                cartState={cartState}
                handleAddToCart={handleAddToCart}
              />
            </Box>
          </Frame>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
