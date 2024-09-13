import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/personal-ppt', (req, res) => {
  const targetUrl = 'https://www.google.com';

  res.redirect(targetUrl);
});

app.get('/qr-code', (req, res) => {
    const targetUrl = 'https://www.google.com';
  
    res.redirect(targetUrl);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
