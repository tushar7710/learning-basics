const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Khana Kha Lo</title>
       
    
    /* <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Nerko+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" /> */

    <style>
    html {
        scroll-behavior: smooth;
    }
    
    body {
        color: white;
        /* border-color: white; */
        font-family: 'Nerko One', cursive;
    }
    
    
    /* * {
        border: 1px solid rgb(34, 8, 8);
    } */
    
    #navi {
        top: 0px;
        background-color: rgba(8, 8, 8, 0.164);
        border-radius: 10px;
        display: flex;
        position: sticky;
    }
    
    .left {
        display: inline-block;
        text-align: center;
    }
    
    #logoimg {
        margin: 1px auto;
        filter: invert(100%);
        width: 100px;
        height: 100px;
    }
    
    
    /* * {
        border: 2px solid white;
    } */
    
    #lname {
        margin-left: 10px;
        margin-top: 0%;
        margin-bottom: 0%;
        color: white;
        font-size: 30px;
    }
    
    ul li a {
        color: white;
        text-decoration: none;
        transition: background-color 0.5s, border-radius 0.5s;
        margin: 0px;
        padding: 0px 30px;
    }
    
    ul li a:hover {
        border-radius: 20px;
        color: rgb(10, 1, 1);
        background-color: white;
    }
    
    ul li {
        /* flex-direction: column; */
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    
    ul {
        display: flex;
    }
    
    .mid {
        margin: auto;
        width: 45%;
        text-align: center;
        /* flex-direction: column; */
        font-size: 30px;
    }
    
    .right {
        padding: 0px;
        display: flex;
        margin: auto 10px;
        font-size: 30px;
        width: 400px;
        height: 40px;
        border-radius: 10px;
    }
    
    i {
        font-size: 20px;
    }
    
    #text {
        text-align: center;
        height: 40px;
        width: 300px;
        font-size: 25px;
    }
    
    .main {
        padding-top: 50px;
        text-align: center;
    }
    
    #wlc {
        font-family: 'Monoton', cursive;
        font-size: 80px;
    }
    
    #content {
        width: 50%;
        margin: auto;
        text-align: center;
        font-size: 40px;
    }
    
    .quote {
        margin: 180px auto;
        background-image: url('https://previews.123rf.com/images/romastudio/romastudio1603/romastudio160300280/54088843-healthy-food-background-studio-photo-of-different-fruits-on-white-wooden-table-high-resolution-produ.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        position: static;
        border-radius: 20px;
        display: block;
        width: 60%;
    }
    
    .quote {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    #comma {
        padding-top: 20px;
        padding-left: 20px;
        font-size: 0px;
        display: block;
    }
    
    #says {
        width: 95%;
        padding: 0px;
        text-align: center;
        font-size: 2.3vw;
    }
    
    #chef {
        display: flex;
        flex-direction: column;
        width: 16vw;
        margin: 0px auto;
        flex-wrap: wrap;
        padding-bottom: 60px;
        border-radius: 100px;
    }
    
    #bu {
        width: auto;
        display: flex;
        padding-bottom: px;
    }
    
    #bck1 {
        background: url(../img/background1.jpg) no-repeat center center/cover;
        position: relative;
        width: 100%;
        height: 1650px;
    }
    
    #service {
        background-image: url('https://wallpaperaccess.com/full/2564042.jpg');
        width: 100%;
        font-size: 40px;
        color: white;
        display: inline-block;
        /* display: flex;
        flex-direction: column; */
    }
    
    #our {
        /* height: 30px;
        text-align: center; */
        width: 100%;
        text-align: center;
        margin: auto;
        display: block;
    }
    
    .heading {}
    
    p.para {
        font-size: 1.8rem;
        margin: 0%;
    }
    
    .group1 {
        /* margin-left: 50px; */
        display: inline-block;
        width: 30%;
        text-align: center;
        margin-top: 50px;
        margin-left: 40px;
        margin-bottom: 50px;
    }
    
    .group1 img {
        height: 350px;
        width: 450px;
        border-radius: 10px;
        text-align: center;
    }
    
    p.cuisine,
    p.delivery,
    p.bulk,
    p.catherine {
        font-size: 30px;
    }
    
    h2 {
        margin: 0px;
    }
    
    #shead {
        color: white;
        font-size: 50px;
        height: 60px;
        text-align: center;
    }
    
    #sponsor {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 5px;
        z-index: -1;
        position: relative;
        background: url(../img/background3.jpg) no-repeat center center/cover;
        padding-bottom: 50px;
        margin: 0px;
    }
    
    .img {
        border-radius: 20px;
        height: 250px;
        width: 350px;
        padding: 10px;
        margin-bottom: 0px;
    }
    
    #contact {
        background: url(../img/background4.jpg) no-repeat center center/cover;
        display: flex;
        width: 100%;
        position: absolute;
        font-size: 30px;
        text-align: center;
    }
    
    #contactform {
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
        font-size: 30px;
        width: 100%;
    }
    
    #contactform input,
    #contactform textarea {
        width: 100%;
        padding: 10px;
        text-align: center;
        margin: 10px;
        border-radius: 10px;
        font-size: 20px;
    }
    
    #btn {
        font-size: 30px;
        border-radius: 5px;
    }
    
    input {
        font-family: cursive;
    }
    
    body {
        margin: 0px;
    }
    </style>
