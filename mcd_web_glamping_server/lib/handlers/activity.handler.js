/* 

    Activities Handler.

*/

// dbConnect is used to connect to the database
import dbConnect from "../db/dbConnect.js";
// activityModel is used to interact with the database
import activityModel from "../db/models/activity.model.mjs";
import { deleteActivityImage } from "./file.handler.js";

// Used to find activity
export const getActivity = async (id) => {

    let result = {status: 'error', message: `An Error Getting Activity occured`, data: []};

    try {

        await dbConnect();

        await activityModel.find({_id : id}).then((data) => {  

            result = {status: 'ok', message: "Activity fetched successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {
        
        console.log(error)

    }

};

// Used to add activity
export const addActivity = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};
    console.log(body)
    try {

        await dbConnect();
        body.image = body.image === undefined  ? `${process.env.SERVER_HOST}/activities/no-activity.jpg` : body.image;
   
        let data = await activityModel.create(body);
        result = {status: 'ok', message: "Activity created successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}

// Used to update activity
export const updateActivity = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
        if(body.image !== undefined)
        {
            await deleteActivityImage(body.id);
        }
        
        let data = await activityModel.findByIdAndUpdate({_id: body.id}, body, {new: true});
        result = {status: 'ok', message: "Activity updated successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}

// Used to delete activity
export const deleteActivity = async (id) => {

    let result = {status: 'error', message: `An Error Deleting Activity ${id} occurred`, data: []};

    try {

        await dbConnect();
        await deleteActivityImage(id);

        await activityModel.findByIdAndDelete({_id: id}).then((data) => {  

            result = {status: 'ok', message: "Activity deleted successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};