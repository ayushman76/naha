//IMPORT SLIDER FROM EXPORT SCRIPT
import Slider from "../export/slider.js";

//CREATE OBJECTS FOR SLIDER CLASS
 
var img01 = new Slider('images/banner/slider01.png','All About Cars','first','#first');
var img02 = new Slider('images/banner/slider02.png','CarDekho TVC','sec','#sec');
var img03 = new Slider('images/banner/slider03.png','Gaadi Store','third','#third');

var arr_slider = [img01,img02,img03];

//ACCESS SECTION FROM INDEX.HTML
document.querySelector("section").innerHTML+=`
    <div class="my_crousel">
	      <div class="crousel_item">
		         <ul></ul>
				 <ol></ol>
		  </div>
	</div>
	<div class="my_form">
	     <div class="form-item">
		         <h1><b>Find your right car</b></h1>
				  <div class="by_category">
				       <ul class="navbar-nav nav">
							  <li><a href="#">New Car</a></li>
							  <li><a href="#">Used Car</a></li>
				       </ul>
				  </div>
		         
				 <div class="radio_tab">
					   <form>
								<input type="radio" id="budget" class="bud_redio">
								<label for="budget" class="bud_redio">By Budgets</label>
								<input type="radio" id="brands" class="brand_radio">
								<label for="brands" class="brand_radio">By Brands</label>
								<input type="radio" id="modal" class="modal_radio">
								<label for="modal" class="modal_radio">By Brands</label>
					   </form>
					     <div class="for_bugtes newcar">
						       <select type="text" placeholder="" class="form-control">
							           <option value="default">Select Budget</option>
										<option>0-2 Lakh</option>
										<option>2-5 Lakh</option>
										<option>5-8 Lakh</option> 
										<option>8-10 Lakh</option>
										<option>10+ Lakh</option>
								</select>
								
								<select type="text" placeholder="" class="form-control" id="budget_field">
							           <option value="default">All Vehical Type</option>
										<option>Hatchback</option>
										<option>Sedan</option>
										<option>MUV</option> 
										<option>Luxury</option>
										<option>Hyundai</option>
										<option>Coupe</option>
										<option>Wagon</option>
										<option>Pickup Truck</option>
								</select>
							     <div class="by_brand newcar">
								        <select type="text" placeholder="" class="form-control" id="budget_field">
											   <option value="default">All Vehical Type</option>
												<option>Hatchback</option>
												<option>Sedan</option>
												<option>MUV</option> 
												<option>Luxury</option>
												<option>Hyundai</option>
												<option>Coupe</option>
												<option>Wagon</option>
												<option>Pickup Truck</option>
								       </select>
									   <input type="text" placeholder="Select Modal" class="form-control">
								 </div>
						 </div>
						 <!---//BUDGET  NEWCAR	DIV END-->
						 <div class="for_brands usedcar">
						       <select type="text" placeholder="" class="form-control">
							           <option value="default">Select Budget</option>
										<option>0-2 Lakh</option>
										<option>2-5 Lakh</option>
										<option>5-8 Lakh</option> 
										<option>8-10 Lakh</option>
										<option>10+ Lakh</option>
								</select>
								
								<select type="text" placeholder="" class="form-control" id="budget_field">
							           <option value="default">Select City</option>
										<option>Bilaspur</option>
										<option>Raipur</option>
										<option>Chennai</option> 
										<option>Mumbai</option>
										<option>Bangalore</option>
										<option>Udisa</option>
										<option>Rajsthan</option>
										<option>Dubai</option>
								</select>
							     <div class="by_brand newcar">
								        <select type="text" placeholder="" class="form-control" id="budget_field">
											   <option value="default">Select Modal</option>
												<option>Hatchback</option>
												<option>Sedan</option>
												<option>MUV</option> 
												<option>Luxury</option>
												<option>Hyundai</option>
												<option>Coupe</option>
												<option>Wagon</option>
												<option>Pickup Truck</option>
								       </select>
									  
								 </div>
						 </div>
						 <!---//BRANDS  USEDCAR	DIV END-->
						 <button class="button">Serach</button>
				 </div>
		   </div>
	</div>
`;


for(var i in arr_slider){
	document.querySelector('.crousel_item>ul').innerHTML+=`
	    <li id="${arr_slider[i].id}"><a><img src="${arr_slider[i].banner}"></a></li>
	`;
	document.querySelector('.crousel_item>ol').innerHTML+=`
	     <li><a href="${arr_slider[i].link}">${arr_slider[i].tag}</a></li>
	`;
}