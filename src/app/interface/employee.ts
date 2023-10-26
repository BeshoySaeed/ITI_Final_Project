export interface Employee {
  id?: number;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  phone: string;
  national_id: number;
  street: string;
  area: string;
  city: string;
  salary: number;
  joined_at: string;
  created_at?: string;
  updated_at?: string;
  branch_name?: string;
  branch_id?: number;
}
