//IMPORT Header FROM EXPORT SCRIPT
import Header  from "../export/header.js";

//CREATE OBJECTS FOR Header CLASS
var mylogo  = new Header();	
var mysearchBar  = new Header();
var myfeedback  = new Header();
var mylanguage = new Header();
var mylog_reg = new Header(); 


	
//CREATE OBJECT FOR SEARCHLIST METHOD AND ADDING VALUES
var list01  = new Header();
list01.Searchlist("Hyundai Creta","Hyundai Creta.html");
var list02 = new Header();
list02.Searchlist("jaguar I-Pace","Jaguar_I-Pace.html");
var list03 =  new Header ();
list03.Searchlist("popler Searches","Popular_Searches.html");
var list04 = new Header();
list04.Searchlist("All popler cars","cars.html");
var list05 = new Header ();
list05.Searchlist("mahindra Thar","Mahindra_Thar.html")
var list06 = new Header ();
list06.Searchlist("Maruti Baleno","Maruti_baleno");
var list07 = new Header();
list07.Searchlist("Kia Saltos","kia.html");
var list08 = new Header();
list08.Searchlist("Hundai Vanue","hyundai.html");
var list09 = new Header ("Maruti Scorpio","scorpio.html");
list09.Searchlist("Maruti Scorpio","scorpio.html");
var list10 = new Header ();
list10.Searchlist("Toyota fartuner","toyota.html");

//CREATE ARREY FOR SEARCHLIST OBJECTS

var search_arr = [list01,list02,list03,list04,list05,list07,list08,list09,list10]





//ADD VALUES IN OBJECT.PRPERTY METHOD
//LOGO VALUE
mylogo.setlogo("images/logo/logo.png");

//SEARCHBAR
mysearchBar.setsearchBar("<input type='search' value='' id='input'  placeholder='Search Cars or Brands eg. Swift, or Maruti'>"); 




//FEEDBACK 
myfeedback.setfeedback("Feedback");



//ACCESS Header FROM INDEX HTML FILE
document.querySelector('header').innerHTML+=`
		<div class="container-fluid">
			 <div class="row">
				   <div class="col-md-3">
						<div class="logo">
							  <img src="${mylogo.getlogo()}">\
							  <div class="menu">
							        
									<div class="f_m"></div>
									<div class="s_m"></div>
									<div class="t_m"></div>

							  </div>
						</div>
				   </div>
				   <!--/col-md-4-->
				   <div class="col-md-5">
						<div class="my_searchbar" id="sh">
						      <span>${mysearchBar.getsearchBar()}</span>
							  <span class="s_btn"><i class="fa fa-search" style="font-size:15px"></i></span>
							  <div class="mySearchList">
							      	<ul class="nav">
									      <h5><strong>Recents Searches</strong></h5>
									</ul>
							  </div>
						</div>
				   </div>
				   <!--/col-md-4-->
				   <div class="col-md-4">
						<div class="widgets">
						     <ul class="navbar-nav nav">
							      <li class="hid"><a href="#">${myfeedback.getfeedback()}</a></li>
								  <li>
									  <a>
										  <select>
												 <option>English</option>						<option>Hindi</option>		  
										  </select>
									  </a>
								  </li>
								  <li class="hid"><a href="#"><i class='far fa-user-circle' style='font-size:20px'></i> Login /Ragister <i class="fa fa-caret-down"></i></a></li>
							 </ul>
						</div>
				   </div>
				   <!--/col-md-4-->
			 </div>
		</div>
`;

for(var i in search_arr){
	document.querySelector('.mySearchList>ul').innerHTML+=`
	
	   <li><a href="${search_arr[i].tablink}">${search_arr[i].tabname}</a></li>
	`;
}
//mylogo.setlogo("CARDEKHO");
//console.log(mylogo.getlogo());


var btn  =  document.querySelector("#input").addEventListener("focus",fun);
function fun(){
	var list =  document.querySelector('.mySearchList');
	if(list.style.display==="none"){
		list.style.display = "block";
	}else{
		list.style.display = "none";
	}

}
