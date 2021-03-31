//CREATE CLASS FOR NAV 
class Nav {
	//CREATE CONSTRUCTOR
	constructor(tabname,tablink){
		this.tabname = tabname;
		this.tablink = tablink
	}
	Location(l){
		return l;
	}
}


//EXPORT NAV FOR IMPORT SCRIPT
export default Nav;