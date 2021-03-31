//CREATE CLASS FOR LATEST CARS
class CarData{
        display(images,name,price,btn,link){
		
			    this.images = images;
				this.name = name;
				this.price = price;
				this.btn = btn;
                this.link = link;
       }
}
// CREATE CHILD CLASS FOR HATCHBACK CAR
class Hatchback extends CarData{
       constructor(){
           super();
     }
}

//CREATE CHILD CLASS FOR SEDAN CAR
class Sedan extends Hatchback{
        constructor(){
           super();
         }
}


//CREATE CHILD CLASS FOR SUV CAR
class SUV extends Sedan{
        constructor(){
           super();
         }
}
//CREATE CHILD CLASS FOR MUV CAR
class MUV extends SUV{
        constructor(){
           super();
         }
}

//CREATE CHILD CLASS FOR LUXURY CAR
class Luxury extends MUV{
        constructor(){
           super();
         }
}





//OBJECT AND DATA FOR HATCHBACK CAR
var car01 = new Hatchback();
car01.display("images/recommended/car02.webp","Hyundai i 20","6.79 - 11.32 Lakh","View latets offers","first");
var car02 = new Hatchback();
car02.display("images/recommended/car04.webp","Maruti Swift","5.73 - 8.41 Lakh","View latets offers","sec");
var car03 = new Hatchback();
car03.display("images/recommended/car01.webp","Maruti Baleno","5.90 - 9.10 Lakh","View latets offers","third");
var car04 = new Hatchback();
car04.display("images/recommended/car06.webp","Tata Altroz","5.69 - 9.45 Lakh","View latets offers","forth");
var car05 = new Hatchback();
car05.display("images/recommended/car03.webp","Tata Tiago","4.85 - 6.84 Lakh","View latets offers","fifth");
var car06 = new Hatchback();
car06.display("images/recommended/car05.webp","Wagon R","4.65 - 6.18 Lakh","View latets offers","six");

var Hatchback_arr  = [car01,car02,car03,car04,car05,car06];


//OBJECT AND DATA FOR SADEN CAR
var car01 = new Sedan();
car01.display("images/recommended/car06.webp","Hyundai i 20","6.79 - 11.32 Lakh","View latets offers","first");
var car02 = new Sedan();
car02.display("images/recommended/car05.webp","Maruti Swift","5.73 - 8.41 Lakh","View latets offers","");
var car03 = new Sedan();
car03.display("images/recommended/car04.webp","Maruti Baleno","5.90 - 9.10 Lakh","View latets offers","");
var car04 = new Sedan();
car04.display("images/recommended/car03.webp","Tata Altroz","5.69 - 9.45 Lakh","View latets offers","");
var car05 = new Sedan();
car05.display("images/recommended/car02.webp","Tata Tiago","4.85 - 6.84 Lakh","View latets offers","");
var car06 = new Sedan();
car06.display("images/recommended/car01.webp","Wagon R","4.65 - 6.18 Lakh","View latets offers","six");

var saden_arr  = [car01,car02,car03,car04,car05,car06];


//OBJECT AND DATA FOR SUV CAR
var car01 = new SUV();
car01.display("images/recommended/car04.webp","Hyundai i 20","6.79 - 11.32 Lakh","View latets offers","first");
var car02 = new SUV();
car02.display("images/recommended/car03.webp","Maruti Swift","5.73 - 8.41 Lakh","View latets offers","");
var car03 = new SUV();
car03.display("images/recommended/car01.webp","Maruti Baleno","5.90 - 9.10 Lakh","View latets offers","");
var car04 = new SUV();
car04.display("images/recommended/car06.webp","Tata Altroz","5.69 - 9.45 Lakh","View latets offers","");
var car05 = new SUV();
car05.display("images/recommended/car03.webp","Tata Tiago","4.85 - 6.84 Lakh","View latets offers","");
var car06 = new SUV();
car06.display("images/recommended/car05.webp","Wagon R","4.65 - 6.18 Lakh","View latets offers","six");

var suv_arr  = [car01,car02,car03,car04,car05,car06];



//OBJECT AND DATA FOR MUV CAR
var car01 = new MUV();
car01.display("images/recommended/car06.webp","Hyundai i 20","6.79 - 11.32 Lakh","View latets offers","first");
var car02 = new MUV();
car02.display("images/recommended/car05.webp","Maruti Swift","5.73 - 8.41 Lakh","View latets offers","");
var car03 = new MUV();
car03.display("images/recommended/car04.webp","Maruti Baleno","5.90 - 9.10 Lakh","View latets offers","");
var car04 = new MUV();
car04.display("images/recommended/car03.webp","Tata Altroz","5.69 - 9.45 Lakh","View latets offers","");
var car05 = new MUV();
car05.display("images/recommended/car02.webp","Tata Tiago","4.85 - 6.84 Lakh","View latets offers","");
var car06 = new MUV();
car06.display("images/recommended/car01.webp","Wagon R","4.65 - 6.18 Lakh","View latets offers","six");

