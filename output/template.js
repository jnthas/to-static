var hogan = require("hogan.js");
var fs = require("fs");

function Template(templateFile) {
	var content = fs.readFileSync('staticgens/' + templateFile);
	this.templateFile = hogan.compile(content.toString());

	// fs.readFile('staticgens/' + templateFile, function (err, content) {
	// 	self.templateFile = hogan.compile(content.toString());	
	// });
};

Template.prototype.render = function (data) {
	return this.templateFile.render(data);
};

module.exports = Template;