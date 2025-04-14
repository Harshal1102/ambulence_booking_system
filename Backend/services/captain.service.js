const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname, lastname, email, password, hospital, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !hospital || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            hospital,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}