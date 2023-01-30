import type { PageServerLoad } from './$types';
import { setButteryVerified } from './setButteryVerified';

export const load = (async ({ params: { id, verifiedValue } }) => {
	await setButteryVerified(id, verifiedValue as 'OPEN' | 'CLOSED');
	// throw error(404, 'Not found');
}) satisfies PageServerLoad;
