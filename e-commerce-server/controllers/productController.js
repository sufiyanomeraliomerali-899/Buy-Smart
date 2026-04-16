import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  if (Array.isArray(req.body)) {
    const productWithUser = req.body.map((item) => ({
      ...item,
      user: req.user._id,
    }));

    const products = await Product.insertMany(productWithUser);
    return res.json(products);
  }

  const { name, price, description, image } = req.body;

  const product = await Product.create({
    image: req.file ? `uploads/${req.file.filename}` : "",
    name,
    price,
    description,
    user: req.user._id,
  });

  res.json(product);
};

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json(products);
};
