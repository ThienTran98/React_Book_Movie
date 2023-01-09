import { base_URL } from "./configURL";

export const movieService = {
  getBanner: () => {
    return base_URL.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  // getListMovie: () => {
  //   return base_URL.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05");
  // },
  getDetailMovie: (data) => {
    return base_URL.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
  },
  getListMovie: (data) => {
    return base_URL.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=${data}&soPhanTuTrenTrang=10`
    );
  },
  getMovieDaily: () => {
    return base_URL.get("/api/QuanLyPhim/LayDanhSachPhimTheoNgay");
  },
  // lấy thông tin hệ thống rạp
  getInforToTheater: () => {
    return base_URL.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05"
    );
  },
  // lấy thông tin theo cụm rạp
  getSystemBaseTheater: () => {
    return base_URL.get("/api/QuanLyRap/LayThongTinCumRapTheoHeThong");
  },
  // lấy thông tin lịch chiếu theo hệ rạp
  getInforSystemTheater: () => {
    return base_URL.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  //lấy thông tin lịch chiếu phim của từng rạp
  getInforDetailTheater: () => {
    return base_URL.get("/api/QuanLyRap/LayThongTinLichChieuPhim");
  },
  // lấy thông tin từ rạp cho từng phim
  getDetailInforFilmAndTheater: (id) => {
    return base_URL.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
};
