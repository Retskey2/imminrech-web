export const getSocialMedia = () => {
	const telegramUsername = 'rkashargin';
	const phoneNumber = '89992232800';

	const openTelegramChat = () => {
		window.open(`https://t.me/${telegramUsername}`, '_blank');
	};

	const openWhatsAppChat = () => {
		const formattedNumber = phoneNumber.replace(/\D/g, ''); // Убираем все символы, кроме цифр
		window.open(`https://wa.me/${formattedNumber}`, '_blank');
	};

	return {
		openWhatsAppChat,
		openTelegramChat
	};
};
