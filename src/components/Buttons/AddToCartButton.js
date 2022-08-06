import { Button, Flex, Text } from 'theme-ui';
import { theme } from '../../styles/theme';
import { ArrowIcon } from '../../assets/ArrowIcon';

export const AddToCartButton = ({ item }) => {
  // Display Loading if prop not available but allow displaying a $0 price
  const price = parseInt(item.price);
  const priceString = !isNaN(price) ? `$${price.toFixed(0)}` : 'Loading';
  const pricePerMeal = item.price / (item.periodWeeks * 15);
  // Handle periodWeeks missing or 0
  const perMealString =
    !isNaN(pricePerMeal) && isFinite(pricePerMeal)
      ? `$${pricePerMeal.toFixed(2)} per meal`
      : 'Loading price per meal';

  return (
    <Button
      sx={{
        ...theme.buttons.primary,
        fontSize: [1, 2],
        p: '11px 20px',
        display: 'grid',
        grid: '"tl tr" "bl br" / auto auto',
        gap: '0',
        justifyItems: 'flex-start',
        alignItems: 'center',
      }}>
      <Text sx={{ gridArea: 'tl' }}>{priceString}</Text>
      <Text
        sx={{
          gridArea: 'bl',
          fontSize: [0, 1],
        }}>
        {perMealString}
      </Text>
      <Flex
        sx={{
          gridArea: 'tr',
          justifySelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}>
        {/* Arbitrary margin added to visually center text */}
        <Text>Add To Cart</Text>
        <ArrowIcon />
      </Flex>
      <Text sx={{ gridArea: 'br', justifySelf: 'flex-end', fontSize: [0, 1] }}>
        Subscribe now, cancel anytime
      </Text>
    </Button>
  );
};
