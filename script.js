randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomPictures1 = `./images/dice${randomNumber1}.png`
const randomPictures2 = `./images/dice${randomNumber2}.png`

const img1 = document.querySelector(".img1")
img1.setAttribute("src", randomPictures1)

const img2 = document.querySelector(".img2")
img2.setAttribute("src", randomPictures2)

const titleChange = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
    titleChange.innerHTML = "Player 1 Win the Game"
} else if (randomNumber1 == randomNumber2) {
    titleChange.innerHTML = "Draw"
} else {
    titleChange.innerHTML = "Player 2 Win the Game"
}