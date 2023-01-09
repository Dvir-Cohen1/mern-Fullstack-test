import MainSchema from "../models/mainModel.js";
export async function index(req, res, next) {
  try {
    const pet = await MainSchema.find();
    if (!pet) return res.status(404).json({ error: true, msg: "not found" });
    res.status(200).json({ error: false, data: pet });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "something went wrong" });
  }
}
export async function addOne(req, res, next) {
  // if (!req.body) return res.status(404).json({ error: true, msg: 'Bad Request' });
  console.log(req.body);
  try {
    const pet = await MainSchema.create(req.body);
    if (pet) return res.status(201).json({ error: false, msg: "pet created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "something went wrong" });
  }
}
export async function removeOne(req, res, next) {
  try {
    const pet = await MainSchema.findOneAndRemove({ _id: req.body.id });
    if (pet) return res.status(200).json({ error: false, msg: "pet deleted" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "something went wrong" });
  }
}
