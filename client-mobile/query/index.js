import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      Category {
        name
        id
      }
      slug
      price
      name
      mainImg
      id
      description
    }
  }
`;

export const GET_DETAIL = gql`
  query DetailProduct($detailProductId: Int) {
    detailProduct(id: $detailProductId) {
      slug
      price
      name
      mainImg
      id
      description
      Images {
        productId
        imgUrl
        id
      }
      Category {
        name
        id
      }
      Author {
        username
        _id
      }
    }
  }
`;
