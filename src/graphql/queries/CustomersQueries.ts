import gql from 'graphql-tag';

export const OrdersQuery = gql`
  query Users($where: UserWhereInput!) {
    users(where: $where) {
      id
      name
      email
      image
      country
      phone
      location {
        city
        zipCode
        address1
        address2
      }
      gender
    }
  }
`;

export const UserQuery = gql`
  query User($userId: ID!) {
    user(where: { id: $userId }) {
      id
      name
      email
      image
      country
      phone
      location {
        city
        zipCode
        address1
        address2
      }
      gender
    }
  }
`;

export const CartsQuery = gql`
  query Carts($where: CartWhereInput!) {
    carts(where: $where) {
      id
      total
      totalProducts
      product {
        id
        image
        name
        price
      }
      selectedVariations {
        id
        color
        sizes {
          id
          name
          quantity
        }
        images
      }
    }
  }
`;
