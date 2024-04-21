console.log('oh daddy~~');

const imgs = document.querySelector('.imgs');

fetch('https://api.waifu.im/search').then(res => res.json()).then(data => {
    const img = data.images[0].url;
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgs.querySelector('.left-img').appendChild(imgElement);
});

fetch('https://api.waifu.im/search').then(res => res.json()).then(data => {
    const img = data.images[0].url;
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgs.querySelector('.right-img').appendChild(imgElement);
});

console.log('uwu~~%c', 'font-size: 4rem');
