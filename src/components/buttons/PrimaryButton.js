import { Button } from 'theme-ui';
import { theme } from '../../styles/theme';
import { ButtonActionText } from './common';

export const PrimaryButton = (props) => (
  <Button sx={{ ...theme.buttons.primary }}>
    <ButtonActionText {...props} />
  </Button>
);
