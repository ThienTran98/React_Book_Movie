const USER_LOCAL = "USER_LOCAL";
// đặt 1 key dung chung để setItem
export const userLocalStorage = {
  set: (userData) => {
    // convert dữ liệu từ Ob sang json
    let userJSON = JSON.stringify(userData);
    // lưu xuống local
    localStorage.setItem(USER_LOCAL, userJSON);
  },
  get: () => {
    //lấy dữ liệu lên
    let userJSON = localStorage.getItem(USER_LOCAL);
    if (userJSON) {
      return JSON.parse(userJSON);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_LOCAL);
  },
};
