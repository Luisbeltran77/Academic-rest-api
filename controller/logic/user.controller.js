/** Dto */
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper");

exports.login = (req, res, next) => {
    //let pass = helper.DecryptPassword(req.body.password);
    userDto.login({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.deleteUser = () => {
    userDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(204).json();
    });
};