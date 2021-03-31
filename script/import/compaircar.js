//IMPORT COMPARED CLASS FROM EXPORT SCRIPT
import  CompareCar from "../export/compaircar.js";

//CREATE OBJECTS FOR COMPARED CLASS
var car01 = new  CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','compare1');

var car02 = new CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','');

var car03 = new CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','');

var car04 = new CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','');
var car04 = new CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','');

var car05 = new CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','');


var car06 = new CompareCar('images/compare/renult.webp','images/compare/nissan.webp','Renult Kiger','Nissan Magnite','Rs.5.45 - 9.71 Lakh *','Rs.5.49 - 9.89 Lakh *','Renault Kiger vs Nissan Magnite','compare6');

//CREATE ARREY FOR COMAPRE CLASS OBJECT
var com_arr = [car01,car02,car03,car04,car05,car06]

//ACCESS COMPARE ARTICLE FROM INDEX FILE

document.querySelector('.compare').innerHTML+=`
          <div class="crouselitem">
				<h1>Compare to buy the right car</h1>
				
				
				<ul>
				</ul>
 
  
 
  
				 <a href="#compare6" class="myleftcom" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
				 <a href="#compare1" class="myrightcom" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>

	    </div>
`;

for(var i in com_arr){
        document.querySelector('.compare>.crouselitem>ul').innerHTML+=`
      
        <li class="li" id="${com_arr[i].link}">
                 <a href="#">
                      <div class="compare_cars">
                          <div class="car_data">
                               <div class="car_img com_img">
                                      <img src="${com_arr[i].img01}">
                                </div>
                                 <div class="car_details">
                                       <p class="name">${com_arr[i].name01}</p>
                                       <p class="price">${com_arr[i].price01}</p>
                                </div>
                          </div>
                          <div class="car_data">
                               <div class="car_img com_img">
                                      <img src="${com_arr[i].img02}">
                                </div>
                                 <div class="car_details text-right">
                                       <p class="name">${com_arr[i].name02}</p>
                                       <p class="price">${com_arr[i].price02}</p>
                                </div>
                          </div>
                     </div>
                         <span class="versess">VS</span>
                          <div class="butn text-center">
                               <a href="#" class="compare_btn">${com_arr[i].btn}</a>
                         </div>
                  </a>
       </li>
`;
}
