//CREATE CLASS FOR LATEST CARS
class CarData {
    display(images, name, price, btn, link) {

        this.images = images;
        this.name = name;
        this.price = price;
        this.btn = btn;
        this.link = link;
    }
}
// CREATE CHILD CLASS FOR Lakh01 CAR
class Lakh01 extends CarData {
    constructor() {
        super();
    }
}

//CREATE CHILD CLASS FOR Lakh02 CAR
class Lakh02 extends Lakh01 {
    constructor() {
        super();
    }
}

//CREATE CHILD CLASS FOR Lakh03 CAR
class Lakh03 extends Lakh02 {
    constructor() {
        super();
    }
}
//CREATE CHILD CLASS FOR Trusted CAR
class Trusted extends Lakh03 {
    constructor() {
        super();
    }
}




//OBJECT AND DATA FOR Lakh01 CAR
var car01 = new Lakh01();
car01.display("images/budegetcar/car02.webp", "Hyundai i 20", "Starting @ Rs2 Lakh", "View latets offers", "first");
var car02 = new Lakh01();
car02.display("images/budegetcar/car04.webp", "Maruti Swift", "Starting @ Rs1.25 Lakh", "View latets offers", "sec");
var car03 = new Lakh01();
car03.display("images/budegetcar/car01.webp", "Maruti Baleno", "Starting @ Rs3 Lakh", "View latets offers", "third");
var car04 = new Lakh01();
car04.display("images/budegetcar/car03.webp", "Tata Altroz", "Starting @ Rs1.1 Lakh", "View latets offers", "forth");


var car01_arr = [car01, car02, car03, car04];


//OBJECT AND DATA FOR SADEN CAR
var car01 = new Lakh02();
car01.display("images/budegetcar/car01.webp", "Hyundai i 20", "Starting @ Rs5 Lakh", "View latets offers", "first");
var car02 = new Lakh02();
car02.display("images/budegetcar/car02.webp", "Maruti Swift", "Starting @ Rs5.05 Lakh", "View latets offers", "");
var car03 = new Lakh02();
car03.display("images/budegetcar/car04.webp", "Maruti Baleno", "Starting @ Rs5 Lakh", "View latets offers", "");
var car04 = new Lakh02();
car04.display("images/budegetcar/car02.webp", "Tata Altroz", "Starting @ Rs5 Lakh", "View latets offers", "");

var car02_arr = [car01, car02, car03, car04];


//OBJECT AND DATA FOR Lakh03 CAR
var car01 = new Lakh03();
car01.display("images/budegetcar/car04.webp", "Hyundai i 20", "Starting @ Rs10.25 Lakh", "View latets offers", "first");
var car02 = new Lakh03();
car02.display("images/budegetcar/car03.webp", "Maruti Swift", "Starting @ Rs10.4 Lakh", "View latets offers", "");
var car03 = new Lakh03();
car03.display("images/budegetcar/car01.webp", "Maruti Baleno", "Starting @ Rs10.49 Lakh", "View latets offers", "");
var car04 = new Lakh03();
car04.display("images/budegetcar/car02.webp", "Tata Altroz", "Starting @ Rs10.25 Lakh", "View latets offers", "");


var car03_arr = [car01, car02, car03, car04];



//OBJECT AND DATA FOR Trusted CAR
var car01 = new Trusted();
car01.display("images/budegetcar/car02.webp", "Hyundai i 20", "6.79 - 11.32 Lakh", "View latets offers", "first");
var car02 = new Trusted();
car02.display("images/budegetcar/car01.webp", "Maruti Swift", "5.73 - 8.41 Lakh", "View latets offers", "");
var car03 = new Trusted();
car03.display("images/budegetcar/car04.webp", "Maruti Baleno", "5.90 - 9.10 Lakh", "View latets offers", "");
var car04 = new Trusted();
car04.display("images/budegetcar/car03.webp", "Tata Altroz", "5.69 - 9.45 Lakh", "View latets offers", "");


