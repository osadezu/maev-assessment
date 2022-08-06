import { Button, Flex } from 'theme-ui';
import { theme } from '../../styles/theme';

export const PrimaryButton = (props) => (
  <Button
    sx={{
      ...theme.buttons.primary,
      height: '60px',
      width: '100%',
    }}>
    <Flex sx={{ justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
      {props.children}
    </Flex>
  </Button>
);
