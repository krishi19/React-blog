import http from "../http_common";
class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "Accept": "application/json"
      },
      onUploadProgress,
    });
  }
}
export default new UploadFilesService();