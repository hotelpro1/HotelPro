import mongoose from "mongoose";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  UserTypesEnum,
  UserLoginType,
  MaintenanceStatusEnum,
  USER_TEMPORARY_TOKEN_EXPIRY,
  RoomStatusEnum,
  RoomConditionEnum,
  ChangeValueEnum,
  //
  AvailableUserLoginType,
  AvailableUserTypes,
  AvailableChangeValueEnum,
  AvailableMaintenanceStatus,
  AvailableReservationStatusEnum,
  AvailableVehicleTypeEnum,
  AvailableWeekDayEnum,
  AvailableRateTypeEnum,
  AvailableRoomStatusEnum,
  AvailableRoomConditionEnum,
  AvailableBalanceNameEnum,
  ReservationStatusEnum,
  BalanceNameEnum,
} from "../constants.js";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    firstName: String,
    lastName: String,
    dob: String,
    isLoginable: {
      type: Boolean,
      default: false,
    },
    phone: String,
    addressId: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    userType: {
      type: String,
      enum: AvailableUserTypes,
      default: UserTypesEnum.CLIENT,
      required: true,
    },
    password: String,
    loginType: {
      type: String,
      enum: AvailableUserLoginType,
      default: UserLoginType.EMAIL_PASSWORD,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: String,
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    emailVerificationToken: String,
    emailVerificationExpiry: Date,
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: "https://via.placeholder.com/200x200.png",
        localPath: "",
      },
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userType: this.userType,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

/**
 * @description Method responsible for generating tokens for email verification, password reset etc.
 */
userSchema.methods.generateTemporaryToken = function () {
  // This token should be client facing
  // for example: for email verification unHashedToken should go into the user's mail
  const unHashedToken = crypto.randomBytes(20).toString("hex");

  // This should stay in the DB to compare at the time of verification
  const hashedToken = crypto
    .createHash("sha256")
    .update(unHashedToken)
    .digest("hex");
  // This is the expiry time for the token (20 minutes)
  const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY;

  return { unHashedToken, hashedToken, tokenExpiry };
};

export const User = mongoose.model("User", userSchema);

