const jwt = require("jsonwebtoken");
const User = require("../models/user.model")

exports.generateToken = (id ) => {
  try {
    const token = jwt.sign(
      { userId: id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" } // token valid for 1 day
    );
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Token generation failed");
  }
};

exports.verifyTokenAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user info to request
    req.user = await User.findById(decoded.userId).select("-password");
    
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next(); // proceed to next middleware/route
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

exports.verifyTokenAdmin = async (req, res, next) => {
  try {
    await exports.verifyTokenAuth(req, res, async () => {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Admin access required" });
      }
      next();
    });
  } catch (error) {
    return res.status(403).json({ message: "Access denied" });
  }
};
