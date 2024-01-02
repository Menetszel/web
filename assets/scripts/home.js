const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Fetch content from Contentful
client.getEntries()
    .then(entries => {
        // Assuming you have an entry with a field named 'content'
        const content = entries.items[0].fields.content;
        document.getElementById('content-container').innerHTML = content;
    })
    .catch(error => console.error('Error fetching content from Contentful:', error));