const propertySchema = new Schema(
  {
    subscriptionId: String,
    propertyName: String,
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isVIP: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const Property = mongoose.model("Property", propertySchema);

const propertyUnitSchema = new Schema(
  {
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
    propertyUnitName: String,
    propertyUnitLegalName: String,
    propertyUnitCode: String,
    propertyUnitType: String,
    managerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    addressId: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    description: String,
    website: String,
    socialMediaLinks: [String],
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const PropertyUnit = mongoose.model("PropertyUnit", propertyUnitSchema);

const propertyUnitSetupSchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    checkInTime: String,
    checkOutTime: String,
  },
  { timestamps: true }
);
export const PropertyUnitSetup = mongoose.model(
  "PropertyUnitSetup",
  propertyUnitSetupSchema
);

const taxSchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    taxPercentage: Number,
    taxName: String,
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export const Tax = mongoose.model("Tax", taxSchema);

const roomTypeSchema = new Schema(
  {
    roomTypeName: {
      type: String,
      required: true,
    },
    active: { type: Boolean, default: true },
    roomTypeCategory: String,
    description: String,
    images: [String],
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    adultOccupancy: Number,
    childOccupancy: Number,
  },
  { timestamps: true }
);
export const RoomType = mongoose.model("RoomType", roomTypeSchema);

const roomSchema = new Schema(
  {
    roomName: String,
    roomNumber: String,
    roomTypeId: {
      type: Schema.Types.ObjectId,
      ref: "RoomType",
    },
    roomStatus: {
      type: String,
      enum: AvailableRoomStatusEnum,
      default: RoomStatusEnum.VACANT,
    },
    roomCondition: {
      type: String,
      enum: AvailableRoomConditionEnum,
      default: RoomConditionEnum.CLEAN,
    },
    dnd: Boolean,
  },
  { timestamps: true }
);
export const Room = mongoose.model("Room", roomSchema);

const addressSchema = new Schema(
  {
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    location: String,
  },
  { timestamps: true }
);
export const Address = mongoose.model("Address", addressSchema);

const ratePlanSetupSchema = new Schema(
  {
    active: Boolean,
    isBaseRate: Boolean,
    ratePlanName: String,
    ratePlanShortName: String,
    ratePlanDescription: String,
    cancellationPolicyId: {
      type: Schema.Types.ObjectId,
      ref: "CancellationPolicy",
    },
    noShowPolicyId: {
      type: Schema.Types.ObjectId,
      ref: "NoShowPolicy",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    isRefundable: Boolean,
  },
  { timestamps: true }
);
export const RatePlanSetup = mongoose.model(
  "RatePlanSetup",
  ratePlanSetupSchema
);

const ratePlanRoomTypeSchema = new Schema(
  {
    ratePlanSetupId: {
      type: Schema.Types.ObjectId,
      ref: "RatePlanSetup",
    },
    startDate: Date,
    endDate: Date,
    roomTypeId: {
      type: Schema.Types.ObjectId,
      ref: "RoomType",
    },
  },
  { timestamps: true }
);
export const RatePlanRoomType = mongoose.model(
  "RatePlanRoomType",
  ratePlanRoomTypeSchema
);

const ratePlanRoomRateSchema = new Schema(
  {
    ratePlanRoomDetailId: {
      type: Schema.Types.ObjectId,
      ref: "RatePlanRoomType",
    },
    rateType: {
      type: String,
      enum: AvailableRateTypeEnum,
    },
    baseRate: Number,
  },
  { timestamps: true }
);
export const RatePlanRoomRate = mongoose.model(
  "RatePlanRoomRate",
  ratePlanRoomRateSchema
);

const ratePlanRoomDateRateSchema = new Schema(
  {
    ratePlanRoomDetailId: {
      type: Schema.Types.ObjectId,
      ref: "RatePlanRoomType",
    },
    ratePlanRoomRateId: {
      type: Schema.Types.ObjectId,
      ref: "RatePlanRoomRate",
    },
    baseRate: Number,
  },
  { timestamps: true }
);
export const RatePlanRoomDateRate = mongoose.model(
  "RatePlanRoomDateRate",
  ratePlanRoomDateRateSchema
);

const yieldSchema = new Schema(
  {
    yieldName: String,
    active: Boolean,
    yieldDescription: String,
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    ratePlanSetupId: {
      type: Schema.Types.ObjectId,
      ref: "RatePlanSetup",
    },
  },
  { timestamps: true }
);
export const Yield = mongoose.model("Yield", yieldSchema);

const yieldRoomTypeSchema = new Schema(
  {
    yieldId: {
      type: Schema.Types.ObjectId,
      ref: "Yield",
    },
    roomTypeId: {
      type: Schema.Types.ObjectId,
      ref: "RoomType",
    },
    startDate: Date,
    endDate: Date,
    occupancyRangeStart: Number,
    occupancyRangeEnd: Number,
    changeType: {
      type: String,
      enum: AvailableChangeValueEnum,
    },
    changeValue: Number,
  },
  { timestamps: true }
);
export const YieldRoomType = mongoose.model(
  "YieldRoomType",
  yieldRoomTypeSchema
);

const noShowPolicySchema = new Schema(
  {
    noShowPolicyName: String,
    chargeType: {
      type: String,
      enum: AvailableChangeValueEnum,
    },
    chargeValue: Number,
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    policyDescription: String,
  },
  { timestamps: true }
);
export const NoShowPolicy = mongoose.model("NoShowPolicy", noShowPolicySchema);

const cancellationPolicySchema = new Schema(
  {
    cancelPolicyName: String,
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    policyDescription: String,
    windowRange: String,
    windowType: {
      type: String,
      enum: AvailableChangeValueEnum,
      default: ChangeValueEnum.PERCENTAGE,
    },
    insideWindowCharge: Number,
    outsideWindowCharge: Number,
  },
  { timestamps: true }
);
export const CancellationPolicy = mongoose.model(
  "CancellationPolicy",
  cancellationPolicySchema
);

const earlyCheckoutPolicySchema = new Schema(
  {
    earlyCheckoutPolicyName: String,
    chargeType: {
      type: String,
      enum: AvailableChangeValueEnum,
    },
    chargeValue: Number,
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    policyDescription: String,
  },
  { timestamps: true }
);
export const EarlyCheckoutPolicy = mongoose.model(
  "EarlyCheckoutPolicy",
  earlyCheckoutPolicySchema
);

const reservationDocumentSchema = new Schema(
  {
    documentType: String,
    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    documentLink: String,
  },
  { timestamps: true }
);
export const ReservationDocument = mongoose.model(
  "ReservationDocument",
  reservationDocumentSchema
);

const propertyUnitDocumentSchema = new Schema(
  {
    documentType: String,
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    documentLink: String,
  },
  { timestamps: true }
);
export const PropertyUnitDocument = mongoose.model(
  "PropertyUnitDocument",
  propertyUnitDocumentSchema
);

const housekeepingTaskSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    taskName: String,
    taskDescription: String,
  },
  { timestamps: true }
);
export const HousekeepingTask = mongoose.model(
  "HousekeepingTask",
  housekeepingTaskSchema
);

const housekeepingAssignSchema = new Schema(
  {
    housekeepingTaskId: {
      type: Schema.Types.ObjectId,
      ref: "HousekeepingTask",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    scheduleDate: Date,
    scheduleTime: String,
    status: String,
  },
  { timestamps: true }
);
export const HousekeepingAssign = mongoose.model(
  "HousekeepingAssign",
  housekeepingAssignSchema
);

const bookingControlSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    date: Date,
    soldOut: Boolean,
  },
  { timestamps: true }
);
export const BookingControl = mongoose.model(
  "BookingControl",
  bookingControlSchema
);

const roomMaintenanceSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    startDate: Date,
    endDate: Date,
    reason: String,
    description: String,
    status: {
      type: String,
      enum: AvailableMaintenanceStatus,
      default: MaintenanceStatusEnum.PENDING,
    },
  },
  { timestamps: true }
);
export const RoomMaintenance = mongoose.model(
  "RoomMaintenance",
  roomMaintenanceSchema
);

const groupReservationSchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    arrival: Date,
    departure: Date,
    adults: Number,
    childs: Number,
    notes: String,
  },
  { timestamps: true }
);

export const GroupReservation = mongoose.model(
  "GroupReservation",
  groupReservationSchema
);

const reservationSchema = new Schema(
  {
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "GroupReservation",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    tantative: {
      type: Boolean,
      default: false,
    },
    arrival: Date,
    departure: Date,
    reservationStatus: {
      type: String,
      enum: AvailableReservationStatusEnum,
      default: ReservationStatusEnum.RESERVED,
    },
    notes: String,
    confirmationNumber: String,
    ratePlanSetupId: {
      type: Schema.Types.ObjectId,
      ref: "RatePlanSetup",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    secondaryUserIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
export const Reservation = mongoose.model("Reservation", reservationSchema);

const reservationDetailSchema = new Schema(
  {
    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
    checkInDate: Date,
    checkOutDate: Date,
    noShowDate: Date,
    cancellationDate: Date,
    confirmationNumber: String,
    adults: {
      type: Number,
      default: 2,
    },
    childs: {
      type: Number,
      default: 0,
    },
    checkInTime: Date,
    checkOutTime: Date,
    roomCost: {
      type: Number,
      default: 0,
    },
    deposit: {
      type: Number,
      default: 0,
    },
    payment: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export const ReservationDetail = mongoose.model(
  "ReservationDetail",
  reservationDetailSchema
);

const shiftSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    shiftStartTime: Date,
    shiftEndTime: Date,
    day: {
      type: String,
      enum: AvailableWeekDayEnum,
    },
    active: Boolean,
  },
  { timestamps: true }
);
export const Shift = mongoose.model("Shift", shiftSchema);

const vehicleSchema = new Schema(
  {
    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    vehicleCompanyName: String,
    vehicleType: {
      type: String,
      enum: AvailableVehicleTypeEnum,
    },
    vehicleNumber: String,
    vehicleColor: String,
    vehicleDescription: String,
  },
  { timestamps: true }
);
export const Vehicle = mongoose.model("Vehicle", vehicleSchema);

const hotelAmenitySchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    amenityName: String,
    amenityCharges: Number,
    amenityDescription: String,
  },
  { timestamps: true }
);
export const HotelAmenity = mongoose.model("HotelAmenity", hotelAmenitySchema);

const roomAmenitySchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    roomTypeId: {
      type: Schema.Types.ObjectId,
      ref: "RoomType",
    },
    amenityName: String,
    amenityCharges: Number,
    amenityDescription: String,
  },
  { timestamps: true }
);
export const RoomAmenity = mongoose.model("RoomAmenity", roomAmenitySchema);

const notificationSchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isRead: Boolean,
    message: String,
  },
  { timestamps: true }
);
export const Notification = mongoose.model("Notification", notificationSchema);

const newDaySchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    ledgerDate: Date,
  },
  { timestamps: true }
);
export const NewDay = mongoose.model("NewDay", newDaySchema);

const nightAuditSchema = new Schema(
  {
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    date: Date,
    report: Object,
  },
  { timestamps: true }
);
export const NightAudit = mongoose.model("NightAudit", nightAuditSchema);

const billingAccountSchema = new Schema(
  {
    billingAccountName: String,
    billingAccountDescription: String,
    propertyUnitId: {
      type: Schema.Types.ObjectId,
      ref: "PropertyUnit",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const BillingAccount = mongoose.model(
  "BillingAccount",
  billingAccountSchema
);

const transactionCodeSchema = new Schema(
  {
    transactionCode: String,
    transactionRate: Number,
    transactionName: String,
    transactionDetail: String,
    receipt: Number,
    date: Date,
    paymentTypeId: {
      type: Schema.Types.ObjectId,
      ref: "PaymentTypes",
    },
    transactionType: {
      type: String,
      enum: ["Amenity", "Card", "Tax", "Reservation", "Other"],
    },
    refundFlag: Boolean,
  },
  { timestamps: true }
);

export const TransactionCode = mongoose.model(
  "TransactionCode",
  transactionCodeSchema
);

const guestTransactionSchema = new Schema(
  {
    transactionDate: Date,
    acknowledgementDate: Date,
    transactionCodeId: {
      type: Schema.Types.ObjectId,
      ref: "TransactionCode",
    },
    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    billingAccountId: {
      type: Schema.Types.ObjectId,
      ref: "BillingAccount",
    },
    billingCardId: {
      type: Schema.Types.ObjectId,
      ref: "BillingCard",
    },
    deposit: Boolean,
  },
  { timestamps: true }
);

export const GuestTransaction = mongoose.model(
  "GuestTransaction",
  guestTransactionSchema
);

const billingCardSchema = new Schema(
  {
    billingAccountId: {
      type: Schema.Types.ObjectId,
      ref: "BillingAccount",
    },
    billingCardOtherDetails: String,
    cardToken: String,
  },
  { timestamps: true }
);

export const BillingCard = mongoose.model("BillingCard", billingCardSchema);

const roomBalanceSchema = new Schema(
  {
    balanceDate: Date,
    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
    transactionId: {
      type: Schema.Types.ObjectId,
      ref: "GuestTransaction",
    },
    balance: Number,
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    reason: String,
    refundFlag: Boolean,
    balanceName: {
      type: String,
      enum: AvailableBalanceNameEnum,
      default: BalanceNameEnum.ROOMCHARGES,
    },
    deposit: Boolean,
    hidden: Boolean,
    version: [Object],
  },
  { timestamps: true }
);

export const RoomBalance = mongoose.model("RoomBalance", roomBalanceSchema);
