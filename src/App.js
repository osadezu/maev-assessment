
import './App.css';
import { Box, Button, Flex, ThemeProvider } from 'theme-ui';
import { Frame } from './components/Frame';
import { theme } from './styles/theme';
import { PrimaryHeader } from './components/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex my={6} sx={{
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
      }}>
        <PrimaryHeader>
          Component Testing
        </PrimaryHeader>
        <Flex sx={{
          justifyContent:'center', 
          alignItems:'center'
        }}>
          <Frame>
            {/* Put your components in here */}
            <Box my={2}>
              <Button>Example Button</Button>
            </Box>
            <Box my={2}>
              <Button>Example Button</Button>
            </Box>
          </Frame>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
