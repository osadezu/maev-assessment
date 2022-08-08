import { Button } from 'theme-ui';
import { theme } from '../../styles/theme';
import { ButtonActionText } from './common';

export const SecondaryButton = (props) => (
  <Button sx={{ ...theme.buttons.secondary }}>
    <ButtonActionText {...props} />
  </Button>
);
