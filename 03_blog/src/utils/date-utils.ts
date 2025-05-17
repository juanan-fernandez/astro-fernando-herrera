export class FormatDate {
	static format(value: Date): string {
		const date = new Date(value)
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: '2-digit'
		}

		return new Intl.DateTimeFormat('es-ES', options).format(date)
	}
}
