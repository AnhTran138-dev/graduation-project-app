export enum Role {
  Driver = 'Driver',
  Owner = 'Owner',
}

export enum FinancialReportStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Rejected = 'Rejected',
}

export enum CarStatus {
  Inactive = 'Inactive',
  Pending = 'Pending',
  Available = 'Available',
  Rented = 'Rented',
  Maintain = 'Maintain',
  Rejected = 'Rejected',
}

export enum CarContractStatus {
  Pending = 'Pending',
  OwnerSigned = 'OwnerSigned',
  TechnicianSigned = 'TechnicianSigned',
  Completed = 'Completed',
  Rejected = 'Rejected',
}

export enum BookingReportType {
  Conflict = 'Conflict',
  Accident = 'Accident',
  FineNotice = 'FineNotice',
  Damage = 'Damage',
  Maintenance = 'Maintenance',
  Other = 'Other',
}

export enum BookingReportTypeNumber {
  Conflict = 0,
  Accident = 1,
  FineNotice = 2,
  Damage = 3,
  Maintenance = 4,
  Other = 5,
}

export enum BookingReportStatus {
  Pending = 'Pending',
  UnderReview = 'UnderReview',
  Resolved = 'Resolved',
  Rejected = 'Rejected',
}

export enum BookingReportStatusNumber {
  Pending = 0,
  UnderReview = 1,
  Resolved = 2,
  Rejected = 3,
}

export enum CarStatusNumber {
  Inactive = 0,
  Pending = 1,
  Available = 2,
  Rented = 3,
  Maintain = 4,
  Rejected = 5,
}

export enum BookingStatusEnum {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
  ReadyForPickup = 'ReadyForPickup',
  Ongoing = 'Ongoing',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
  Expired = 'Expired',
  Done = 'Done',
}

export enum BookingStatusNumber {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
  ReadyForPickup = 3,
  Ongoing = 4,
  Completed = 5,
  Done = 6,
  Cancelled = 7,
  Expired = 8,
}

export enum TransactionStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
  Cancelled = 'Cancelled',
}

export enum ScheduleStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
  InProgress = 'InProgress',
  Expired = 'Expired',
  Signed = 'Signed',
}

export enum ScheduleStatusNumber {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
  InProgress = 3,
  Expired = 4,
  Signed = 5,
}

export enum CarReportType {
  ChangeGPS = 'ChangeGPS',
  DeactivateCar = 'DeactivateCar',
  Other = 'Other',
}

export enum CarReportTypeNumber {
  ChangeGPS = 0,
  DeactivateCar = 1,
  Other = 2,
}

export enum CarReportStatus {
  Pending = 'Pending',
  UnderReview = 'UnderReview',
  Resolved = 'Resolved',
  Rejected = 'Rejected',
}

export enum CarReportStatusNumber {
  Pending = 0,
  UnderReview = 1,
  Resolved = 2,
  Rejected = 3,
}

export enum SchedulePhotoType {
  ExteriorCar = 'ExteriorCar',
  FuelGauge = 'FuelGauge',
  ParkingLocation = 'ParkingLocation',
  CarKey = 'CarKey',
  TrunkSpace = 'TrunkSpace',
  FuelGaugeFinal = 'FuelGaugeFinal',
  Scratches = 'Scratches',
  Cleanliness = 'Cleanliness',
  TollFees = 'TollFees',
  VehicleInspectionCertificate = 'VehicleInspectionCertificate',
  Other = 'Other',
}

export enum ScheduleType {
  NewCar = 'NewCar',
  Incident = 'Incident',
  ChangeGPS = 'ChangeGPS',
}

export const ScheduleStatusMap: Record<ScheduleStatusNumber, ScheduleStatus> = {
  [ScheduleStatusNumber.Pending]: ScheduleStatus.Pending,
  [ScheduleStatusNumber.Approved]: ScheduleStatus.Approved,
  [ScheduleStatusNumber.Rejected]: ScheduleStatus.Rejected,
  [ScheduleStatusNumber.InProgress]: ScheduleStatus.InProgress,
  [ScheduleStatusNumber.Expired]: ScheduleStatus.Expired,
  [ScheduleStatusNumber.Signed]: ScheduleStatus.Signed,
};

export function getScheduleStatusFromNumber(
  statusNumber: ScheduleStatusNumber
): keyof typeof ScheduleStatus {
  return ScheduleStatusMap[statusNumber];
}
