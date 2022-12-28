import {
	Box,
	Button,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";
import { BrowserView, MobileView } from "react-device-detect";
import "./styles.css";
import nittLogo from "../../../public/Assets/Images/NITT.png";
const Landing = ({ isSmallerThan600 }: { isSmallerThan600: any }) => {
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(userContext);
	const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
	const [isModalOpen, setIsModalOpen] = useState<boolean>(isSmallerThan600);

	useEffect(() => {
		localStorage.setItem("chakra-ui-color-mode", "dark");
	}, []);

	useEffect(() => {
		setIsModalOpen(isSmallerThan600);
		if (isSmallerThan600) {
			document.addEventListener("click", (e: MouseEvent) => {
				const target = e.target as HTMLElement;
				if (target && target.className && target.className != "modal")
					setIsModalOpen(false);
			});
		}
	}, [isSmallerThan600]);

	return (
		<>
			<div className="title-box">
				<MobileView>
					<Box className="nittLogo">
						<Image src={nittLogo} alt="NITT" />
					</Box>
				</MobileView>
				<BrowserView>
					<Box className="nittLogoBrowser">
						<Image src={nittLogo} alt="NITT" />
					</Box>
				</BrowserView>
				<div className="title-prefix">Nit Trichy&apos;s</div>
				<div className="title">Festember</div>
				<div className="title-suffix">The Sunken Paradise</div>
				{!isLoggedIn && (
					<button
						className="register-button"
						type="button"
						onClick={() => navigate("/register")}
					>
						Register
					</button>
				)}
				{isModalOpen && (
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						isCentered
						closeOnOverlayClick={false}
					>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Festember'22 App</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								Download the festember app now to get live updates!
							</ModalBody>

							<ModalFooter display="flex" alignItems="center">
								<Button
									colorScheme="blue"
									onClick={() => {
										window.open(
											"https://play.google.com/store/apps/details?id=edu.nitt.delta&pli=1",
											"_blank"
										);
									}}
								>
									Download APK
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				)}
			</div>
		</>
	);
};
export default Landing;
