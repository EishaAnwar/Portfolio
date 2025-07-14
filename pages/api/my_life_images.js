import cloudinary from "@/lib/cloudinary";

export default async function retrieveImages(req, res) {
  try {
    const response = await cloudinary.search
      .expression(`folder:"A glimpse of my life"`)
      .sort_by("display_name", "asc")
      .max_results(30)
      .execute();
    console.log("response", response);
    const images = response.resources.map((img) => ({
      url: img.secure_url,
      display_name: img.display_name,
      asset_id: img.asset_id,
      public_id: img.public_id,
    }));

    res.status(200).json({
      message: "Travel images retrieved successfully",
      success: true,
      data: images,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to fetch images", error: err.message });
  }
}
