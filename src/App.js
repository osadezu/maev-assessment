import './App.css';
import { Box, Flex, ThemeProvider } from 'theme-ui';
import { Frame } from './components/Frame';
import { theme } from './styles/theme';
import { PrimaryHeader } from './components/Text';
import { PrimaryButton } from './components/buttons/PrimaryButton';
import { SecondaryButton } from './components/buttons/SecondaryButton';

function App() {
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
          </Frame>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
