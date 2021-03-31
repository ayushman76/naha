//IMPORT CARS FROM EXPORT SCRIPT
import Cars from "../export/recomended.js";


//CREATE OBJECTS FOR CARS CLASS
var car01  = new Cars('images/recommended/car01.webp','Hyundai i20','6.79 - 11.32 Lakh','View Latest Offers','car1');
var car02  = new Cars('images/recommended/car02.webp','Maruti Swift','Rs5.73 - 8.41 Lakh*','View Latest Offers','car2');
var car03  = new Cars('images/recommended/car03.webp','Maruti Baleno','6.79 - 11.32 Lakh','View Latest Offers','car3');
var car04  = new Cars('images/recommended/car04.webp','Hyundai i20','6.79 - 11.32 Lakh','View Latest Offers','car4');
var car05  = new Cars('images/recommended/car05.webp','Hyundai i20','6.79 - 11.32 Lakh','View Latest Offers','car5');
var car06  = new Cars('images/recommended/car06.webp','Hyundai i20','6.79 - 11.32 Lakh','View Latest Offers','car6');


var car_arr = [car01,car02,car03,car04,car05,car06];

//ACCESS ARTICLE FROM INDEX.HTML

document.querySelector('.recommended_cars').innerHTML+=`
  
    <div class="crouselitem">
		<h2>Recommended Cars For You</h2>
		<p class="block_tag">New</p>
		<hr>
		  <ul >
	      </ul>

     <a href="#car6" class="myleft" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
     <a href="#car1" class="myright" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>

	 </div>
`;

for(var i in car_arr){
   
    document.querySelector('.crouselitem>ul').innerHTML+=`
        <li class="li" id="${car_arr[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${car_arr[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${car_arr[i].carname}</p>
						<p class="price">${car_arr[i].carprice}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${car_arr[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
		

   `;
}


