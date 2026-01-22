export const generateDate = () => new Date(Date.now() - Math.random() * 1000000000000 + 199999999999)
	.toISOString()
	.substring(0, 16)
	.replace('T', ' ');
