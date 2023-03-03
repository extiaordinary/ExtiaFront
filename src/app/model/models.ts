export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
}

export interface UserClassement {
  firstName: string;
  lastName: string;
  points: number;
}

export interface JwtToken {
  token: string;
}

export interface UserResponse {
  firstName: string;
  lastName: string;
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

export interface Challenge {
  challengeId: string;
  dateStart: Date;
  dateEnd: Date;
  description: string;
  typeSport: string;
  collaboratorChallenger: UserResponse;
  collaboratorChallenged: UserResponse;
  seance: string | SeanceList;
  isAchieved: boolean;
  tag: string;
}

export enum Role {
  Collaborator = 'COLLABORATOR',
}
