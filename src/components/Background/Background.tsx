import { Image } from "@chakra-ui/react";

const Background = () => {
	return (
		<Image
			zIndex = "-999"
			position = "absolute"
			h="100vh"
			width="100vw"
			objectFit="cover"
			src="./../../public/Assets/Images/background.svg"
			alt="bg"
		/>
	);
};

export default Background;
