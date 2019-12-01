import gql from 'graphql-tag';

export const SubCategoriesQuery = gql`
  query subCategories(
    $where: SubCategoryWhereInput = {} # $skip: Int = 0 # $first: Int = 2
  ) {
    subCategories(where: $where) {
      id
      name
      image
      totalProducts
      category {
        name
      }
    }
  }
`;
