export type TwilioErrorLogType = "APPLICATION" | "TWILIO" | "CARRIER";
export type TwilioErrorLogLevel = "ERROR" | "WARNING";

export type TwilioErrorProduct =
  | "Phone Numbers"
  | "Proxy"
  | "Programmable Voice"
  | "Interconnect"
  | "Functions"
  | "Lookup"
  | "Programmable SMS"
  | "Programmable Video"
  | "Programmable Chat"
  | "Studio"
  | "Notifications"
  | "Verify"
  | "TaskRouter"
  | "Programmable Wireless"
  | "Events"
  | "Flex"
  | "Elastic SIP Trunking"
  | "Sync"
  | "Contacts"
  | "Programmable Messaging"
  | "Super SIM"
  | "Frontline"
  | "Understand"
  | "Branded Comms"
  | "Programmable Fax"
  | "Platform"
  | "Conversations"
  | "Twilio Live"
  | "Notify";

export interface TwilioError {
  code: number;
  message: string;
  log_level: TwilioErrorLogLevel;
  log_type: TwilioErrorLogType | null;
  secondary_message: string | null;
  docs: string | null;
  causes: string | null;
  solutions: string | null;
  description: string | null;
  product: TwilioErrorProduct | null;
  date_created: Date;
  last_updated: Date;
}

export const TWILIO_ERROR_CODES_LIST: Readonly<TwilioError[]>;
export const TWILIO_ERROR_CODES_MAP: Readonly<Map<number, TwilioError>>;
export const TWILIO_ERROR_CODE_SET: Readonly<Set<number>>;