const posts = [
    {
        id: 1,
        author: {
            name: 'Phil Mangione',
            image: 'https://unsplash.it/300/300?image=15'
        },
        created: '06-25-2021',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/300?image=171',
        likes: 80
    },
    {
        id: 2,
        author: {
            name: 'Sofia Perlari',
            image: 'https://unsplash.it/300/300?image=10'
        },
        created: '09-03-2021',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=112',
        likes: 120
    },
    {
        id: 3,
        author: {
            name: 'Chiara Passaro',
            image: 'https://unsplash.it/300/300?image=20'
        },
        created: '05-15-2021',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=234',
        likes: 78
    },
    {
        id: 4,
        author: {
            name: 'Luca Formicola',
            image: ''
        },
        created: '04-03-2021',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=24',
        likes: 56
    },
    {
        id: 5,
        author: {
            name: 'Alessandro Sainato',
            image: 'https://unsplash.it/300/300?image=29'
        },
        created: '03-05-2021',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=534',
        likes: 95
    }
];

const postsListEl = document.querySelector('.posts-list');
postsListEl.innerHTML = '';

const postsWithNoAvatar = [];

posts.forEach( function(element) {

    if (!element.author.image) {
        postsWithNoAvatar.push(element.id);
    }

    let date = element.created.split('-');
    const month = date[0];
    const day = date[1];
    const year = date[2];
    date = `${day}-${month}-${year}`;
    
    const div = createPostEl(element, date);
    postsListEl.innerHTML += div;
} );

const postsEl = document.querySelectorAll('.post');

postsEl.forEach((post, index) => {
    const postID =  index + 1;
    let name = posts[index].author.name;
    const splittedName = name.split(' ');
    const [firstName, lastName] = splittedName;
    firstName.split('');
    lastName.split('');
    name = firstName[0] + lastName[0];

    if (postsWithNoAvatar.includes(postID)) {
        const postIcon = post.querySelector('.post-meta__icon');
        const img = post.querySelector('.profile-pic');

        const div = document.createElement('div');
        const span = document.createElement('span');

        div.classList.add('profile-pic-default');
        span.innerText = name;

        div.append(span)
        postIcon.append(div);
        img.remove();
    }
});

const likeButtonEls = document.querySelectorAll('.js-like-button');

const postIdWithLike = [];

likeButtonEls.forEach( function(element) {
    element.addEventListener('click', function() {
        this.classList.add('like-button--liked');
        const postID = this.dataset.postid;
        postIdWithLike.push(postID);
        
        const likeCounter = this.parentElement.nextElementSibling.firstElementChild;
        likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
        console.log(likeCounter);
    } );
} );

function createPostEl(post, date) {
    return `<div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${date}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div>
        </div>
    </div>`;
}