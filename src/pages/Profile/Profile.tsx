import styleMobile from "./styleMobile.module.css";
import styleBrowser from "./styleBrowser.module.css";
import { MobileView, BrowserView } from "react-device-detect";
import { useState, useEffect, useContext, useCallback } from "react";
import { Text } from '@chakra-ui/react';
import { userContext } from "../../contexts/UserContext";
import { config } from "../../../config";
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
        })
            .then((res) => res.json()).
            then((response) => setUserName(response.message.user_name))
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
            }

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status_code === 200) {
                    setQr(data.message)
                } else setQr("")
            })
            .catch((e) => console.log(e));

    };

    useEffect(() => {
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

                        <div className={styleMobile.name}>{userName !== "" && (
                            <Text> {userName}</Text>
                        )}</div>

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
                        <div className={styleBrowser.container}>
                            <div className={styleBrowser.name}>
                                {userName !== "" && (
                                    <>
                                    <Text> {userName}</Text>
                                    </>)}
                                
                            </div>


                            <div className={styleBrowser.qr}>
                                {qr != "" && (
                                    <img src={`data:image/png;base64,${qr}`} alt="QR" />
                                )}

                            </div>
                        </div>
                        <div className={styleBrowser.tshirt}>
                            <div className={styleBrowser.dummyDiv}></div>
                            <div className={styleBrowser.tshirtHeading}>T-Shirt Preference</div>

                            <div className={styleBrowser.currentSize}><p>{size}</p></div>
                        </div>
                        <div className={styleBrowser.tshirtOptions}>

                            {availableSizes.map((i: string) => {
                                return (<div className={styleBrowser.available} onClick={() => changeSize(i)}>{i}</div>);
                            })}



                        </div>
                    </div>
                </div>
            </BrowserView>

        </>
    )
}

export default Profile;