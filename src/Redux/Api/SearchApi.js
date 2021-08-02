import axios from "axios";

export const SearchService = async (tags, page) => {
  var data = "";
  await axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a78c553d43b32405745eb0eef77e6065&tags=${tags}&page=${page}&format=json&nojsoncallback=1`
    )
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};
