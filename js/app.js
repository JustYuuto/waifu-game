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

document.querySelector('.btn#left').addEventListener('click', () => {
    fetch('https://api.waifu.im/search').then(res => res.json()).then(data => {
        const img = data.images[0].url;
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgs.querySelector('.right-img').innerHTML = '';
        imgs.querySelector('.right-img').appendChild(imgElement);
    });
});
document.querySelector('.btn#right').addEventListener('click', () => {
    fetch('https://api.waifu.im/search').then(res => res.json()).then(data => {
        const img = data.images[0].url;
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgs.querySelector('.left-img').innerHTML = '';
        imgs.querySelector('.left-img').appendChild(imgElement);
    });
});

console.log('%cuwu~~', 'font-size: 4rem');
