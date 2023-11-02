const axios  = require("axios");

const API_KEY = process.env.API_KEY

// Get the current date
const currentDate = new Date();

// Get the day of the month (1-31)
const day = currentDate.getDate();

// Get the month (0-11; 0 represents January, 11 represents December)
const month = currentDate.getMonth();

// Get the full year (e.g., 2023)
const year = currentDate.getFullYear();

// Add 1 to the month to get it as a 1-based index
const monthWith1BasedIndex = month + 1;

console.log("Day: " + day);
console.log("Month (1-based): " + monthWith1BasedIndex);
console.log("Year: " + year);


// get the newskeyword from request by frontend 
//and make a request to news API and send news data 
//in the response in json fomat 
const getNews = async (req, res) => {
        try {
            const keyword = req.params.keyword
            console.log(keyword)
            const axiosRes = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=${year}-${monthWith1BasedIndex-1}-${day}&sortBy=publishedAt&apiKey=${API_KEY}`)
    
            res.status(200).json(axiosRes.data)
        } catch (error) {
            res.status(400).json({error:"An error occured"})
        }
};

module.exports = { getNews };   
