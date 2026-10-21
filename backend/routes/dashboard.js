const router = require('express').Router(); const { Asset } = require('../models');
router.get('/', async (req, res) => { const [total, stock, issued, scrap, value] = await Promise.all([Asset.count(), Asset.count({ where: { status: 'IN_STOCK' } }), Asset.count({ where: { status: 'ISSUED' } }), Asset.count({ where: { status: 'SCRAPPED' } }), Asset.sum('purchaseValue')]); res.render('dashboard', { total, stock, issued, scrap, value: Number(value || 0) }); });
module.exports = router;
