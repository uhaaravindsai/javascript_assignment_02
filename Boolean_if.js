
function evaluateConditions(obj) {
  if (obj.age > 18 && obj.hasLicense) {
    return "Eligible to drive";
  }
  if (obj.temperature > 30 || obj.humidity > 70) {
    return "Warning: High discomfort level";
  }
  if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
    return "Access granted";
  }
  if (!(obj.isBanned) && obj.loginAttempts < 5) {
    return "User is safe";
  }
  if ((obj.balance < 0 && !obj.overdraftProtection) || obj.accountFrozen) {
    return "Account needs attention";
  }
  if ((obj.score >= 90 && obj.attendance === "perfect") || obj.extraCredit > 5) {
    return "Top performer";
  }
  return "No specific condition met";
}