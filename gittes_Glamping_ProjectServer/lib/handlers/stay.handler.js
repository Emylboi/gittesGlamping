import dbConnect from "../db/dbConnect.js";
import stayModel from "../db/models/stay.model.mjs";
import { deleteStayImage } from "./file.handler.js";

export const getStays = async () => {
  let result = {
    status: "error",
    message: "An Error Occurred - See Database log.",
    data: [],
  };

  await dbConnect();

  try {
    let data = await stayModel.find({}).select("-__v");
    result = {
      status: "ok",
      message: "Stays fetched successfully",
      data: data,
    };
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const createStay = async (body) => {
  let result = {
    status: "error",
    message: "An Error Occurred - See Database log.",
    data: [],
  };

  await dbConnect();

  try {
    /* Ændre billede */
    body.picture =
      body.picture === undefined
        ? `${process.env.SERVER_HOST}/users/no-image.jpeg`
        : body.picture;

    let data = await stayModel.create(body);
    result = { status: "ok", message: "Stay created successfully", data: data };
  } catch (error) {
    console.log("hello", error);
  }

  return result;
};

export const updateStay = async (stay) => {
  let result = {
    status: "error",
    message: "An Error Occurred - See Database log.",
    data: [],
  };

  await dbConnect();
  await deleteStayImage(stay.id);

  try {
    let data = await stayModel.findByIdAndUpdate(stay.id, stay, { new: true });
    result = { status: "ok", message: "Stay updated successfully", data: data };
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const deleteStay = async (id) => {
  let result = {
    status: "error",
    message: "An Error Occurred - See Database log.",
    data: [],
  };
  await deleteStayImage(id);
  await dbConnect();

  try {
    let data = await stayModel.findByIdAndDelete(id);
    result = { status: "ok", message: "Stay deleted successfully", data: data };
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const getStayById = async (id) => {
  let result = {
    status: "error",
    message: "An Error Occurred - See Database log.",
    data: [],
  };

  await dbConnect();

  try {
    let data = await stayModel.findById(id);
    result = { status: "ok", message: "Stay fetched successfully", data: data };
  } catch (error) {
    console.log(error);
  }

  return result;
};
