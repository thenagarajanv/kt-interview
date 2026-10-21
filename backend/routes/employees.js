const router = require('express').Router(); const { Employee } = require('../models');
router.get('/', async (req, res) => { const state = req.query.state || ''; res.render('employees', { employees: await Employee.findAll({ where: state ? { active: state === 'active' } : {}, order: [['name', 'ASC']] }), state }); });
router.get('/new', (req, res) => res.render('employee-form', { employee: {}, title: 'Add employee' }));
router.post('/', async (req, res) => { await Employee.create({ ...req.body, active: req.body.active === 'on' }); res.redirect('/employees'); });
router.get('/:id/edit', async (req, res) => res.render('employee-form', { employee: await Employee.findByPk(req.params.id), title: 'Edit employee' }));
router.put('/:id', async (req, res) => { await Employee.update({ ...req.body, active: req.body.active === 'on' }, { where: { id: req.params.id } }); res.redirect('/employees'); });
module.exports = router;
