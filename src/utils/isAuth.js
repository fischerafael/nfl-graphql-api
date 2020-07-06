require('dotenv').config()

const apiKey = process.env.API_KEY

export default function authentication(token) {
    if (!token) throw new Error('No token')     
    if (token !== apiKey) throw new Error('Invalid token')
}