const jwt = require("jsonwebtoken");

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
