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
    ', ProductVariant.Price, Product.Type from ProductVariant, Product, Size where ' +
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
  var vId = req.params.variantId;
  knex('ProductVariant').where({Id: vId}).then(function(v) {
    if (v.length > 0) {
      var price = v[0].Price;
      knex('Order')
        .insert({
          ProductVariantId: vId,
          Price: price,
          PurchaseDate: new Date()
        })
        .then(function(output) {
          res.json(output);
        })
    } else {
      res.json({error: true})
    }
  })
});

function orderFilterSQLGenerator(sizeId, type, isSum){
  var whereArray = [];
  var sql =  'SELECT ' +  (isSum ? 'SUM("Order".Price) as Total' : ('"Order".Price, "Order".PurchaseDate, Product.Name as Product' +
  ', Size.Name as Size, Product.Type')) + ' From "Order", Product, Size, "ProductVariant" where ' +
  '"Order".ProductVariantId = ProductVariant.Id and ProductVariant.ProductId = Product.Id ' +
  'and ProductVariant.SizeId = Size.Id';

  var selectSql = '';

  if(isU(sizeId)) sizeId = ALL;
  if(isU(type)) type = ALL;

  if (sizeId !== ALL) {
    selectSql = 'SizeId = ?';
    whereArray.push(sizeId);
  }

  if (type !== ALL) {
    if(selectSql !== '') selectSql += ' and ';
    selectSql += 'Product.Type = ?';
    whereArray.push(type);
  }

  if(selectSql !== '') sql += ' and ProductVariantId IN (SELECT Id From ProductVariant where ' + selectSql + ')';
  sql += ' ORDER BY "Order".PurchaseDate DESC'
  return {
    sql: sql,
    whereArray, whereArray,
  };
}

router.get('/order_filter/:sizeId?/:type?', function(req, res, next) {
  var sizeId = req.params.sizeId;
  var type = req.params.type;

  const sqlObject = orderFilterSQLGenerator(sizeId, type, false)

  knex.raw(sqlObject.sql, sqlObject.whereArray).then(function (rows){
    res.json(rows);
  });
});

router.get('/order_sum/:sizeId?/:type?', function(req, res, next) {
  var sizeId = req.params.sizeId;
  var productId = req.params.productId;

  const sqlObject = orderFilterSQLGenerator(sizeId, type, true);

  knex.raw(sqlObject.sql, sqlObject.whereArray).then(function (rows){
    res.json(rows);
  });
});

router.get('/view/sales/:sizeId/:type', function(req, res, next) {
  var sizeId = req.params.sizeId;
  var type = req.params.type;

  const sqlRecords = orderFilterSQLGenerator(sizeId, type, false);
  const sqlSum = orderFilterSQLGenerator(sizeId, type, true);

  Promise.all([
    knex.raw(sqlRecords.sql, sqlRecords.whereArray),
    knex.raw(sqlSum.sql, sqlSum.whereArray),
  ]).then(function(response){
    res.json({
      SUM: parseFloat(response[1][0].Total.toPrecision(12)),
      rows: response[0],
    });
  }).catch(function(e) {
    res.jsn({
      error: true,
      message: e,
    })
  })
})

module.exports = router;
