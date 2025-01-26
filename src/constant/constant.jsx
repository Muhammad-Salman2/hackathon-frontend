const dev_url = "http://localhost:5000";

const prod_url = "https://smit-final-hackathon-backend-production.up.railway.app/";

const Base_URL = dev_url;
// const Base_URL = prod_url;

const AppRouts = {
  signin: Base_URL + "/user/signin",
  signup: Base_URL + "/user//signup",
  getCurrentUserProfile: Base_URL + "/user/currentUserInfo",
  allUsers: Base_URL + "/user/allUsers",
};
export default AppRouts;

// https://smit-final-hackathon-backend-create.up.railway.app/
