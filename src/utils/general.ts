import { Variation } from 'interfaces';

export const totalQuantityFromVariations = (variations: Variation[]) => {
  // @ts-ignore
  return variations.reduce(
    (acc, variation) => {
      return {
        quantity:
          acc.quantity +
          variation.sizes.reduce(
            (acc, size) => {
              return {
                quantity: acc.quantity + size.quantity,
              };
            },
            {
              quantity: 0,
            },
          ).quantity,
      };
    },
    { quantity: 0, sizes: [] },
  ).quantity;
};
