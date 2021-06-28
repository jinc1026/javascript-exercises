const getTheTitles = function(books) {
	const titles = books.map(function(book){
		return book.title;
	});
	
	return titles;
};

module.exports = getTheTitles;
