export async function handleSubmit(event: any) {
	event.preventDefault();

	const formData = new FormData(event.target);
	try {
		const response = await fetch('/api/contact', {
			method: 'post',
			body: formData
		});

		if (!response.ok) {
			throw new Error(`response status: ${response.status}`);
		}
	} catch (err) {
		console.error(err);
		alert('Error, please try resubmitting the form');
	}
}
