import fs from 'fs';

/**
 * Queries the list of current orders.
 */
export default async (req, res) => {

	try {

		const data = fs.readFileSync('./app/data/orders.json');
	
		res.status(200).send(JSON.parse(data));

	} catch(error) {

		res.status(500).send(error);
	}
};