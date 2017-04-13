var config = {
	port: process.env.PORT || 2000,
	db: "mongodb://54.169.225.125/kid_locker",
	test_port: 2001,
	test_db: "mongodb://localhost/todoapi_test"
}
module.exports = config;