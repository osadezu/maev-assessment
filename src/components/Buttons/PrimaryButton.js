import { Button, Text, Flex } from 'theme-ui';
import { theme } from '../../styles/theme';
import { ArrowIcon } from '../../assets/ArrowIcon';

export const PrimaryButton = (props) => (
  <Button
    sx={{
      ...theme.buttons.primary,
      width: '100%',
    }}>
    <Flex sx={{ justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      {/* Arbitrary margin added to visually center text */}
      <Text sx={{ mb: '2px' }} {...props} />
      <ArrowIcon sx={{ mt: '2px' }} />
    </Flex>
  </Button>
);
