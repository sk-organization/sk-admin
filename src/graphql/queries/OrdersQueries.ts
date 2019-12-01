import gql from 'graphql-tag';

export const OrdersQuery = gql`
  query Orders(
    $where: OrderWhereInput!
    $orderBy: OrderOrderByInput = createdAt_DESC
    $first: Int = 20
  ) {
    orders(where: $where, orderBy: $orderBy, first: $first) {
      id
      status
      adminSeen
      createdAt
      orderBy {
        gender
        image
        name
        createdAt
      }
      total
      totalProducts
      products {
        product {
          price
          subCategory {
            profitPercent
          }
        }
        selectedVariations {
          sizes {
            quantity
          }
        }
      }
    }
  }
`;

export const OrderQuery = gql`
  query Order($orderId: ID!) {
    order(where: { id: $orderId }) {
      id
      orderBy {
        name
        email
        image
        country
        phone
        createdAt
        gender
        skMoney
      }
      shippingAddress {
        city
        zipCode
        address1
        address2
      }
      status
      createdAt
      paymentMethod
      totalProducts
      total
      products {
        total
        franchise {
          user {
            name
          }
        }
        product {
          name
          price
          sellerPrice
          price
          discountPercent
          subCategory {
            name
            franchiseCommissionPercent
            profitPercent
          }
          seller {
            shopName
            shopLocation {
              city
              zipCode
              address1
              address2
            }
          }
          subCategory {
            name
          }

          variations {
            images
            sizes {
              name
              quantity
            }
          }
        }
        selectedVariations {
          color
          images
          sizes {
            name
            quantity
          }
        }
      }
    }
  }
`;
