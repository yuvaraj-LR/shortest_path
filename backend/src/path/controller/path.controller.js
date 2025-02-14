import { getPath } from "../model/path.model.js";

// Get Path.
export const getPathController = (req, res) => {
    try {
        // Destructure the body to get start and end which is send in request.
        const {body} = req;

        const {grids, start, end} = body;
        console.log(start, end, "gridsss...");

        const path = getPath(grids, start, end);

        // Suppose if the path is founded returning in 200 otherwise returning as error code 404.
        if(path != -1) {
            return res.status(200).json({status: true, statusCode: 200, message: "Path Found!", path});
        } else {
            return res.status(404).json({status: false, statusCode: 404, message: "Path does not exists!", path});
        }
    } catch(error) {
        console.error(error, "Error in getPathController.");
    }
}