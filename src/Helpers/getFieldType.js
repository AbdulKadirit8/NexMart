export default function getFieldType(maincategory = "") {

    const volumeCategories = ["perfume", "oil", "atar"]
    const weightCategories = ["gym product"]

    let category = maincategory.toLowerCase()

    if (volumeCategories.includes(category))
        return "volume"

    if (weightCategories.includes(category))
        return "weight"

    return "size"
}