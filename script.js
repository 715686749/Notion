const databaseId = '18935dc5cf168109addbe15ddd7b32e6';
   const apiKey = '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';

   async function fetchNotionData() {
       const response = await fetch('notion-data.json');
       const data = await response.json();
       return data;
   }

   function displayData(data) {
       const contentDiv = document.getElementById('content');
       data.forEach(item => {
           const itemDiv = document.createElement('div');
           itemDiv.className = 'item';
           itemDiv.innerHTML = `<h2>${item.properties.Name.title[0].plain_text}</h2>`;
           contentDiv.appendChild(itemDiv);
       });
   }

   fetchNotionData().then(data => displayData(data));
