import { Text, Flex } from 'theme-ui';
import { ArrowIcon } from '../../assets/ArrowIcon';

export const ButtonActionText = (props) => (
  <Flex sx={{ justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
    {/* Arbitrary margin added to visually center text */}
    <Text sx={{ mb: '2px' }} {...props} />
    <ArrowIcon sx={{ mt: '2px' }} />
  </Flex>
);
