import { CLIENT_EMAIL, PRIVATE_KEY } from '$env/static/private';
import { GoogleSpreadsheet } from 'google-spreadsheet';
// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1NZyxbnUMkChmZC3umrW8vJdyus6PdPyRq8GbDLZiglU');

// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth({
	client_email: CLIENT_EMAIL,
	private_key: PRIVATE_KEY
});

// In the row where the "calendarID" column matches "calendarID", set the "verified" column to "OPEN"
export async function setButteryVerified(calendarID: string, verifiedValue: 'OPEN' | 'CLOSED') {
	await doc.loadInfo(); // loads document properties and worksheets
	const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
	const rows = await sheet.getRows(); // can pass in { limit, offset }
	rows.forEach((row) => {
		if (row.calendarID === calendarID) {
			row.verified = verifiedValue;
			row.save();
		}
	});
}
