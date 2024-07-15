

const {Builder,By,Key,until,Browser}=require(`selenium-webdriver`);

class DriverTools{

	constructor(){

		const driver=new Builder().forBrowser(`chrome`).build;

	}

}