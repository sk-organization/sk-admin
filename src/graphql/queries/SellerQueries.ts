import gql from 'graphql-tag';

export const SellersQuery = gql`
  query Sellers($where: SellerWhereInput!) {
    sellers(where: $where) {
      id
      user {
        name
        phone
        image
        location {
          city
          address1
          zipCode
        }
      }
      products {
        id
        name
        price
        variations {
          color
          sizes {
            name
            quantity
          }
          images
        }
        category {
          name
        }
        subCategory {
          name
        }
      }
      shopName
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;

export const SellerQuery = gql`
  query Seller($id: ID!) {
    seller(where: { id: $id }) {
      id
      user {
        name
        phone
        image
        email
        gender
        location {
          city
          address1
          zipCode
        }
      }
      products {
        id
        name
        price
        variations {
          color
          sizes {
            name
            quantity
          }
          images
        }
        category {
          name
        }
        subCategory {
          name
        }
      }
      shopName
      website
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;

export const ProductsQuery = gql`
  query sellerProducts($where: ProductWhereInput!) {
    products(where: $where, first: 20) {
      id
      name
      price
      sellerPrice
      variations {
        color
        sizes {
          name
          quantity
        }
        images
      }
      category {
        name
      }
      subCategory {
        name
      }
    }
  }
`;
