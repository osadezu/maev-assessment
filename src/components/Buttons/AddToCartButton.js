import { useState, useEffect } from 'react';
import { Button, Flex, Grid, Text } from 'theme-ui';
import { theme } from '../../styles/theme';
import { ArrowIcon } from '../../assets/ArrowIcon';
import { SpinnerIcon } from '../../assets/SpinnerIcon';
import { CheckmarkIcon } from '../../assets/CheckmarkIcon';

export const AddToCartButton = ({ item, cartState, handleAddToCart }) => {
  const initialState = {
    enabled: false,
    priceString: 'Loading',
    perMealString: 'Loading price per meal',
    item: null,
  };
  const [buttonState, setButtonState] = useState(initialState);

  useEffect(() => {
    // Disable button if props not available
    const price = parseInt(item.price); // but allow displaying a $0 price
    const pricePerMeal = item.price / (item.periodWeeks * 15);
    if (!isNaN(price) && !isNaN(pricePerMeal) && isFinite(pricePerMeal)) {
      const newPriceString = `$${price.toFixed(0)}`;
      const newPerMealString = `$${pricePerMeal.toFixed(2)} per meal`;
      setButtonState((state) => ({
        ...state,
        enabled: true,
        priceString: newPriceString,
        perMealString: newPerMealString,
        item: item,
      }));
    }
  }, [item]);

  // Use 'activeCart' style if cart is not in 'Ready' state
  const stateStyle =
    cartState === 0
      ? { ...theme.buttons.primary }
      : { ...theme.buttons.activeCart };
  const buttonTextFilter = cartState === 0 ? 'opacity(100%)' : 'opacity(25%)';

  return (
    <Button
      onClick={(e) => handleAddToCart(e, buttonState.item)}
      disabled={!buttonState.enabled}
      sx={{
        ...stateStyle,
        fontSize: [1, 2],
        p: '11px 20px',
        position: 'relative',
      }}>
      <Grid
        sx={{
          filter: buttonTextFilter,
          display: 'grid',
          grid: '"tl tr" "bl br" / auto auto',
          gap: '0',
          justifyItems: 'flex-start',
          alignItems: 'center',
        }}>
        <Text sx={{ gridArea: 'tl' }}>{buttonState.priceString}</Text>
        <Text
          sx={{
            gridArea: 'bl',
            fontSize: [0, 1],
          }}>
          {buttonState.perMealString}
        </Text>
        <Flex
          sx={{
            gridArea: 'tr',
            justifySelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}>
          <Text>Add To Cart</Text>
          <ArrowIcon />
        </Flex>
        <Text
          sx={{ gridArea: 'br', justifySelf: 'flex-end', fontSize: [0, 1] }}>
          Subscribe now, cancel anytime
        </Text>
      </Grid>
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          fontSize: [2, 3],
        }}>
        {cartState === 1 && <SpinnerIcon width='32' height='32' />}
        {cartState === 2 && (
          <>
            <CheckmarkIcon />
            <Text>Added</Text>
          </>
        )}
      </Flex>
    </Button>
  );
};
