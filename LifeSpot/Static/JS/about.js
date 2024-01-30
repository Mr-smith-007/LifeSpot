function Comment() {	
	this.author = prompt("��� ��� ����� ?")
	if (this.author == null) {
		this.empty = true
		return
	}
	
	this.text = prompt("�������� �����")
	if (this.text == null) {
		this.empty = true
		return
	}	

	this.date = new Date().toLocaleString()
}


function addComment() {
	let comment = new Comment()
		
	if (comment.empty) {
		return;
	}	

	let enableLikes = confirm('��������� ������������� ��������� ��� �����?')

	if (enableLikes) {		
		let review = Object.create(comment)		
		review.rate = 0;		
		writeReview(review)
	} else {		
		writeReview(comment)
	}
}


const writeReview = review => {
	let likeCounter = '';
		
	if (review.hasOwnProperty('rate')) {
		likeCounter += '           <b style="color: chocolate">�������:</b>   ' + review.rate;
	}		

	document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
		`<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
		`<p>${review['text']}</p>` +
		'</div>';
}