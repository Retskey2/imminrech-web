export const getSocialMedia = () => {
	const telegramUsername = process.env.NEXT_PUBLIC_TELEGRAM;
	const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP;

	const openTelegramChat = () => {
		window.open(`https://t.me/${telegramUsername}`, '_blank');
	};

	const openWhatsAppChat = () => {
		const formattedNumber = phoneNumber?.replace(/\D/g, ''); // Убираем все символы, кроме цифр
		window.open(`https://wa.me/${formattedNumber}`, '_blank');
	};

	return {
		openWhatsAppChat,
		openTelegramChat
	};
};
