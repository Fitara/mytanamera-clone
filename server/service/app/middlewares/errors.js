const errors = async function (err, req, res, next) {
  console.log(err, "<< Read this errors >>>>>>>>>>>>>>>>>");
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === "EmailorPasswordRequired") {
    res.status(401).json({ message: "Invalid email or password" });
  } else if (err.name === "JsonWebTokenError" || err.name === "InvalidToken") {
    res.status(401).json({ message: "Invalid token" });
  } else if (err.name === "ProductNotFound") {
    res.status(404).json({ message: "Product not found" });
  } else if (err.name === "CatNotFound") {
    res.status(404).json({ message: "Category not found" });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errors;
