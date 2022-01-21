/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({ connectionString: "postgresql:///biztime-test"});

client.connect();

module.exports = client;