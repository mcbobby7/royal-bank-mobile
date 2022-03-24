export interface ILogin {
  email: string;
  password: string;
}

export interface IOnboarding {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  dob?: string;
  password?: string;
  refCode?: string;
  accountType?: string;
  companyType: string;
  bvn?: string;
  hasBVN?: boolean;
  isVrifiedInfo?: boolean;
  stage?: number;
  isFinal?: false;
  image?: string;
}
