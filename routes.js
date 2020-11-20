'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/view-data')
        .get(jsonku.testview);

    app.route('/add-data')
        .post(jsonku.AddData);

    app.route('/update-data')
        .put(jsonku.updateData);

    app.route('/delete-data')
        .delete(jsonku.deleteData);
}