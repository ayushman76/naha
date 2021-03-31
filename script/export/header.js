//CREATE HEADER CLASS 
class Header{
    //CREATE CONSTRUCTOR
	constructor(){
		//CRAETING VAR BY INCAPSULATION
		  var logo;
		  var searchBar;
		  var feedback;
		  var language;
		  var log_reg;
		  //CREATE METHOD FOR SEARCH LIST IN SEARCHBAR
		  this.Searchlist = function(tabname,tablink){
			     this.tabname = tabname;
				 this.tablink = tablink;
		  }
	  }
	  //CREATING MATHOD BY VAR 
	  getlogo(){
		  return this.logo;
	  }
	  setlogo(logo){
		  this.logo = logo;
	  }
	  getsearchBar(){
		  return this.searchBar;
	  }
	  setsearchBar(searchBar){
		  this.searchBar = searchBar;
	  }
	  getfeedback(){
		  return this.feedback;
	  }
	  setfeedback(feedback){
		  this.feedback = feedback;
	  }
	  getlanguage(){
		  return this.language;
	  }
	  setlanguage(){
		  this.language = language;
	  }
	  getlog_reg(){
		  return this.log_reg;
	  }
	  setlog_reg(log_reg){
		  this.log_reg = log_reg;
	  }

}
//EXPORT HEADER FOR IMPORT SCRIPT
export default Header;