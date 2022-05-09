let sliderImg = document.querySelector(".mainblock-img");
const errText = document.querySelector(".errorText");
const titleMenuSearch = document.querySelector(".title-menu-search");
let mainBlock = document.querySelector(".main-mainblock");
const searchBlock = document.querySelector(".search-block");
const score = document.querySelector(".score");
const score2 = document.querySelector(".score2");

score.innerHTML = localStorage.getItem("score");
score2.innerHTML = localStorage.getItem("score");

function error() {
    errText.style.display = "block";
    setTimeout(() => errText.style.display = "none", 2000);
}

function sliderRandomImg() {
    sliderImg.src = `./img/for-slider/${Math.floor(Math.random() * 10) + 1}.jpg`;
}

function mainBlockOut() {
    mainBlock.innerHTML = sessionStorage.getItem("inner");
    sessionStorage.removeItem("inner");
    sliderImg = document.querySelector(".mainblock-img");
    mainBlock.style.justifyContent = "center";
    mainBlock.style.lineHeight = "25px";
    sliderImg.style.display = "inline-block";
}

function mainBlockChanger(...items) {
    sessionStorage.setItem("inner", mainBlock.innerHTML);
    sliderImg.style.display = "none";
    mainBlock.innerHTML = items.join("<br>");
    mainBlock.style.lineHeight = "25px";
    mainBlock.style.justifyContent = "flex-start";
}


function inputFocus() {
    searchBlock.style.display = "block";
}
function inputOffFocus() {
    searchBlock.style.display = "none";
}


let elementsArr = ['400v', '550v', '600v', '750v', '1000v', '800v', '500v', '1200v', 'eR', 'RGB', 'Old', '500mb', '1tb', '2tb', '3tb', '250mb', '5tb',
'PinkGaming', 'Vermillo Kamuru', 'Small', 'MacOS', 'RedGaming', 'WithSensor', 'Logicool', 'Varmillo Panda', 'Defender', 'Gorda', 'Dark Aris', 'RGB Gaming',
'Linking', 'Varmillo Sakura', 'RGB', 'HYPERPC VOLT', 'RGB', 'HYPERPC CYBER', 'Old', 'RGB', 'Old', 'Logitech', 'Samura', 'Logitech', 'RGB Gaming', 'Logitech',
'Old', 'Jedel', 'HackGaming', 'Gaming RGB', 'PinkGaming', 'SmallGaming', 'RGB White', 'Black Вакум', 'Black', 'WhitePink RGB','Green', 'REDBlack',
'Bluetooth AIRPORTS', 'Bluetooth', 'ASUS', 'MSI', 'Intel', 'ASUS ROG', 'ASUS', 'ASUS v7', 'CoreI3 10100', 'CoreI5 10600KF', 'CoreI7 9700',
'CoreI9 9000', 'AMD Ryzen5 3350GE', 'AMD FX', 'CoreI3 10100', 'CoreI5 10600KF', 'CoreI7 9700', 'CoreI9 9000', 'AMD Ryzen5 3350GE', 'AMD FX',
'Simple', 'Simple', 'HYPERX Kingston', 'HYPERX Predator', 'AMD Radeon Memory', 'Vengeance LP', 'FURY', '1tb', '2tb', '500mb', '250mb', 
'Intel UHD', 'Nvidia GRX1660Super', 'Nvidia RTX3090', 'Nvidia RTX2060', 'Nvidia RTX3090', 'Nvidia RTX3090ti', 'AMD killer', 'AMD RadeonProWX2100',
'Nvidia GTX1660Super', 'AMD RadeonHD7970', 'Nvidia RTX2060', 'Nvidia GTX750ti', 'Nvidia GTX750ti'
];


function searchFromArr(inputElem) {
    searchBlock.style.display = "block";
    elementsArr.forEach((key) => {
        if(inputElem.value == key) {
            searchBlock.innerHTML = inputElem.value;
        }
    });
}
