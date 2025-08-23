const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const { message } = req.body;
  setTimeout(() => {
    res.json({ reply: `You said: "${message}". This is a mock AI reply.` });
  }, 1500);
});

app.listen(3001, () => console.log('✅ Mock API running on http://localhost:3001'));
