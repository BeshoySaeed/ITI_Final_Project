export interface Feedback {
  id?: number;
  rate_value: number;
  rate_comment: string;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
  user_first_name?: string;
  user_last_name?: string;
}
