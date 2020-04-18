const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    status: true,
    data: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
