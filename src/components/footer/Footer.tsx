import { Link, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <>
        <Text className={styles.footer}>
            Made with 
            <span> &#x2764; </span>
            {" "} by {" "}
            <Link href="https://delta.nitt.edu" target="_blank">Delta</Link>
            {" "} and {" "}
            <Link href="https://graphique.club/" target="_blank">Graphique</Link>
        </Text>
    </>
  )
  // width: 1928px; height: 1183px;
}

export default Footer;