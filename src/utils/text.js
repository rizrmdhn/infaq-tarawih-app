function text({ amount, date, imam, total }) {
    return `Assalamualaikum Warahmatullahi Wabarakatuh
    Jamaah yang di rohmati Allah Subhanahu wa ta'ala.
    Sebelum Shalat tarawih kita laksakan bersama
    Ijinkan kami menyampaikan hasil infaq shodaqah sholat tarawih
    Hari ${date}.
    Sebesar Rp. ${amount}
    _____________________________
    Jumlah infaq hingga sekarang sebesar Rp. ${total}
    _____________________________
    Selanjutnya yang bertindak sebagai
    Imam sholat Tarawih dan kultum adalah
    ${imam}
    Demikian laporan hasil pelaksanaan Sholat Tarawih
    Terima Kasih Wassalamualaikum Warahmatullahi Wabarakatuh
    `
}

export default text;