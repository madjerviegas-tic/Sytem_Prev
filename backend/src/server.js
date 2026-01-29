const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const computerRoutes = require('./routes/computerRoutes');
const importRoutes = require('./routes/importRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/computers', computerRoutes);
app.use('/api/import', importRoutes);
app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
