export function convert24to12(time: string) {
	const [hours, minutes] = time.split(':').map(Number);
	const date = new Date();
	date.setHours(hours, minutes);
	return date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
}

export const formatLocalDate = (d: string) => {
	const locale = navigator.language;
	const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
	return new Date(d).toLocaleDateString(locale, {
		day: 'numeric',
		month: 'short',
		timeZone,
		year: 'numeric'
	});
};

export const formatLocalDateTime = (d: string) => {
	const locale = navigator.language;
	const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
	return new Date(d).toLocaleString(locale, {
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		month: 'short',
		timeZone,
		year: 'numeric'
	});
};
