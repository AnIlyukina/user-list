export interface UserForSend {
  firstName: string;
  lastName: string;
  middleName: string | null;
  birthDate: string;
  description: string | null;
}

export interface UserForm {
  fullName: string;
  birthDate: string;
  description: string | null;
}
