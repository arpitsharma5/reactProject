const Search = require('./search');
const data = ['apple', 'banana', 'grape', 'banana', 'orange', 'banana'];
const searcher = new Search(data);

// Listener for successful search
searcher.on('searchComplete', (result) => {
  console.log(`Search successful for '${result.query}': ${result.count} occurrences found.`);
});

// Listener for error during search
searcher.on('error', (err) => {
  console.error('Search failed:', err.message);
});

// searcher.search();
// Perform search for 'banana'
// searcher.search('banana');
//
// // Perform search for 'kiwi' (not in the list)
searcher.search('kiwi');