# Maev FE Assessment

Candidate: Oscar Sánchez de Zulueta

## Notes on my implementation

- Some design parameters are assumed to apply to all buttons in the project, those changes were made directly in the theme.js dictionaries. Other component-specific parameters are inlined as sx attributes.
- The default button width was defined as 100% of parent, which seems to be the case in meetmaev.com
- The arrow icon was inserted as inline SVG for simplicity. This should be ok for a few isolated graphics, but if many different graphics are needed we could use SVGR to load SVG files directly. This might require CRA/webpack config changes to the project.
- In the Figma document, the Primary button default state does not appear to perfectly center the text + arrow on the width of the button. However, other boxed buttons do, so even spacing on both sides is assumed as the general intent.
- An arbitrary margin was added to the text container in some cases to visually center the text vertically.
- The tertiary button was assumed to behave like text and not take up the same amount of space as the boxed buttons. This is not apparent from the Figma file and I could not identify it on meetmaev.com so this would be a question for the design team.
- The Add To Cart Button styles are inlined in the component as they are more related to layout than theming. The component implements steps to handle cart states and missing data.
- Dummy functions and data were implemented in the App.js component to simulate the Add To Cart operation and demo the button states. Some console logs were left in on purpose to illustrate these operations.
- The SpinnerIcon svg implements an example of programmatic attributes making the component reusable and customizable.

## Design Reference

https://www.figma.com/file/NWsw5eZT2x3DBMHbCuH1Sw/CTA-assessment?node-id=2%3A359
