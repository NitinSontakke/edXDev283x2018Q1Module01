
const csv = require('csvtojson')
const fs = require('fs')

const c2j = (source = 'customer-data.csv', target = 'customer-data.json') =>
{ 
  let output = [];
  csv()
    .fromFile(source)
    .on('json',(jsonObj) => {
      output.push(jsonObj)
	})
	.on('done', (error) => {
		jsonString = JSON.stringify(output, null, 2)
		fs.writeFile(target, jsonString, (error) => {
			if(error) throw(error);
			console.log('JSON saved!');
		});
	})
}

c2j(process.argv[2], process.argv[3]);