var trust_arr = [car01, car02, car03, car04];





document.querySelector(".budget_car").innerHTML += `
<div class="tab_list pad-10" id="tab">
<h4>Trusted used cars by budget</h4>
    <ul class="navbar-nav nav pad-10 ">
        <li><a href="#" class="tablinks" onclick="openCity(event, '1to5')" onclick="cls()">1-5 LAKH</a></li>
        <li><a class="tablinks" onclick="openCity(event, '5to10')">5-10 LAKH</a></li>
        <li><a class="tablinks" onclick="openCity(event, '10to15')">10-15 LAKH</a></li>
        <li><a class="tablinks" onclick="openCity(event, 'trustmark')">TRUSTMARK CAR</a></li>

    </ul>
</div>
<div class="Lakh01" id="1to5">

    <div class="crouselitem">

        <hr>
        <ul class="product">
        </ul>

    </div>
</div>
<div class="Lakh02 tabcontent" id="5to10">
    <div class="crouselitem">

        <ul class="product">
        </ul>

    </div>
</div>

<div class="Lakh03 tabcontent" id="10to15">
    <div class="crouselitem">

        <ul class="product">
        </ul>

    </div>
</div>
<div class="Trusted tabcontent" id="trustmark">
    <div class="crouselitem">

        <ul class="product">
        </ul>

    </div>
</div>





`;





for (var i in car01_arr) {
    document.querySelector('.Lakh01>.crouselitem>.product').innerHTML += `
      <li class="li" id="${car01_arr[i].link}">
         <a>
               <div class="car_img">
                    <img src="${car01_arr[i].images}">
               </div>
               <div class="car_details">
                      <p class="name">${car01_arr[i].name}</p>
                      <p class="price">${car01_arr[i].price}</p>
                      <br>
                      <div class="butn text-center">
                         <a href="#" class="ofr_btn">${car01_arr[i].btn}</a>
                      </div>
               </div> 
           </a>
       </li>
`;
}


for (var i in car02_arr) {
    document.querySelector('.Lakh02>.crouselitem>.product').innerHTML += `
      <li class="li" id="${car02_arr[i].link}">
         <a>
               <div class="car_img">
                    <img src="${car02_arr[i].images}">
               </div>
               <div class="car_details">
                      <p class="name">${car02_arr[i].name}</p>
                      <p class="price">${car02_arr[i].price}</p>
                      <br>
                      <div class="butn text-center">
                         <a href="#" class="ofr_btn">${car02_arr[i].btn}</a>
                      </div>
               </div> 
           </a>
       </li>
`;
}

for (var i in car03_arr) {
    document.querySelector('.Lakh03>.crouselitem>.product').innerHTML += `
      <li class="li" id="${car03_arr[i].link}">
         <a>
               <div class="car_img">
                    <img src="${car03_arr[i].images}">
               </div>
               <div class="car_details">
                      <p class="name">${car03_arr[i].name}</p>
                      <p class="price">${car03_arr[i].price}</p>
                      <br>
                      <div class="butn text-center">
                         <a href="#" class="ofr_btn">${car03_arr[i].btn}</a>
                      </div>
               </div> 
           </a>
       </li>
`;

}


for (var i in trust_arr) {
    document.querySelector('.Trusted>.crouselitem>.product').innerHTML += `
      <li class="li" id="${trust_arr[i].link}">
         <a>
               <div class="car_img">
                    <img src="${trust_arr[i].images}">
               </div>
               <div class="car_details">
                      <p class="name">${trust_arr[i].name}</p>
                      <p class="price">${trust_arr[i].price}</p>
                      <br>
                      <div class="butn text-center">
                         <a href="#" class="ofr_btn">${trust_arr[i].btn}</a>
                      </div>
               </div> 
           </a>
       </li>
`;

}