'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
	useEffect(() => {
		// disable browser scroll restoration
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}

		// force top after hydration
		requestAnimationFrame(() => {
			window.scrollTo(0, 0);
		});
	}, []);

	return null;
}
