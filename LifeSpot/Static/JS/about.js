function getComment() {    
    let comment = {}
        
    comment.author = prompt("��� ��� ����� ?")
    if (comment.author == null) {
        return
    }
        
    comment.text = prompt("�������� �����")
    if (comment.text == null) {
        return
    }
       
    comment.date = new Date().toLocaleString()
        
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