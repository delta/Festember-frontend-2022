import styleMobile from "./styleMobile.module.css";
import styleBrowser from "./styleBrowser.module.css";
import { MobileView, BrowserView } from "react-device-detect";
import { useState, useEffect, useContext, useCallback } from "react";
import { Text } from '@chakra-ui/react';
import { userContext } from "../../contexts/UserContext";
import ReactFullpage from "@fullpage/react-fullpage";

import { config } from "../../../config";

const Profile = () => {
    const { isLoggedIn, loading } = useContext(userContext);
    const [qr, setQr] = useState<string>("");
    const [userName, setUserName] = useState<string>("")
	const [eventDetails, setEventDetails] = useState([{}]);
	const [workshopDetails, setWorkshopDetails] = useState([{}]);
	const [informalDetails, setInformalDetails] = useState([{}]);

    const getDetails = useCallback(() => {
        fetch(`${config.backendOrigin}/user/registeredDetails`, {
				method: "GET",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				}
			})
				.then((res) => res.json())
				.then((response) => {
					if(response.status_code === 200){
						setUserName(response.message.user_name);
						setEventDetails(response.message.events);
						setWorkshopDetails(response.message.workshops);
						setInformalDetails(response.message.informals);
					}
				})
				.catch((e) => {
					console.log(e);
				});
    }, []);

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
							<div className={styleMobile.name}>
								{userName !== "" && <Text> {userName}</Text>}
							</div>

							<div className={styleMobile.qr}>
								{qr != "" && (
									<img src={`data:image/png;base64,${qr}`} alt="QR" />
								)}
							</div>

							<div className={styleBrowser.event}>
								<div className={styleMobile.subContainer}>
									<div className={styleMobile.header}>
										registered events
									</div>
									<div className={styleMobile.eventOptions}>
										{eventDetails.length > 0 ? (eventDetails.map((i: any) => {
											return (
												<li className={styleMobile.available}>
													{i.event_name}
												</li>
											);
										})) : (<div>No Registered Events</div>)}
									</div>
								</div>

								<div className={styleMobile.subContainer}>
									<div className={styleMobile.header}>
										registered worshops
									</div>
									<div className={styleMobile.eventOptions}>
										{workshopDetails.length > 0 ? (workshopDetails.map((i: any) => {
											return (
												<li className={styleMobile.available}>
													{i.workshop_name}
												</li>
											);
										})) : (<div>No Registered Workshops</div>)}
									</div>
								</div>

								<div className={styleMobile.subContainer} style={{marginBottom: "1em"}}>
									<div className={styleMobile.header}>
										registered informals
									</div>
									<div className={styleMobile.eventOptions}>
										{informalDetails.length > 0 ? (informalDetails.map((i: any) => {
											return (
												<li className={styleMobile.available}>
													{i.informals_name}
												</li>
											);
										})) : (<div>No registered informals</div>)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</MobileView>
				<BrowserView>
					<ReactFullpage
						scrollingSpeed={1000}
						render={() => {
							return (
								<ReactFullpage.Wrapper>
									<div className="section">
										<div className={styleBrowser.display}>
											<div className={styleBrowser.title}>
												Profile
											</div>
											<div className={styleBrowser.profileDetails}>
												<div className={styleBrowser.container}>
													<div className={styleBrowser.name}>
														{userName !== "" && (
															<>
																<Text> {userName}</Text>
															</>
														)}
													</div>

													<div className={styleBrowser.qr}>
														{qr != "" && (
															<img
																src={`data:image/png;base64,${qr}`}
																alt="QR"
															/>
														)}
													</div>
												</div>
												<div className={styleBrowser.event}>
													<div>
														<div className={styleBrowser.header}>
															registered events
														</div>
														<div
															className={
																styleBrowser.eventOptions
															}
														>
															{eventDetails.length > 0 ? (
																eventDetails.map(
																	(event: any) => {
																		return (
																			<div
																				className={
																					styleBrowser.available
																				}
																			>
																				{event.event_name}
																			</div>
																		);
																	}
																)
															) : (
																<div>No Registered events</div>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="section">
										<div
											className={styleBrowser.title}
											style={{ fontSize: "5em", marginTop: "-1em" }}
										>
											Registered Workshops and Informals
										</div>
										<div className={styleBrowser.other}>
											{informalDetails.length +
												workshopDetails.length >
											0 ? (
												<>
													<div
														className={styleBrowser.subContainer}
													>
														<ul className={styleBrowser.list}>
															{workshopDetails.map(
																(field: any) => {
																	return (
																		<li>
																			<div
																				className={
																					styleBrowser.eventName
																				}
																			>
																				{
																					field.workshop_name
																				}
																			</div>
																		</li>
																	);
																}
															)}
														</ul>
													</div>
													<div
														className={styleBrowser.subContainer}
													>
														<ul className={styleBrowser.list}>
															{informalDetails.map(
																(field: any) => {
																	return (
																		<li>
																			<div
																				className={
																					styleBrowser.eventName
																				}
																			>
																				{
																					field.informals_name
																				}
																			</div>
																		</li>
																	);
																}
															)}
														</ul>
													</div>
												</>
											) : (
												<div style={{fontSize: "2em"}}>
													No Registered Workshops or Informals
												</div>
											)}
										</div>
									</div>
								</ReactFullpage.Wrapper>
							);
						}}
					/>
				</BrowserView>
			</>
		);
}

export default Profile;