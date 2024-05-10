/** Options interface */
export interface options {
  /** Label of option */
  label: string;
  /** value of option */
  value: string;
}

/** Bank codes interface */
export interface codes {
  /** Entity */
  entity: string;
  /** Code of bank */
  code: string;
}

export interface inputValidate {
  companyId: string;
  custIdType: string;
  custIdNum: string;
  ipaddress: string;
}
