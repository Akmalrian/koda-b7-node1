const moment = require("moment");

function masukkanTanggal(input) {

    const tanggal = moment(input, 'DD-MM-YYYY', true);

    if (tanggal.isValid()) {
 
        return tanggal.format('DD/MM/YYYY');
    } else {

        return "Format tanggal salah";
    }
}

module.exports = masukkanTanggal;
