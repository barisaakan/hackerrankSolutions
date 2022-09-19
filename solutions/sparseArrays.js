function matchingStrings(strings, queries) {
    // Write your code here
    var resultsArray = [];
    queries.map(query => {
        resultsArray.push(strings.filter(string => string == query).length);
    })
    return resultsArray;
}
