import Meta from "html-metadata-parser";

export const getLinkInfo = async (req, res) => {
  const { link } = req.body;
  try {
    const result = await Meta.parser(link);

    if (result?.og) {
      const { og } = result;
      res.json(og);
    }
  } catch (error) {
    console.log(error);
  }
};