//IMPORT SFOOOTER CLASS FROM EXPORT SCRIPT
import  Sfooter from '../export/super_footer.js';

//CREATE OBJECTS FOR SFOOTER CLASS

var block01 = new Sfooter("<i class='fas fa-award' style='font-size:40px'></i>","India’s #1","Largest Auto portal");

var block02 = new Sfooter("<i class='fas fa-shuttle-van' style='font-size:40px'></i>","Car Sold","Every 4 minute");

var block03 = new Sfooter(" <i class='fas fa-tags' style='font-size:40px'></i>","Offers","Stay updated pay less");

var block04 = new Sfooter('<i class="fa fa-automobile" style="font-size:40px"></i>',"Compare","Decode the right car");

var block_arr = [block01,block02,block03,block04];

//ACCESS FOOTER FROM INDEX.HTML
document.querySelector('.tags').innerHTML+=`
   <div class="container">
        <div class="row">
		    
		</div>
   </div>
`;

for(var i in block_arr){
	document.querySelector('.tags>.container>.row').innerHTML+=`
	    <div class="col-md-3">
		       <div class="my_block">
			          <span>${block_arr[i].icon}</span>
					  <div class="block_item">
					         <p class="name"><b>${block_arr[i].name}</b></p>
							 <p>${block_arr[i].para}</p>
					  </div>
			   </div>
		</div>
	`;
}