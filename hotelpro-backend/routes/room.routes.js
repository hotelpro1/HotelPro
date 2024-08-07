import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import roomIndex from "../controllers/room/room.index.js";

const router = express.Router();

router.post("/read-roomtypes/:propertyUnitId", roomIndex.getAllRoomTypes);
router.post("/read-roomtypebyid/:roomTypeId", roomIndex.getRoomTypeById);
router.post("/add-roomtype/:propertyUnitId", roomIndex.createRoomType);
router.post("/update-roomtype/:roomTypeId", roomIndex.updateRoomTypeById);
router.post(
  "/create-roomtype-and-rooms/:propertyUnitId",
  roomIndex.createRoomTypeWithRooms
);

router.post(
  "/read-roomtype-and-rooms/:propertyUnitId",
  roomIndex.getRoomTypeAndRooms
);

router.post("/create-room", roomIndex.createRoom);
router.post("/update-room/:roomId", roomIndex.updateRoomById);
router.post("/delete-room/:roomId", roomIndex.deleteRoomById);

router.post("/read-room-maintenance", roomIndex.getRoomMaintenance);
router.post("/create-room-maintenance", roomIndex.createRoomMaintenance);
router.post("/update-room-maintenance", roomIndex.updateRoomMaintenance);
router.post("/delete-room-maintenance", roomIndex.deleteRoomMaintenance);
router.post(
  "/update-room-maintenance-range",
  roomIndex.updateRoomMaintenanceRange
);

export default router;
