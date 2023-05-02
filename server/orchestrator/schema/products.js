const axios = require("axios");
const URL_Express = process.env.USER_URL 
const URL_MONGO = process.env.USER_URL
const redis = require('../config/redis')

const productsDefs = `#graphql

    type Categories {
      id: Int
      name: String
    }

    type Products {
        id: Int
        name: String
        slug: String
        description: String
        price: Int
        mainImg: String
        Category: Categories
    }

    type Images {
      id: Int
      productId: Int
      imgUrl: String
    }

    type Product {
      id: Int
      name: String
      slug: String
      description: String
      price: Int
      mainImg: String
      Category: Categories
      Author: User
      Images: [Images]
    }

    type User {
      _id: String
      username: String
    }

    type Query {
        products: [Products]
        user: [User]
        detailProduct(id: Int) : Product
    }  

`;

const productsResolver = {
  Query: {
    products: async () => {
      try {
        const productCache = await redis.get('app:products');

        if (productCache) {
          return JSON.parse(productCache);
        }

        const { data } = await axios({
          method: "GET",
          url: URL_Express + "/products",
        });

        await redis.set('app:products', JSON.stringify(data));

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    user: async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: URL_MONGO + "/users",
        });

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    detailProduct: async (parent, args) => {
      try {
        const { data } = await axios({
          url: `${URL_Express}/products/${args.id}`,
          method: "GET",
        });

        const { data: author } = await axios({
          url: `${URL_MONGO}/users`,
        });

        author.forEach((elAuthor) => {
          if (data.authorId == elAuthor._id) {
            data.Author = elAuthor;
          }
        });

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { productsResolver, productsDefs };
