const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll(
		(products) => {
			res.render(
				'shop/product-list.ejs',
				{
					prods: products,
					pageTitle: "Shop",
					path: "/products",
					hasProducts: products.length > 0,
					productCSS: true,
					activeShop: true
				}
			);
		}
	);
}

exports.getIndex = (req, res, next) => {
		const products = Product.fetchAll(
		(products) => {
			res.render(
				'shop/index.ejs',
				{
					prods: products,
					pageTitle: "Shop",
					path: "/",
					hasProducts: products.length > 0,
					productCSS: true,
					activeShop: true
				}
			);
		}
	);
}

exports.getCart = (req, res, next) => {
	res.render(
		'shop/cart.ejs',
		{
			pageTitle: "Your Cart",
			path: "/shop/cart",
			productCSS: true,
			activeShop: true
		}
	);
}

exports.getCheckout = (req, res, next) => {
	res.render(
		'shop/checkout.ejs',
		{
			pageTitle: "Checkout",
			path: "/shop/checkout",
			productCSS: true,
			activeShop: true
		}
	);
}