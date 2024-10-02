const queries = require("./database/queries")
const services = require("./services")

const getAllUrls = async (req, res) => {
    const urls = await queries.getAllUrls();
    res.status(200).json("ALL URLS:" + urls.map(url => `\n${url.long_url} => ${url.redirect_code}`))
}

const getLongUrl = async (req, res) => {
    const redirect_code = req.params.redirect_code;
    try {
        const long_url = await services.getLongUrl(redirect_code)
        res.status(302)
        res.redirect(long_url)
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}

const shortenUrl = async (req, res) => {
    try {
        const [long_url, redirect_code] = [req.body.long_url, req.body.redirect_code]
        await services.shortenUrl(long_url, redirect_code)
        res.status(200).json(`${redirect_code} will be redirected to ${long_url}`)
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}

module.exports = { getAllUrls, getLongUrl, shortenUrl }