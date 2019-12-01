import gql from 'graphql-tag';

export const CategoriesQuery = gql`
  query Categories(
    $where: CategoryWhereInput # $skip: Int = 0 # $first: Int = 2
  ) {
    categories(where: $where) {
      id
      image
      name
      totalProducts
    }
  }
`;

export const ToggleCarouselShowQuery = gql`
  mutation ToggleCarouselShow($show: Boolean!, $id: ID!) {
    updateCarousel(data: { show: $show }, where: { id: $id }) {
      show
    }
  }
`;
