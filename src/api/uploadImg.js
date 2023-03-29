const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;

export async function uploadImg(file) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("folder", "products");
  formData.append("upload_preset", "aehtvzgm");

  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data.secure_url);
}
