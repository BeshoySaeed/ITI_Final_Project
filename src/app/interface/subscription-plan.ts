export interface SubscriptionPlan {
  id: number;
  name: string;
  benefit: string;
  discount_value: number;
  duration: number;
  subscribe_value: number;
  active: number;
  created_at: string;
  updated_at: string;
}
