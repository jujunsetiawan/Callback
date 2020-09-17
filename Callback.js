function newCallback(nama,asal,callbackpulang) {
    console.log(nama,asal)
    callbackpulang()
}
function peluang() {
    console.log('Pulang Kampung');
}

newCallback('Adi','Yusuf',peluang);