const express = require('express');
   const fetch = require('node-fetch');
   const app = express();
   const port = 3000;

   const databaseId = '18935dc5cf168109addbe15ddd7b32e6';
   const apiKey = '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';

   app.get('/api/notion', async (req, res) => {
       const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
           method: 'POST',
           headers: {
               'Authorization': `Bearer ${apiKey}`,
               'Content-Type': 'application/json',
               'Notion-Version': '2022-06-28'
           }
       });

       const data = await response.json();
       res.json(data.results);
   });

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
