const express = require('express');
const app = express();
app.use(express.json());

// Temporary in-memory storage for reports
const reports = [];

// Get all reports
app.get('/reports', (req, res) => {
  res.json(reports);
});

// Create a new report
app.post('/reports', (req, res) => {
  const report = { id: reports.length + 1, ...req.body };
  reports.push(report);
  res.status(201).json(report);
});

// Placeholder route for health check
app.get('/health', (req, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
