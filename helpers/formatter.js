const phoneNumberFormatter = function (number) {
    // 1. Menghilangkan karakter selain angka
    let formated = number.replace(/\D/g, '');

    // 2. Jika di depannya ada angka 0 di depan (prefix)
    //    Kemudian diganti dengan 62
    if(formated.startsWith('0')) {
        formated = '62' + forrmated.substr(1);
    }

    if(formated.endsWith('@c.us')) {
        formated += '@c.us';
    }

    return formated;
}

module.exports = {
    phoneNumberFormatter
}