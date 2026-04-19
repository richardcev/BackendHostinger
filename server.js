const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    console.log(`Payload received - Name: ${name}, Email: ${email}, Message: ${message}`);

    res.json({ 
        success: true,
        message: `Data from ${name} processed successfully.` 
    });
});

app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});