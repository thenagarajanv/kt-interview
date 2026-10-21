const router = require('express').Router(); const { Category } = require('../models');
router.get('/', async (req, res) => res.render('categories', { categories: await Category.findAll({ order: [['name', 'ASC']] }) }));
router.post('/', async (req, res) => { await Category.create(req.body); res.redirect('/categories'); });
module.exports = router;
