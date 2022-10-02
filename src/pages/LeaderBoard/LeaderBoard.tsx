import { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import Loader from "../../components/LoadingSpinner/Loader";
import "./styles.css";
import { config as appConfig } from "../../../config";

const emptyLeaderBoard = {
	college_name: "",
	points: "",
	rank: 0,
};

const LeaderBoard = () => {
	const [leaderBoardDetails, setLeaderBoardDetails] = useState<
		LeaderBoardDetailsType[]
	>([]);
	const [winnerDetails, setWinnerDetails] =
		useState<LeaderBoardDetailsType>(emptyLeaderBoard);
	const [secondPlaceDetails, setSecondPlaceDetails] =
		useState<LeaderBoardDetailsType>(emptyLeaderBoard);
	const [thirdPlaceDetails, setThirdPlaceDetails] =
		useState<LeaderBoardDetailsType>(emptyLeaderBoard);
	const [otherPlaceDetails, setOtherPlaceDetails] = useState<
		LeaderBoardDetailsType[]
	>([]);

	useEffect(() => {
		const fetchLeaderBoardDetails = async () => {
			fetch(`${appConfig.backendOrigin}/scoreboard/limit/6`, {
				method: "GET",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((response) => {
					setLeaderBoardDetails(response.message);
					if (response.message[0]) {
						setWinnerDetails(response.message[0]);
					}
					if (response.message[1]) {
						setSecondPlaceDetails(response.message[1]);
					}
					if (response.message[2]) {
						setThirdPlaceDetails(response.message[2]);
					}
					if (response.message.length > 3) {
						setOtherPlaceDetails(response.message.slice(3));
					}
				})
				.catch((e) => {
					console.log(e);
				});
		};
		fetchLeaderBoardDetails();
	}, []);

	return (
		<>
			{leaderBoardDetails.length > 0 ? (
				<>
					<div className="leaderBoardTitle">Leaderboard</div>
					<div className="leaderboardContainer">
						<div className="leaderboardContent">
							<div className="eventNameContainer">
								<div className="eventName">EVENTS LEADERBOARD</div>
							</div>
							<div className="dividerLine" />
							<img
								className="leaderboardCrownImage"
								src={appConfig.basePath + "/Assets/Images/crown.png"}
								alt="leaderboard-crown"
							/>
							<div className="topThreeContainer ">
								<div className="top3">
									<div className="two item">
										<div className="pic runner1">
											<div className="avatar" id="runner1Color">
												{secondPlaceDetails.college_name[0]}
											</div>
											<div
												className="rankingDiamond"
												id="runner1Rank"
											>
												<div className="rankingNumber">2</div>
											</div>
										</div>
										<Tooltip label={secondPlaceDetails.college_name}>
											<div className="name sideNames">
												{secondPlaceDetails.college_name.length > 15
													? secondPlaceDetails.college_name.substring(
															0,
															14
													  ) + "..."
													: secondPlaceDetails.college_name}
											</div>
										</Tooltip>
										<div className="score" id="runner1Color">
											{secondPlaceDetails.points}
										</div>
									</div>
									<div className="one item">
										<div className="pic winner">
											<div className="avatar" id="winnerColor">
												{winnerDetails.college_name[0]}
											</div>
											<div
												className="rankingDiamond"
												id="winnerRank"
											>
												<div className="rankingNumber">1</div>
											</div>
										</div>
										<Tooltip label={winnerDetails.college_name}>
											<div className="name winnerName">
												{winnerDetails.college_name.length > 25
													? winnerDetails.college_name.substring(
															0,
															24
													  ) + "..."
													: winnerDetails.college_name}
											</div>
										</Tooltip>
										<div className="score" id="winnerColor">
											{winnerDetails.points}
										</div>
									</div>
									<div className="three item">
										<div className="pic runner2">
											<div className="avatar" id="runner2Color">
												{thirdPlaceDetails.college_name[0]}
											</div>
											<div
												className="rankingDiamond"
												id="runner2Rank"
											>
												<div className="rankingNumber">3</div>
											</div>
										</div>
										<Tooltip label={thirdPlaceDetails.college_name}>
											<div className="name sideNames">
												{thirdPlaceDetails.college_name.length > 15
													? thirdPlaceDetails.college_name.substring(
															0,
															14
													  ) + "..."
													: thirdPlaceDetails.college_name}
											</div>
										</Tooltip>
										<div
											className="score"
											style={{ color: "#8BA7DF" }}
										>
											{thirdPlaceDetails.points}
										</div>
									</div>
								</div>
							</div>
							<div style={{ marginTop: "2rem" }}>
								<div className="leaderboardBottom">
									<div className="glassContainer" />
									{otherPlaceDetails.map((item, index) => {
										return (
											<div className="leaderboardBottomContainer">
												<div className="leaderboardBottomRow">
													<div className="lbRow ">
														<div className="pic">
															<div className="avatar">
																{
																	otherPlaceDetails[index]
																		.college_name[0]
																}
															</div>
															<div className="rankingDiamond">
																<div
																	className="rankingNumber"
																	id="lbRowRank"
																>
																	{index + 4}
																</div>
															</div>
														</div>
														<div className="lbBottomContent breakWord">
															{
																otherPlaceDetails[index]
																	.college_name
															}
														</div>
													</div>
													<div className="lbBottomContent">
														{otherPlaceDetails[index].points}
													</div>
												</div>
												{index < otherPlaceDetails.length - 1 ? (
													<div className="leaderboardDivider" />
												) : (
													""
												)}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default LeaderBoard;
