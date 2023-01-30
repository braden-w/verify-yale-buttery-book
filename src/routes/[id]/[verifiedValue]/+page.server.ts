import type { PageServerLoad } from '../../$types';
import { setButteryVerified } from './setButteryVerified';

export const load = (async ({
	params: { id, verifiedValue }
}: {
	params: {
		id: string;
		verifiedValue: 'OPEN' | 'CLOSED';
	};
}) => {
	console.log('🚀 ~ file: +page.server.ts:9 ~ load ~ id', id);
	await setButteryVerified(id, verifiedValue);
	// throw error(404, 'Not found');
}) satisfies PageServerLoad;
