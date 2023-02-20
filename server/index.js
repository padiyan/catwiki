require('dotenv').config();
const path = require('path');
const express = require("express");
const axios = require('axios');
const bunyan = require('bunyan');

const log = bunyan.createLogger({name: "Catwiki"});
const PORT = process.env.PORT || 3001;

axios.defaults.headers.common['x-api-key'] = `${process.env.API_KEY}`;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

app.get("/breeds", async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/breeds`)
    const breeds = data.map(({ id, name, image }) => ({ id, name, image }))
    res.json({ breeds: breeds.filter(breed => breed.image ? true : false ) });
  }
  catch(error) {
    log.info(error);
    res.end();
  }
});

app.get("/breed/:breedId", async (req, res) => {
  const { breedId } = req.params
  try {
      const { data: breeds } = await axios.get(`${process.env.BASE_URL}/breeds`)
      const { data: image } = await axios.get(`${process.env.BASE_URL}/images/search?breed_ids=${breedId}`)
      const { data: images } = await axios.get(`${process.env.BASE_URL}/images/search?limit=10&breed_ids=${breedId}&api_key=${process.env.API_KEY}`)
      
      const [ breed ] = breeds.filter(({id}) => id === breedId)
      const [ photo ] = image.map(({id, url}) => ({id, url}))
      const photos = images.map(({id, url}) => ({id, url}))
      
      res.json({
        details: {
          ...breed,
          photo,
          photos
        }
      });
  }
  catch (error) {
    log.info(error);
    res.end();
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});