const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const listings = [
  { id: 1, title: '2BHK in Mumbai', address: 'Andheri', price: '₹35,000/mo' },
  { id: 2, title: '1BHK in Pune', address: 'Kothrud', price: '₹18,000/mo' },
];

app.get('/api/listings', (req, res) => {
  res.json(listings);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