var muv_arr  = [car01,car02,car03,car04,car05,car06];


//OBJECT AND DATA FOR LUXURY CAR
var car01 = new Luxury();
car01.display("images/recommended/car02.webp","Hyundai i 20","6.79 - 11.32 Lakh","View latets offers","first");
var car02 = new Luxury();
car02.display("images/recommended/car01.webp","Maruti Swift","5.73 - 8.41 Lakh","View latets offers","sec");
var car03 = new Luxury();
car03.display("images/recommended/car04.webp","Maruti Baleno","5.90 - 9.10 Lakh","View latets offers","third");
var car04 = new Luxury();
car04.display("images/recommended/car03.webp","Tata Altroz","5.69 - 9.45 Lakh","View latets offers","forth");
var car05 = new Luxury();
car05.display("images/recommended/car06.webp","Tata Tiago","4.85 - 6.84 Lakh","View latets offers","fifth");
var car06 = new Luxury();
car06.display("images/recommended/car05.webp","Wagon R","4.65 - 6.18 Lakh","View latets offers","six");

var luxury_arr  = [car01,car02,car03,car04,car05,car06];





document.querySelector(".latest_cars").innerHTML+=`
     	   <div class="tab_list pad-10" id="tab">
			            <h3>The most searched cars</h3>
                   <ul class="navbar-nav nav pad-10 ">
						<li><a href="#" class="tablinks"  onclick="openCity(event, 'hatchback')" onclick="cls()">Hatchback</a></li>
						<li ><a class="tablinks"  onclick="openCity(event, 'saden')" >Sedan</a></li>
						<li><a  class="tablinks"  onclick="openCity(event, 'suv')">SUV</a></li> 
						<li><a  class="tablinks"  onclick="openCity(event, 'muv')">MUV</a></li>
						<li><a  class="tablinks"  onclick="openCity(event, 'luxury')">Luxury</a></li>
                    </ul>
              </div>
     <div class="hatchback" id="hatchback">

		<div class="crouselitem">
		      
             <hr>
		      <ul class="product">
		      </ul>
              <a href="#six" class="myleft01" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		      <a href="#first" class="myright01" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>
        </div>
</div>
<div class="saden tabcontent" id="saden">
		<div class="crouselitem">
		      
		      <ul class="product">
		      </ul>
               <a href="#six" class="myleft01" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		      <a href="#first" class="myright01" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>
        </div>
</div>

<div class="suv tabcontent" id="suv">
		<div class="crouselitem">
		      
		      <ul class="product">
		      </ul>
                <a href="#six" class="myleft01" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		      <a href="#first" class="myright01" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>
        </div>
</div>
<div class="muv tabcontent" id="muv">
		<div class="crouselitem">
		      
		      <ul class="product">
		      </ul>
                 <a href="#six" class="myleft01" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		      <a href="#first" class="myright01" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>
        </div>
</div>
<div class="luxury tabcontent" id="luxury">
		<div class="crouselitem">
		      
		      <ul class="product">
		      </ul>
                <a href="#six" class="myleft01" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		      <a href="#first" class="myright01" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>
        </div>
		 <a href="#six" class="myleft01" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
		      <a href="#first" class="myright01" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>
</div>
       

`;





for(var i in Hatchback_arr){
      document.querySelector('.hatchback>.crouselitem>.product').innerHTML+=`
        <li class="li" id="${Hatchback_arr[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${Hatchback_arr[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${Hatchback_arr[i].name}</p>
						<p class="price">${Hatchback_arr[i].price}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${Hatchback_arr[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
 `;
}


for(var i in saden_arr){
      document.querySelector('.saden>.crouselitem>.product').innerHTML+=`
        <li class="li" id="${saden_arr[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${saden_arr[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${saden_arr[i].name}</p>
						<p class="price">${saden_arr[i].price}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${saden_arr[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
 `;
}

for(var i in suv_arr){
      document.querySelector('.suv>.crouselitem>.product').innerHTML+=`
        <li class="li" id="${suv_arr[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${suv_arr[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${suv_arr[i].name}</p>
						<p class="price">${suv_arr[i].price}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${suv_arr[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
 `;

}


for(var i in muv_arr){
      document.querySelector('.muv>.crouselitem>.product').innerHTML+=`
        <li class="li" id="${muv_arr[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${muv_arr[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${muv_arr[i].name}</p>
						<p class="price">${muv_arr[i].price}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${muv_arr[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
 `;

}

for(var i in luxury_arr){
      document.querySelector('.luxury>.crouselitem>.product').innerHTML+=`
        <li class="li" id="${luxury_arr[i].link}">
           <a>
				 <div class="car_img">
					  <img src="${luxury_arr[i].images}">
				 </div>
				 <div class="car_details">
						<p class="name">${luxury_arr[i].name}</p>
						<p class="price">${luxury_arr[i].price}</p>
                       <br>
						<div class="butn text-center">
                               <a href="#" class="ofr_btn">${luxury_arr[i].btn}</a>
                         </div>
				 </div> 
             </a>
         </li>
 `;

}
