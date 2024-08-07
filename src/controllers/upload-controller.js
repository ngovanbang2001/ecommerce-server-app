import cloudinary from "../utils/cloudiary";

export default {
  async image(req, res) {
    const file = req.file
    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;
    const url = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });
    res.json(url)
  },
}
