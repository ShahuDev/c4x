export interface ContactRequest {
  name: string;
  mobile: string;
  message?: string;
}

export interface ContactResponse {
  status: string;
  message: string;
}
