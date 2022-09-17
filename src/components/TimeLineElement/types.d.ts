interface TimeLineElementProps {
	yearTitle: string;
	title: string;
	content: string;
	index: number;
	timelineLength: number;
	config: {
		radius: number;
		mobileRadius: number;
		deltaRadius: number;
		mobileDeltaRadius: number;
		lineThickness: number;
		mobileLineThickness: number;
		circleColor: string;
	};
}
