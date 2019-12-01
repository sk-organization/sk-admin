import gql from 'graphql-tag';

export const AdminFranchiseAreasQuery = gql`
  query AdminFranchiseAreas($where: AdminFranchiseAreaWhereInput!) {
    adminFranchiseAreas(where: $where) {
      id
      adminFranchise {
        franchise {
          user {
            name
            phone
          }
        }
      }
      commonName

      franchiseAreas {
        commonName
        franchise {
          user {
            name
          }
        }
      }
    }
  }
`;

export const AdminFranchiseAreaQuery = gql`
  query AdminFranchiseArea($adminFranchiseAreaId: ID!) {
    adminFranchiseArea(where: { id: $adminFranchiseAreaId }) {
      id
      commonName
      adminFranchise {
        id
        franchise {
          user {
            name
            email
            image
            phone
            location {
              city
              zipCode
              address1
              address2
            }
          }
        }
      }
      franchiseAreas {
        id
        commonName
        franchise {
          bankDetails {
            IFSC_CODE
            bankName
            accountNumber
          }
          user {
            name
            email
            image
            phone
          }
        }
      }
    }
  }
`;

export const FranchiseQuery = gql`
  query Franchise($franchiseId: ID!) {
    franchise(whrere: { id: $franchiseId }) {
      bankDetails {
        IFSC_CODE
        bankName
        accountNumber
      }
      user {
        name
        email
        image
        phone
        gender

        defaultLocation {
          city
          zipCode
          address1
          address2
        }
      }
    }
  }
`;
