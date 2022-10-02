import {
	Box,
	Image,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";
import { BrowserView, MobileView } from "react-device-detect";
import "./styles.css";
import nittLogo from "../../../public/Assets/Images/NITT.png";
const Landing = ({isSmallerThan600} : {isSmallerThan600 : any}) => {
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(userContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isSmallerThan600);

  useEffect(() => {
		localStorage.setItem("chakra-ui-color-mode", "dark");
	}, []);

  useEffect(()=>{
    setIsModalOpen(isSmallerThan600);
    if(isSmallerThan600){
      document.addEventListener("click",(e : MouseEvent)=>{
        const target = (e.target as HTMLElement);
        if(target && target.className && target.className != 'modal')
          setIsModalOpen(false);
      });
    }
  },[isSmallerThan600]);
	
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
        { 
      isModalOpen && <div className="modal">
      Download the festember app now to get live updates!
      <button
          className="register-button"
          type="button"
          onClick={() => {
            window.open("https://festember.com/apk", '_blank');
          }}
        >
          Download APK
        </button>
    </div>
      }
			</div>
      
		</>
	);
};
export default Landing;
