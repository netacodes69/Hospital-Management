export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // cookie name based on role
  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      maxAge: Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000, // ✅ FIX
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // ✅ required for Vercel/Render
      sameSite: "None", // ✅ required for cross-site cookies
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
