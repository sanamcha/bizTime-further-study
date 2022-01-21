

const db = require("./db");


async function data() {
  await db.query("DELETE FROM invoices");
  await db.query("DELETE FROM companies");
  await db.query("SELECT setval('invoices_id_seq', 1, false)");

  await db.query(`INSERT INTO companies (code, name, description)
                    VALUES ('test1', 'Test1', 'sample testing1..'),
                           ('test2', 'Test2', 'sample tesing2..')`);

  const inv = await db.query(
        `INSERT INTO invoices (comp_code, amt, paid, add_date, paid_date)
           VALUES ('test1', 100, false, '2022-01-01', null), 
                  ('test2', 200, false, '2022-03-01', null)
           RETURNING id`);
}


module.exports = { data };