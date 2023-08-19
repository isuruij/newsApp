const axios  = require("axios");

const API_KEY = process.env.API_KEY


// get the newskeyword from request by frontend 
//and make a request to news API and send news data 
//in the response in json fomat 
const getNews = async (req, res) => {
        try {
            const keyword = req.params.keyword
            console.log(keyword)
            const axiosRes = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2023-07-19&sortBy=publishedAt&apiKey=${API_KEY}`)
    
            res.status(200).json(axiosRes.data)
        } catch (error) {
            res.status(400).json({error:"An error occured"})
        }
};

module.exports = { getNews };   
