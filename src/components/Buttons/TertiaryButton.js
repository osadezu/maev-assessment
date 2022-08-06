import { Button } from 'theme-ui';
import { theme } from '../../styles/theme';

export const TertiaryButton = (props) => (
  <Button sx={{ ...theme.buttons.tertiary }} {...props} />
);
