import { Background, Footer, Header } from "../index";
import { AppLayoutProps } from "./types";
import { useDisclosure } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const AppLayout = (props : AppLayoutProps) => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  return (
    <>
        <Background />
        <Header isOpen={isOpen} onClose={onClose} onOpen={onOpen} onToggle={onToggle} />
        <div style={{overflow: 'hidden'}}>
          {isOpen && isMobile ? null : props.children}
        </div>
        <Footer />
    </>
  )
}

export default AppLayout;