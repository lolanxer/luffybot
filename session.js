const axios = require("axios");

const token = "b682c67383283818774c7a39012d25e3f864265df99a39f9983b89381db8fc1e802d76679a4785eb33ce308fc3d2879171916ea0431ff4b82ab3060bf1ccf887";

async function create(data) {
  try {
    const config = {
      method: 'post',
      url: 'https://hastebin.com/documents',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'  
      },
      data: JSON.stringify({ content: data })  
    };

    const response = await axios(config);
    return { id: response.data.key };  
  } catch (error) {
    throw new Error(`Error creating document: ${error.message}`);
  }
}

async function get(key) {
  try {
    const config = {
      method: 'get',
      url: `https://hastebin.com/raw/${key}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const response = await axios(config);
    return response.data
  } catch (error) {
    throw new Error(`Error getting document: ${error.message}`);
  }
}

module.exports = { create, get };
