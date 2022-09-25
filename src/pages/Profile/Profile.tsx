import styleMobile from "./styleMobile.module.css";
import styleBrowser from "./styleBrowser.module.css";
import sample from "./../../../public/logo192.png";
import { Image, Box } from "@chakra-ui/react";
import { MobileView, BrowserView } from "react-device-detect";
import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from '@chakra-ui/react';
import { userContext } from "../../contexts/UserContext";
import { config } from "../../../config";
import line from "../../../public/Assets/Images/Line 8.svg";
const Profile = () => {
    const { isLoggedIn, loading } = useContext(userContext);
    const [qr, setQr] = useState<string>("");
    const availableSizes = ["S", "M", "L", "XL", "XXL"];
    const [size, setSize] = useState<string>("L");
    const changeSize = (size: string) => {
        setSize(size);
    }
    const [userName, setUserName] = useState<string>("")
    const [userID, setUserID] = useState<number>()
    const getDetails = useCallback(() => {
		fetch(`${config.backendOrigin}/user/details`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
            // body: JSON.stringify({ user_id: localStorage.getItem('userID') })
		})
			.then((res) => res.json()).then(response => console.log(response))
			.catch((e) => {
				console.log(e);
				
			});
	}, [userID]);

    const getQR = () => {

        fetch(`${config.backendOrigin}/pr/qr`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: localStorage.getItem('userID') })

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message,localStorage.getItem('userID'))
                if (data.status_code === 200) {
                    setQr(data.message)
                } else setQr("")
            })
            .catch((e) => console.log(e));

    };

    const navigate = useNavigate();
    useEffect(() => {
        // if(loading) navigate("/profile");
        if (isLoggedIn) {
            getQR();
            getDetails();
        }
    }, [isLoggedIn, loading]);
    return (
        <>
            <MobileView>
                <div className={styleMobile.display}>
                    <div className={styleMobile.title}>Profile</div>
                    <div className={styleMobile.profileDetails}>

                        <div className={styleMobile.name}>RAGHAV KHULLAR</div>

                        <div className={styleMobile.qr}>
                            {qr != "" && (
                                <img src={`data:image/png;base64,${qr}`} alt="QR" />
                            )}

                        </div>

                        <div className={styleMobile.tshirt}>
                            <div className={styleMobile.tshirtSize}>
                                <div className={styleMobile.tshirtHeading}>T-Shirt Preference</div>
                            </div>
                            <div className={styleMobile.tshirtOptions}>
                                <div className={styleMobile.currentSize}>{size}</div>
                                <div className={styleMobile.allOptions}>
                                    {availableSizes.map((i: string) => {
                                        return (<div className={styleMobile.available} onClick={() => changeSize(i)}>{i}</div>);
                                    })}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className={styleBrowser.display}>
                    <div className={styleBrowser.title}>Profile</div>
                    <div className={styleBrowser.profileDetails}>
                        {/* <div className={styleBrowser.check}> */}
                        <div className={styleBrowser.second}>
                            <div className={styleBrowser.name}>
                                <Text>RAGHAV KHULLAR</Text>
                                {/* <Image src={line}></Image> */}
                            </div>


                            <div className={styleBrowser.qr}>
                                {qr != "" && (
                                    <img src={`data:image/png;base64,${qr}`} alt="QR" />
                                )}
                                {/* <img src={sample}></img> */}

                            </div>
                        </div>
                        <div className={styleBrowser.tshirt}>
                            <div className={styleBrowser.hello}></div>
                            <div className={styleBrowser.tshirtHeading}>T-Shirt Preference</div>

                            <div className={styleBrowser.currentSize}><p>{size}</p></div>
                        </div>
                        <div className={styleBrowser.tshirtOptions}>

                            {availableSizes.map((i: string) => {
                                return (<div className={styleBrowser.available} onClick={() => changeSize(i)}>{i}</div>);
                            })}



                        </div>

                        {/* </div> */}
                    </div>
                </div>
            </BrowserView>

        </>
    )
}

export default Profile;