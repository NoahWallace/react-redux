var path=require("path")

module.exports = {
	context: path.resolve(__dirname + "/src"),
	entry:"./index",
	output: {
		path: path.resolve(__dirname + "/app"),
		filename: "bundle.js"

	}
}