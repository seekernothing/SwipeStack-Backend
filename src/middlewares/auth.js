

const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

// User Auth

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isuserAuthorized = token === "xyz";
  if (!isuserAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports={
    adminAuth,
    userAuth
}

