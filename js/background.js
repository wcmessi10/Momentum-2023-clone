const images=[
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"
];

const choiceImage = images[Math.floor(Math.random()*images.length)];
console.log(choiceImage);

const bgImage = document.createElement("img");

bgImage.src=`img/${choiceImage}`

document.body.appendChild(bgImage);
//html이 아닌 자바에서 만든 element를 넣고싶다면 appendChild(만든 element)메소드 사용