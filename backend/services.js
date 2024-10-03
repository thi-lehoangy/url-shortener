const db = require("./database/queries")

const getLongUrl = async (redirect_code) => {
    const longUrl = await db.getLongUrl(redirect_code)
    if (longUrl.rows[0]) {
        return longUrl.rows[0].long_url
    } else {
        throw new Error("URL not found")
    }
}

const shortenUrl = async (long_url, redirect_code) => {
    const longUrl = await db.getLongUrl(redirect_code)
    if (longUrl.rows.length > 0) {
        throw new Error ("Short URL is already used")
    } else {
        await db.shortenUrl(long_url, redirect_code)
    }
}

module.exports = {
    getLongUrl,
    shortenUrl
}