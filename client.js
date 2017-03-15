// $(document).ready(function(){
			var selected = "";
			$(document).on('click', '.item', function() {
				selected = $(this).data('i')
				console.log("Selected " + $(this).data('i'));
				// if ()	
					$(this).css('background-color', '#a2def2');
			});

			function search_books() {
				var term = $("[name='title']").val().trim();
				console.log(term);
				var params = {};
				var url = 'https://www.googleapis.com/books/v1/volumes';
				params['key'] = 'AIzaSyAj_HMGjsSIJhj960s9AIDAJMIEYwzNYoI';
				params['maxResults'] = 10;
				params['q'] = term;
				url += '?' + $.param(params);
				$.getJSON(url, function(data) {
					console.log(data);
					$('#foundBooks').empty();						
					for (var i = 0; i < 10; i++) {
						console.log(data.items[i].volumeInfo);
						var pic = $('<img/>')
							.attr('src', data.items[i].volumeInfo.imageLinks.thumbnail)
							.css('display', "inline-block");
						var text = $('<div/>')
							.css('display', "inline-block")
							.html("<h1>" + data.items[i].volumeInfo.title + "</h1><p>" + data.items[i].volumeInfo.authors[0] + "</p><p>Page Count: " + data.items[i].volumeInfo.pageCount + "</p><p>ISBN: " + data.items[i].volumeInfo.industryIdentifiers[1].identifier + "</p>");
						var item = $('<div/>')
							.attr('class', "item")
							.css('cursor', "pointer")
							.data('i', i)
							.append(pic)
							.append(text);
						$('#foundBooks').append(item);
					}
			// var template = "";
			// 	{{#each book}}
			// 		<div class="item" cursor="pointer" data-i="{{@index}}">
			// 			<img src="{{pic}}" alt="book-image">
			// 			<div display="inline-block">
			// 				<h1>{{title}}</h1>	
			// 			</div>
			// 		</div>
			// 	{{/each}}

			// var data =
			// 	{
			// 		"title": data.items[i].volumeInfo.title,
			// 		"isbn": data.items[i].volumeInfo.industryIdentifiers[1].identifier,
			// 		"pageCount": data.items[i].volumeInfo.pageCount,
			// 		"author": data.items[i].volumeInfo.authors[0],
			// 		"pic": data.items[i].volumeInfo.imageLinks.thumbnail
			// 	};
				}); // end of getJSON 
			}; // search_books

		// }); // document.ready


