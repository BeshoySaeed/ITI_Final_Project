export interface Order {
  id: string;
  user_id: string;
  completed: boolean;
  note: string;
  payment_method: string;
  discount_code_id: string;
  confirm_instructions:string;
  street: string;
  area: string;
  city: string;
  building_name: string;
  floor_number: string;
  flat_number: string;
  gps_location: string;
}
