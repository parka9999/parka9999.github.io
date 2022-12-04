const image = ["0.jpeg", "1.jpeg", "2.jpeg"]

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bodyStyle = document.body.style;
bodyStyle.background = `url('img/${chosenImage}') no-repeat`;
bodyStyle.backgroundSize = 'cover';

