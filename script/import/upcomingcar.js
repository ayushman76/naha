//IMPORT upcommingcars FROM EXPORT SCRIPT
import upcommingcars from "../export/upcomingcar.js";


//CREATE OBJECTS FOR upcommingcars CLASS
var car01  = new upcommingcars('images/upcome/car01.webp','Hyundai i20','Rs9.00 Lakh*','Alert Me When Launched','car1');
var car02  = new upcommingcars('images/upcome/car02.webp','Maruti Swift','Rs13.00 Lakh*','Alert Me When Launched','car2');
var car03  = new upcommingcars('images/upcome/car03.webp','Maruti Baleno','Rs65.00 Lakh*','Alert Me When Launched','car3');
var car04  = new upcommingcars('images/upcome/car04.jpg','Hyundai i20','Rs5.00 Lakh*','Alert Me When Launched','car4');



var car_arr01 = [car01,car02,car03,car04];

//ACCESS ARTICLE FROM INDEX.HTML

document.querySelector('.upcomming_cars').innerHTML+=`
  
    <div class="crouselitem">
		<h4>Upcoming Cars</h4>
			<p class="block_tag">New</p>
			<hr>
			<ul >
			</ul>

			 <a href="#car6" class="myleft" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
			 <a href="#car1" class="myright" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>

	 </div>
`;

for(var i in car_arr01){
   
    document.querySelector('.upcomming_cars>.crouselitem>ul').innerHTML+=`
        <li class="li" id="${car_arr01[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${car_arr01[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${car_arr01[i].carname}</p>
						<p class="price">${car_arr01[i].carprice}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${car_arr01[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
		

   `;
}


