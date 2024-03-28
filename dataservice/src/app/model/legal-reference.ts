export type LegalReference = {
  type: LegalReferenceType;
  value: string;
};

export enum LegalReferenceType {
  ID = 'ID',
  PASSPORT = 'PASSPORT',
  TAXNUMBER = 'TAXNUMBER',
}
