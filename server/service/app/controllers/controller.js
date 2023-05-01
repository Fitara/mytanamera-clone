const { Product, Category, Images, User, sequelize } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { token } = require("../helpers/jwt");

class Controller {
  static async register(req, res, next) {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "Admin",
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      });

      res.status(201).json({
        message: "Account created",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "EmailorPasswordRequired" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "EmailorPasswordRequired" };

      const checkPass = compare(password, user.password);
      if (!checkPass) throw { name: "EmailorPasswordRequired" };

      const payload = { id: user.id };

      const access_token = token(payload);

      res.status(200).json({
        access_token,
        id: user.id,
        name: user.username,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }

  static async products(req, res, next) {
    try {
      const products = await Product.findAll({
        attributes: { exclude: "categoryId" },
        include: [
          { model: Category },
          { model: Images },
        ],
      });

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  static async detail(req, res, next) {
    try {
      const product = await Product.findOne({
        where: { id: req.params.productId },
        attributes: { exclude: "categoryId" },
        include: [
          { model: Category },
          { model: Images },
        ],
      });
      console.log(product);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  static async postProduct(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const { imgUrl } = req.body;

      const newProduct = await Product.create(
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          mainImg: req.body.mainImg,
          categoryId: req.body.categoryId,
          authorId: req.user.id,
        },
        { transaction: t }
      );

      imgUrl.forEach((el) => (el.productId = newProduct.id));

      await Images.bulkCreate(imgUrl, { transaction: t });

      await t.commit();

      res.status(201).json({ message: `${req.body.name} has been added` });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) throw { name: "ProductNotFound" };

      await Product.destroy({ where: { id: req.params.id } });

      res.status(200).json({ message: `${product.name} has been deleted` });
    } catch (err) {
      next(err);
    }
  }

  static async putProduct(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const { imgUrl } = req.body;

      const product = await Product.findByPk(req.params.id);
      if (!product) throw { name: "ProductNotFound" };

      await Product.update(
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          mainImg: req.body.mainImg,
          categoryId: req.body.categoryId,
          authorId: req.user.id,
        },
        {
          where: { id: req.params.id },
          transaction: t,
        }
      );

      await Images.destroy({
        where: { productId: req.params.id },
        transaction: t,
      });

      imgUrl.forEach((el) => (el.productId = req.params.id));

      await Images.bulkCreate(imgUrl, { transaction: t });

      await t.commit();
      res.status(201).json({ message: `${product.name} has been edited` });
    } catch (err) {
      next(err);
    }
  }

  static async categories(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }

  static async postCategory(req, res, next) {
    try {
      const category = await Category.create({ name: req.body.name });

      res.status(201).json({ message: `${category.name} has been added.` });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) throw { name: "CatNotFound" };

      await Category.destroy({ where: { id: req.params.id } });

      res.status(200).json({ message: `${category.id} has been deleted.` });
    } catch (err) {
      next(err);
    }
  }

  static async putCategory(req, res, next) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) throw { name: "CatNotFound" };

      await Category.update(
        { name: req.body.name },
        { where: { id: req.params.id } }
      );

      res.status(200).json({ message: `${category.name} has been edited` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
