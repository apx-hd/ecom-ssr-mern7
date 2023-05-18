const express = require("express");
const productData = require("../data/products.json");

//Initialize router object
const router = express.Router();

router.get("/", (req, res) => {
  const { category, minprice } = req.query;
  //Apply filter here
  if (category && minprice) {
    const filteredData = productData.filter((element) => {
      return element.category === category && element.price >= minprice;
    });
    // res.json(filteredData);
    res.render('index', {data : filteredData})
  } else if (category) {
    const filteredData = productData.filter((element) => {
      return element.category === category;
    });
    // res.json(filteredData);
    res.render('index', {data : filteredData})
  } else if (minprice) {
    const filteredData = productData.filter((element) => {
      return element.price >= minprice;
    });
    // res.json(filteredData);
    res.render('index', {data : filteredData})
  } else {
    // res.json(productData);
    res.render('index', {data : productData})
  }

});

router.get("/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const product = productData.find(
    (product) => product.id === Number(productID)
  );
  res.json(product ? product : "Index Not Found");
});

router.post("/", (req, res) => {
  res.send("This api will create product in database");
});

router.put("/:productID", (req, res) => {
  res.send("This api will replace product in database");
});

router.patch("/:productID", (req, res) => {
  res.send("This api will update product in database");
});

router.delete("/:productID", (req, res) => {
  res.send("This api will delete product in database");
});

module.exports = router;
