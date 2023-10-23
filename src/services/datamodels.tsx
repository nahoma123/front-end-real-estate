interface ErrorResponse {
  code: number;
  message: string;
}

interface ApiOptions {
  headers?: Record<string, string>;
}

interface RegisterUserData {
  email: string;
  password: string;
  phone: string;
  first_name: string;
  middle_name: string;
  last_name: string;
}

interface RegisterUserResponse {
  ok: boolean;
  data?: {
    id: number;
    user_id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    status: string;
    role: string;
    created_at: string;
    updated_at: string;
  };
  error?: {
    code: number;
    message: string;
    field_error?: Array<{
      name: string;
      description: string;
    }>;
  };
}

interface BookingValuationData {
  email: string;
  password: string;
  phone: string;
  first_name: string;
  middle_name: string;
  last_name: string;
}

export type {
  ErrorResponse,
  ApiOptions,
  RegisterUserData,
  RegisterUserResponse,
  BookingValuationData,
};
