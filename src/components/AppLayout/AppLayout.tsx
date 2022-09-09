import { Footer, Header, BackgroundAnimation } from "../index";
import { AppLayoutProps } from "./types";
import { useDisclosure } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const AppLayout = (props: AppLayoutProps) => {
	const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
	return (
		<>
			<BackgroundAnimation />
			<Header
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				onToggle={onToggle}
			/>
			<div style={{ overflow: "hidden" }}>
				{isOpen && isMobile ? null : props.children}
			</div>
			{isOpen && isMobile ? null : <Footer />}
		</>
	);
};

export default AppLayout;
