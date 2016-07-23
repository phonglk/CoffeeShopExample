var express = require('express');
var router = express.Router();

function isU(x) {
  return typeof x === "undefined";
}

var ALL = 'all';

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db.sqlite3"
  }
});

router.get('/', function(req, res, next) {
  res.json('Hello /api');
});

router.get('/product/list', function(req, res, next) {
  knex.select().from('Product').then(function (rows){
    res.json(rows);
  })
});

router.get('/size/list', function(req, res, next) {
  knex.select().from('Size').then(function (rows){
    res.json(rows);
  })
});

router.get('/product/list/variant', function(req, res, next) {
  knex.select().from('ProductVariant').then(function (rows){
    res.json(rows);
  })
});

router.get('/view/order', function(req, res, next) {
  Promise.all([
    knex.select().from('Product'),
    knex.select().from('Size'),
    knex.raw('Select ProductVariant.Id, ProductVariant.ProductId, Product.Name as ProductName, Size.Name as SizeName' +
    ', ProductVariant.Price from ProductVariant, Product, Size where ' +
    'ProductVariant.SizeId = Size.Id and ProductVariant.ProductId = Product.Id'),
  ]).then(function(response) {
    res.json({
      products: response[0],
      sizes: response[1],
      variants: response[2],
    })
  })
})

router.get('/product/:productId/:sizeId', function(req, res, next) {
  // size param checking is ignore here
  // as well as productId
  knex.select().from('ProductVariant').where({
    SizeId: req.params.sizeId,
    ProductId: req.params.productId,
  }).then(function (rows){
    res.json(rows);
  })
});

router.post('/order/:variantId', function(req, res, next) {
  knex('Order').insert({ProductVariantId: req.params.variantId, PurchaseDate: new Date()})
              .then(function(output) {
                res.json(output);
              })
});

router.get('/order_filter/:sizeId?/:productId?', function(req, res, next) {
  var sizeId = req.params.sizeId;
  var productId = req.params.productId;
  var whereArray = [];
  var sql = 'select * From "Order" ' //where ProductVariantId = (SELECT Id From ProductVariant where ProductId = ? and SizeId = ?)';
  var selectSql = '';

  if(isU(sizeId)) sizeId = ALL;
  if(isU(productId)) productId = ALL;

  if (sizeId !== ALL) {
    selectSql = 'SizeId = ?';
    whereArray.push(sizeId);
  }

  if (productId !== ALL) {
    if(selectSql !== '') selectSql += ' and ';
    selectSql += 'ProductId = ?';
    whereArray.push(productId);
  }

  if(selectSql !== '') sql += 'where ProductVariantId IN (SELECT Id From ProductVariant where ' + selectSql + ')';
  console.log(sql);
  knex.raw(sql, whereArray).then(function (rows){
    res.json(rows);
  });
});

module.exports = router;
