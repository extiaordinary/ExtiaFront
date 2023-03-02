export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
}

export interface JwtToken {
  token: string;
}

export interface UserResponse {
  firstname: string;
  lastname: string;
  email: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  role: string;
}

export interface Seance {
  id: string;
  name: string;
  description : string;
  rewardPoints: number;
  dateStart: Date;
  dateEnd: Date;
  image: String;
  coach: UserResponse;
  participants: UserResponse[];
}

export interface SeanceList {
  id: string;
  name: string;
  description : string;
  rewardPoints: number;
  dateStart: Date;
  dateEnd: Date;
  image: String;
  coach: UserResponse;
}

export enum Role {
  Collaborator = 'COLLABORATOR',
}
