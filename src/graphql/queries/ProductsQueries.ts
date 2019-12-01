import gql from 'graphql-tag';

export const ProductsQuery = gql`
  query Products($term: String!) {
    products(where: { name_contains: $term }) {
      id
      name
      price
      sellerPrice
      isApproved
      discountPercent
      createdAt
      updatedAt
      description
      viewed
      variations {
        sizes {
          name
          quantity
        }
        images
      }
      category {
        id
        name
      }
      subCategory {
        id
        name
      }
      seller {
        shopName
        user {
          name
        }
      }
      tags {
        id
        name
      }
    }
  }
`;

export const ProductQuery = gql`
  query Product($productId: ID!) {
    product(where: { id: $productId }) {
      id
      name
      price
      images
      sellerPrice
      discountPercent
      returnableSKMoney
      viewed
      description
      deliveryWithin
      isApproved
      featured
      available
      isSkMoneyUsable
      createdAt
      updatedAt
      dispatchDuration
      deliveryWithin
      dispatchDuration
      discountPercent
      seller {
        isTrusted
        website
        shopName
        landlineNumber
        user {
          id
          name
          email
          phone
        }
        bankDetails {
          IFSC_CODE
          bankName
          accountNumber
        }
        shopLocation {
          city
          zipCode
          address1
          address2
        }
      }
      category {
        name
      }
      subCategory {
        name
      }
      tags {
        name
      }
      variations {
        color
        sizes {
          name
          quantity
        }
        images
      }
    }
  }
`;
