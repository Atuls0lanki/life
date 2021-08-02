import axios from "axios";

export const AllDataService = async (page) => {
  console.log("data", page);
  var data = "";
  await axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0eed32e991e00d3e63a93dfece2f02cf&page=${page}&format=json&nojsoncallback=1`
    )
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};
