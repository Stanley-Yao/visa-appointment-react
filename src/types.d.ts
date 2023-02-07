export interface CheckDatesResponse {
  Items: AvailableDateObject[];
}

export interface AvailableDateObject {
  city: string;
  lastUpdatedAt: string;
  targetConsulate: string;
  country: string;
  availableDates: string[];
}
