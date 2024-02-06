function Comment() {
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    this.text = prompt("Оставьте отзыв")
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

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

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
        let commentId = Math.random();
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}


function addLike(id) {
    let element = document.getElementById(id);

    let array = element.innerText.split(' ')

    let resultNum = parseInt(array[array.length - 1], 10);

    resultNum += 1

    array[array.length - 1] = `${resultNum}`

    element.innerText = array.join(' ')
}



let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let initMouseX;
var currSlide = 1;
let isMonitored;
let distance = 0;
let slides = document.getElementsByClassName("mySlides");

function startListen() {
    console.log('startListen');
    showSlides(currSlide);
    ssContainer = document.getElementById('slideContainer');

    ssContainer.addEventListener('mousedown', (event) => {
        event.preventDefault();
        console.log('mouse is down');
        isMonitored = true;
        initMouseX = event.clientX;
        ssContainer.addEventListener('mousemove', (e) => {
            let currentMouseX = e.clientX;
            if (isMonitored) {
                distance = currentMouseX - initMouseX;
                let trans = 'translateX(' + distance + 'px)';
                for (i = 0; i < slides.length; i++) {
                    if (slides[i].style.display == "block") {
                        currSlide = i + 1;
                    }
                }

                slides[currSlide - 1].style.transform = trans;     
                if (currentMouseX - initMouseX < -200) {
                    initMouseX = currentMouseX;
                    plusSlides(1);
                    currSlide += 1;
                    if (currSlide > 4) { currSlide = 1 }
                }
                if (currentMouseX - initMouseX > 200) {
                    initMouseX = currentMouseX;
                    plusSlides(-1);
                    currSlide -= 1;
                    if (currSlide < 1) { currSlide = 4 }
                }
            }
        });
        ssContainer.addEventListener('mouseup', (e) => {
            isMonitored = false;
            slides[currSlide - 1].style.transform = "";
        });

        ssContainer.addEventListener('mouseleave', (e) => {
            isMonitored = false;
            slides[currSlide - 1].style.transform = "";
        });


    });

    ssContainer.addEventListener('mouseup', (evt) => { evt.preventDefault(); console.log('mouse is up'); });
}