//IMPORT brand FROM EXPORT SCRIPT
import Brands from "../export/brands.js";


//CREATE OBJECTS FOR brand CLASS
var car01  = new Brands('images/brand/suzuki.webp','Suzuki','suzuki.html','firstbrands');
var car02  = new Brands('images/brand/hyundai.webp','Hyundai','View Latest Offers','hyundai.html');
var car03  = new Brands('images/brand/honda.webp','Honda','honda.html');
var car04  = new Brands('images/brand/tata.webp','TATA','tata.html');
var car05  = new Brands('images/brand/mahindra.webp','Mahindra','mahindra.html');
var car06  = new Brands('images/brand/renault.webp','Renault','View Latest Offers','renault.html');

var car07  = new Brands('images/brand/ford.webp','Ford','ford.html');
var car08  = new Brands('images/brand/nissan.webp','Nissan','nissan.html');
var car09  = new Brands('images/brand/dustan.webp','Dustun','dusten.html');
var car10  = new Brands('images/brand/toyota.webp','Toyota','toyota.html');
var car11  = new Brands('images/brand/mg.webp','MG','mg.html');
var car12  = new Brands('images/brand/kia.webp','Kia','kia.html','lastbrands');


var car_arr = [car01,car02,car03,car04,car05,car06,car07,car08,car09,car10,car11,car12];

//ACCESS ARTICLE FROM INDEX.HTML

document.querySelector('.brands').innerHTML+=`
  
    <div class="crouselitem">
		<h2>Popular Brands</h2>

		<hr>
		<ul >
		</ul>

		<a href="#lastbrands" class="myleftbrands" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		<a href="#firstbrands" class="myrightbrands" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>

	 </div>
`;

for(var i in car_arr){
   
    document.querySelector('.brands>.crouselitem>ul').innerHTML+=`
        <li class="li" id="${car_arr[i].ar}">
           <a href="${car_arr[i].link}">
				 <div class="car_img">
					  <img src="${car_arr[i].images}">
				 </div>
				 <div class="name text-center">
				       <p><b>${car_arr[i].name}</b></p>
				 </div>
             </a>
         </li>
		

   `;
}


