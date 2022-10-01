import { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import Loader from "../../components/LoadingSpinner/Loader";
import "./styles.css";
import { config as appConfig } from "../../../config";

const LeaderBoard = () => {
	const [leaderBoardDetails, setLeaderBoardDetails] = useState<
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
												{leaderBoardDetails[1]?.college_name[0]}
											</div>
											<div
												className="rankingDiamond"
												id="runner1Rank"
											>
												<div className="rankingNumber">2</div>
											</div>
										</div>
										<Tooltip
											label={leaderBoardDetails[1]?.college_name}
										>
											<div className="name sideNames">
												{leaderBoardDetails[1]?.college_name
													.length > 25
													? leaderBoardDetails[1]?.college_name.substring(
															0,
															24
													  ) + "..."
													: leaderBoardDetails[1]?.college_name}
											</div>
										</Tooltip>
										<div className="score" id="runner1Color">
											{leaderBoardDetails[1]?.points}
										</div>
									</div>
									<div className="one item">
										<div className="pic winner">
											<div className="avatar" id="winnerColor">
												{leaderBoardDetails[0]?.college_name[0]}
											</div>
											<div
												className="rankingDiamond"
												id="winnerRank"
											>
												<div className="rankingNumber">1</div>
											</div>
										</div>
										<Tooltip
											label={leaderBoardDetails[0]?.college_name}
										>
											<div className="name winnerName">
												{leaderBoardDetails[0]?.college_name
													.length > 25
													? leaderBoardDetails[0]?.college_name.substring(
															0,
															24
													  ) + "..."
													: leaderBoardDetails[0]?.college_name}
											</div>
										</Tooltip>
										<div className="score" id="winnerColor">
											{leaderBoardDetails[0]?.points}
										</div>
									</div>
									<div className="three item">
										<div className="pic runner2">
											<div className="avatar" id="runner2Color">
												{leaderBoardDetails[2]?.college_name[0]}
											</div>
											<div
												className="rankingDiamond"
												id="runner2Rank"
											>
												<div className="rankingNumber">3</div>
											</div>
										</div>
										<Tooltip
											label={leaderBoardDetails[2]?.college_name}
										>
											<div className="name sideNames">
												{leaderBoardDetails[2]?.college_name
													.length > 25
													? leaderBoardDetails[2]?.college_name.substring(
															0,
															24
													  ) + "..."
													: leaderBoardDetails[2]?.college_name}
											</div>
										</Tooltip>
										<div
											className="score"
											style={{ color: "#8BA7DF" }}
										>
											{leaderBoardDetails[2]?.points}
										</div>
									</div>
								</div>
							</div>
							<div style={{ marginTop: "2rem" }}>
								<div className="leaderboardBottom">
									<div className="glassContainer" />
									{leaderBoardDetails.map((item, index) => {
										if (index > 2) {
											return (
												<div className="leaderboardBottomContainer">
													<div className="leaderboardBottomRow">
														<div className="lbRow ">
															<div className="pic">
																<div className="avatar">
																	{
																		leaderBoardDetails[index]
																			?.college_name[0]
																	}
																</div>
																<div className="rankingDiamond">
																	<div
																		className="rankingNumber"
																		id="lbRowRank"
																	>
																		{
																			leaderBoardDetails[
																				index
																			]?.rank
																		}
																	</div>
																</div>
															</div>
															<div className="lbBottomContent breakWord">
																{
																	leaderBoardDetails[index]
																		?.college_name
																}
															</div>
														</div>
														<div className="lbBottomContent">
															{leaderBoardDetails[index]?.points}
														</div>
													</div>
													{index <
													leaderBoardDetails.length - 1 ? (
														<div className="leaderboardDivider" />
													) : (
														""
													)}
												</div>
											);
										}
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
