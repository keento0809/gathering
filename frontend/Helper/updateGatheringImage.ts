import { server } from "../config";
import { GatheringType } from "../models/model";
import { imagesData } from "../data/data";

const selectImageIndex = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return randomIndex;
};

export const setGatheringImage = () => {
  const index = selectImageIndex();
  const img = imagesData[index];
  return img;
};

const updateGatheringImage = async (gathering: GatheringType) => {
  const index = selectImageIndex();
  try {
    gathering.image = imagesData[index];
    await fetch(`${server}/api/gatherings/${gathering._id}/image`, {
      method: "POST",
      body: imagesData[index],
    });
  } catch (err) {
    console.log(err);
  }
};

export default updateGatheringImage;
