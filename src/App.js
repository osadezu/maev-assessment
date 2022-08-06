import './App.css';
import { Box, Flex, ThemeProvider } from 'theme-ui';
import { Frame } from './components/Frame';
import { theme } from './styles/theme';
import { PrimaryHeader } from './components/Text';
import { PrimaryButton } from './components/buttons/PrimaryButton';
import { SecondaryButton } from './components/buttons/SecondaryButton';
import { TertiaryButton } from './components/buttons/TertiaryButton';
import { AddToCartButton } from './components/buttons/AddToCartButton';

function App() {
  // Placeholder data to test Add To Cart button
  const sampleItem = {
    price: 149.0,
    periodWeeks: 4,
  };

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
            <Box my={2} sx={{ width: '450px' }}>
              <AddToCartButton item={sampleItem} />
            </Box>
          </Frame>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
