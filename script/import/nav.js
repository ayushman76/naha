//IMPORT NAV FOM EXPORT SCRIPT
import Nav from "../export/nav.js";

//CAREAT OBJECTS  & ADDING VALUE IN PROPERTIES FOR CLASS NAV
var nav01 = new Nav("New car","new.html");
var nav02 = new Nav("Used Car","usedcar.html");
var nav03 = new Nav ("Sell car", "sell.html");
var nav04 = new Nav ("Campare Car ","compare.html");
var nav05 = new Nav("news & reviews","news.html");
var nav06 = new Nav("cardekho Ventures","venturs.html");
var nav07 = new Nav("More","More");

//CAREATE ARREY FRO NAV OBJECTS
var nav_arr  = [nav01,nav02,nav03,nav04,nav05,nav06,nav07]; 

// ACCESS NAV FROM INDEX HTML FILE
document.querySelector("nav").innerHTML+=`
    <div class="container-fluid">
	      <div class="row">
		         <div class="col-md-10">
				       <div class="nav_item">
					        <ul class="navbar-nav nav"></ul>
					   </div>
				 </div>
				 <!--col-md-8-->
				 <div class="col-md-2">
				       <div class="location">
					          <ul class="navbar-nav nav">
							       <li><a><i class="material-icons" style="font-size:20px">place</i> ${nav01.Location("India")} <i class="fa fa-caret-down"></i></a><li>
							  </ul>
					   </div>
				 </div>
				 <!--col-md-4-->
		   </div>
	</div>
`; 
//LOOP FOR NAV_ARR
for(var i in nav_arr){
	document.querySelector(".nav_item>ul").innerHTML+=`
	   <li><a href="${nav_arr[i].tablink}">${nav_arr[i].tabname} <i class="fa fa-caret-down"></i></a></li>
	`;
}