</head>

<body>
    <div id="bck1">
        <div id="navi">
            <div class="left">
                <div id="logo">
                    <img src="https://i.pinimg.com/originals/fd/80/ec/fd80ecec48eba2a9adb76e4133905879.png" id="logoimg">
                    <p id="lname">
                        KHANA KHA LO
                    </p>
                </div>


            </div>

            <div class="mid">
                <ul>
                    <li><a href="#bck1">HOME</a></li>
                    <li><a href="#service">SERVICES</a></li>
                    <li><a href="#sponsor">SPONSORS</a></li>
                    <li><a href="#contact">CONTACT US</a></li>

                </ul>
            </div>

            <div class="right">
                <input type="search" id="text" placeholder="Search Any Dishes">
                <button type="button" name="button" id="btn">
                <i class="fas fa-search" id="bu"></i>
            </button>
            </div>
        </div>

        <div class="main">
            <h1 id="wlc">
                WELCOME TO KHANA KHA LO
            </h1>
            <p id="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nemo qui esse vel soluta quo provident consequatur nihil iure commodi sed, obcaecati amet. Quibusdam quam blanditiis odit soluta animi unde doloremque neque, optio earum deleniti
                quasi beatae ex saepe ratione?</p>
        </div>

        <div class="quote">
            <p id="comma">
                <i class="fas fa-quote-left"></i>
            </p>
            <p id="says">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur officiis nihil quaerat rerum eligendi officia? Quis dolorum placeat earum?
            </p>
            <img src="https://www.deccanherald.com/sites/dh/files/article_images/2019/09/10/file76xz1iyv8pgqtohi7z7-1568057401.jpg" class="quote" id="chef">

        </div>
    </div>
    <div id="service">
        <h1 id="our">
            Our Services
        </h1>
        <div class="group1">
            <img src="img/multicrusine.jpg" class="cuisine" height="500px" width="650px">
            <h2 class="heading">
                Multiple Cuisines
            </h2>
            <p class="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nemo at repudiandae distinctio ex facilis!
            </p>
        </div>

        <div class="group1">
            <img src="img/delivery.jpg" class="delivery" height="500px" width="650px">
            <h2 class="heading">
                Home Delivery
            </h2>
            <p class="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nemo at repudiandae distinctio ex facilis!
            </p>
        </div>

        <div class="group1">
            <img src="img/bulk.jpg" class="bulk" height="500px" width="650px">
            <h2 class="heading">
                Bulk Order
            </h2>
            <p class="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nemo at repudiandae distinctio ex facilis!
            </p>



        </div>
    </div>
    <div id="sponsor">
        <h1 id="shead">Our Sponsors</h1>
        <div id="name">
            <img src="img/amazon.jpg" class="img">
            <img src="img/MDH.jpg" class="img">
            <img src="img/swiggy-.jpg" class="img">
            <img src="img/zomato.png" class="img">
            <img src="img/foodpanda.jpg" class="img">
        </div>
    </div>

    <div id="contact">
        <div id="contactform">
            <form id="">
                <h1 id="con">Contact Us</h1>
                <div class="form">
                    <label for="name">Name :</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name">
                </div>
                <div class="form">
                    <label for="name">Email :</label>
                    <input type="email" name="email" id="name" placeholder="Enter a Valid Mail">
                </div>
                <div class="form">
                    <label for="name">Number :</label>
                    <input type="number" name="number" id="name" placeholder="Enter Your Mobile Number">
                </div>

                <div class="form">
                    <label for="name">Message :</label>
                    <textarea name="message" id="message" cols="40" rows="10" placeholder="Share Your Thoughts With Us"></textarea>
                </div>
                <div class="form">
                    <button name="btn" id="btn">Submit</button>
                </div>
            </form>
        </div>


    </div>


</body>

</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});