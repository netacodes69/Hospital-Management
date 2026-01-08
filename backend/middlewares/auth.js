import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";

// ================= ADMIN AUTH =================
export const isAdminAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Admin not authenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user || user.role !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized as Admin",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired admin token",
    });
  }
};

// ================= PATIENT AUTH =================
export const isPatientAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.patientToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user || user.role !== "Patient") {
      return res.status(403).json({
        success: false,
        message: "Not authorized as Patient",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired patient token",
    });
  }
};
