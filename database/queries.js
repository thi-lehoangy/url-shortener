const pool = require("./pool");

const getAllUrls = async () => {
  const { rows } = await pool.query("SELECT * FROM url_mapping");
  return rows;
}

// const getRedirectCode = async (redirect_code) => {
//   const { row } = await pool.query("SELECT * FROM url_mapping WHERE redirect_code = $1", [redirect_code])
//   return row;
// }

const getLongUrl = async (redirect_code) => {
  const row = await pool.query("SELECT long_url FROM url_mapping WHERE redirect_code = $1 ", [redirect_code])
  return row
}

const shortenUrl = async (long_url, redirect_code) => {
  await pool.query("INSERT INTO url_mapping (long_url, redirect_code) VALUES ($1, $2)", [long_url, redirect_code]);
  return;
}

module.exports = {
    getAllUrls,
    shortenUrl,
    // getRedirectCode,
    getLongUrl
};
