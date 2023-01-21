import type { PageServerLoad } from '../../$types';
import { setButteryVerified } from './setButteryVerified';

export const load = (async ({ params: { calendarID, verifiedValue } }) => {
	console.log('🚀 ~ file: +page.server.ts:9 ~ load ~ calendarID', calendarID);
	await setButteryVerified(calendarID, verifiedValue);
	// throw error(404, 'Not found');
}) satisfies PageServerLoad;
