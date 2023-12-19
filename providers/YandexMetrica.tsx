'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function YandexMetrika() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		ym(process.env.NEXT_PUBLIC_YM_ID || '', 'hit', url);
	}, [pathname, searchParams]);

	return null;
}
