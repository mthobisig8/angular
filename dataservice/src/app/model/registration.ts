import { LegalReference } from './legal-reference';

export type Registration = {
  firstname: string;
  lastname: string;
  dob: Date | null;
  legalReference: LegalReference;
};
