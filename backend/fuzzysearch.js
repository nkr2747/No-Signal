const book = require('./Book'); // Import your Mongoose model

async function fuzzySearchUsers(searchTerm) {
    try {
        const results = await book.find({
            title: { $regex: searchTerm, $options: 'i' } // Case-insensitive regex search
        });

        // Optional: Apply fuzzysearch library for additional matching logic
        if (results.length === 0) {
            const fuzzyResults = fuzzysearch.search(searchTerm, results.map(user => user.name));
            return fuzzyResults.map(result => results[result.index]); // Map fuzzy results back to documents
        }

        return results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = fuzzySearchUsers;
