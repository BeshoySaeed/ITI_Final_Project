export interface UserAddress {
    id: number;
    user_id: number;
    street: string;
    area: string;
    city: string;
    building_name: string;
    floor_number: string;
    flat_number: string;
    gps_location?: string;
}
