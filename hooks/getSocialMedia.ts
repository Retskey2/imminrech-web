export const getSocialMedia = () => {
	const telegramUsername = process.env.NEXT_PUBLIC_TELEGRAM;

	const openTelegramChat = () => {
		window.open(`https://t.me/${telegramUsername}`, '_blank');
	};

	return {
		openTelegramChat
	};
};
