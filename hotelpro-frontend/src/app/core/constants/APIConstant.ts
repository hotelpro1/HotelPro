export const APIConstant = {
  LOGIN: 'user/login',
  FORGOT_PASSWORD: 'user/forget-password',
  LOGOUT: 'user/logout',
  REFRESH_TOKEN: 'user/refresh-token',
  GET_USER: 'user/current-user',
  CHANGE_PASSWORD: 'user/change-password',
  RESET_PASSWORD: 'user/reset-password/', //reset-password/:resetToken
  REGISTER_USER: 'user/register',
  CLIENT_LOGIN_BY_SUPERADMIN: 'user/client-login-by-superadmin',

  CREATE_PROPERTY: 'property/create-property',
  READ_CLIENT_DASHBOARD: 'property/read-client-dashboard',
  READ_USER_BY_PROPERTY_UNIT: 'property/read-user-by-propertyunit/',
  UPDATE_USER: 'property/update-user/',
  UPLOAD_PROFILE_PHOTO: 'property/upload-profile-photo',
  UPLOAD_ROOMS_PHOTOS: 'property/upload-rooms-photos',
  UPDATE_PROPERTY_UNIT: 'propertyunit/update-propertyunit/',
  CREATE_PROPERTY_UNIT: 'propertyunit/create-propertyunit',
  READ_PROPERTY_UNIT: 'propertyunit/read-propertyunit/',

  GET_SUPERADMIN_DASHBOARD: 'admin/get-superadmin-dashboard/',

  READ_ROOMTYPES: 'room/read-roomtypes/',
  READ_ROOMTYPE_BY_ID: 'room/read-roomtypebyid/',
  ADD_ROOMTYPES: 'room/add-roomtype/',
  UPDATE_ROOM_TYPE: 'room/update-roomtype/',
  CREATE_ROOMTYPE_AND_ROOMS: 'room/create-roomtype-and-rooms/',
  READ_ROOMTYPE_AND_ROOMS: 'room/read-roomtype-and-rooms/',

  CREATE_ROOM: 'room/create-room',
  UPDATE_ROOM: 'room/update-room/',
  DELETE_ROOM: 'room/delete-room/',

  READ_ROOM_MAINTENANCE: 'room/read-room-maintenance/',
  CREATE_ROOM_MAINTENANCE: 'room/create-room-maintenance/',
  UPDATE_ROOM_MAINTENANCE: 'room/update-room-maintenance/',
  DELETE_ROOM_MAINTENANCE: 'room/delete-room-maintenance/',
  UPDATE_ROOM_MAINTENANCE_RANGE: 'room/update-room-maintenance-range/',
  READ_AVAILABLE_ROOM_FOR_DATERANGE: 'room/read-available-room-for-daterange/',

  CREATE_HOUSE_KEEPER: 'room/create-house-keeper/',
  UPDATE_HOUSE_KEEPER: 'room/update-house-keeper/',
  READ_HOUSE_KEEPER: 'room/read-house-keeper/',
  DELETE_HOUSE_KEEPER: 'room/delete-house-keeper/',
  READ_ROOMS_WITH_HOUSE_KEEPING: 'room/read-rooms-with-house-keeping/',
  UPDATE_ROOMS_WITH_HOUSE_KEEPING: 'room/update-rooms-with-house-keeping/',
  CREATE_HOUSE_KEEPING_TASK: 'room/create-house-keeping-task/',
  COMPLETE_TASK_BY_ID: 'room/complete-task-by-id/',

  CREATE_TAX: 'propertyunit/create-tax',
  UPDATE_TAX: 'propertyunit/update-tax/',
  GET_TAX_BY_ID: 'propertyunit/get-tax-by-id/',
  DELETE_TAX: 'propertyunit/delete-tax/',
  GET_ALL_TAXES: 'propertyunit/get-all-taxes/',

  CREATE_NOSHOW_POLICY: 'ratemanagement/create-noshow-policy',
  UPDATE_NOSHOW_POLICY: 'ratemanagement/update-noshow-policy/',
  GET_NOSHOW_POLICY_BY_ID: 'ratemanagement/get-noshow-policy-by-id/',
  DELETE_NOSHOW_POLICY: 'ratemanagement/delete-noshow-policy/',
  GET_ALL_NOSHOW_POLICIES: 'ratemanagement/get-all-noshow-policies/',

  CREATE_CANCELLATION_POLICY: 'ratemanagement/create-cancellation-policy',
  UPDATE_CANCELLATION_POLICY: 'ratemanagement/update-cancellation-policy/',
  GET_CANCELLATION_POLICY_BY_ID:
    'ratemanagement/get-cancellation-policy-by-id/',
  DELETE_CANCELLATION_POLICY: 'ratemanagement/delete-cancellation-policy/',
  GET_ALL_CANCELLATION_POLICIES:
    'ratemanagement/get-all-cancellation-policies/',

  READ_RATEPLAN: 'ratemanagement/read-rateplan/',
  CREATE_RATEPLAN: 'ratemanagement/create-rateplan',
  UPDATE_RATEPLAN: 'ratemanagement/update-rateplan/',

  READ_RESERVATION_RATE: 'reservation/read-reservation-rate/',
  CREATE_RESERVATION: 'reservation/create-reservation',
  UPLOAD_RESERVATION_IMAGES: 'reservation/upload-reservation-images',
  GUEST_FOLIO: 'reservation/guest-folio',
  STAY_UPDATE: 'reservation/stay-update',
  ADD_ROOM: 'reservation/add-room',
  CHANGE_ROOM: 'reservation/change-room',
  GET_ALL_RESERVATION: 'reservation/get-all-reservation',

  CREATE_PAYMENT_ORDER: 'razor/create-payment-order',
  VALIDATE_PAYMENT: 'razor/validate-payment',
};
