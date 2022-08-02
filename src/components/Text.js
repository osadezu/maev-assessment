import { Text } from "theme-ui";
import { theme } from "../styles/theme";

export const PrimaryText = (props) => <Text {...props} sx={{
    ...theme.text.bodyPrimary
}}/>

export const PrimaryHeader = (props) => <Text {...props} sx={{
  ...theme.headings.heading1.primary,
  fontSize:[4,5]
}}/>