const linkAllow = (req, res, next) => {
	const origin = req.get('origin')
		res.header("Access-Control-Allow-Origin", origin);
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
};

export default linkAllow;