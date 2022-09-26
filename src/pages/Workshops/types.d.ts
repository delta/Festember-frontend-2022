interface WorkshopDetailsType {
    workshop_id: number;
    workshop_name: string;
    workshop_desc: string;
    workshop_image_name: string;
}

interface SlotDetailsType {
    slot_id: number;
    workshop_id: number;
    workshop_date: string;
    slot_start_time: string;
    slot_end_time: string;
}
