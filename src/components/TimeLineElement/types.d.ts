interface TimeLineElementProps {
	day: number;
	venue: string;
	time: string;
	title: string;
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
