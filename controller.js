'use strict';

var connection = require('./koneksi');
var response = require('./res');

exports.index = function(req, results) {
    response.ok("Aplikasi rest api berjalan ok", results);
};

// menampilkan semua data distrik
exports.testview = function(req, results) {
    connection.query('SELECT * FROM distrik',
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, results);
            }

            // console.log(results);
            // console.log(fields);
        });
};

// Add data distrik
exports.AddData = function(req, results) {
    var number = req.body.number;
    var postCode = req.body.postCode;
    var district = req.body.district;
    var subDistrict = req.body.subDistrict;
    var village = req.body.village;

    connection.query('INSERT INTO distrik (number, postCode, district, subDistrict, village) VALUES(?, ?, ?, ?, ?)', [number, postCode, district, subDistrict, village],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Add Data Success", results);
                // console.log(results);
            }
        });

};

// update data distrik
exports.updateData = function(req, results) {
    var id = req.body.id;
    var number = req.body.number;
    var postCode = req.body.postCode;
    var district = req.body.district;
    var subDistrict = req.body.subDistrict;
    var village = req.body.village;

    connection.query('UPDATE distrik SET number=?, postCode=?, district=?, subDistrict=?, village=? WHERE id=?', [number, postCode, district, subDistrict, village, id],
        function(error, rows, fields) {
            if (error) {
                console.log(Error);
            } else {
                response.ok("Update Data Success", results);
            }
        });
};

// delete data

exports.deleteData = function(req, results) {
    var id = req.body.id;

    connection.query('DELETE FROM distrik WHERE id=?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(Error);
            } else {
                response.ok("Delete Data Success", results);
            }
        });

};