interface GuestLecturesDetailsType {
	guestLectures_id: number;
	guestLectures_name: string;
	guestLectures_desc: string;
	guestLectures_image_name: string;
}

interface SlotDetailsType {
	slot_id: number;
	workshop_id: number;
	workshop_date: string;
	slot_start_time: string;
	slot_end_time: string;
}

interface InformalsDetailsType {
	informals_id: number;
	informals_name: string;
	informals_desc: string;
	informals_image_name: string;
}
