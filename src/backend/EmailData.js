const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

const app = express();
app.use(bodyParser.json());

app.post('/submit-email', async (req, res) => {
  const { email } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: '/path/to/your/service-account-file.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = 'Your Spreadsheet ID';
    const range = 'Your Spreadsheet Range';

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [[email]],
      },
    });

    res.status(200).send('Email submitted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while submitting email');
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
