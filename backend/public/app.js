document.querySelectorAll('.datatable').forEach(table => new DataTable(table, { pageLength: 10, language: { search: 'Quick search:' } }));
