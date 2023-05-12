import { Profile } from "../../../../shared/domain/enums";

export interface CreateUserDTO {
  name: string;
  email: string;
  profile: Profile;
  password: string;
}

export interface DetailUserDTO {
  id: string;
  name: string;
  email: string;
  profile: Profile;
  password: string;
}

export interface AuthUserDTO {
  id: string;
  profile: string;
}
