const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/sedeng", (req, res, next) => {
  res.status(200).json({
    users: [
      {
        id: 1,
        nama: "Dimas Prasetya",
        jenisKelamin: "Male",
        tanggalLahir: "25/08/98",
        tinggi: "170 cm",
        berat: "60 kg",
        gambar: "assets/avatar/1.png",
      },
      {
        id: 2,
        nama: "Rendra Abimana",
        jenisKelamin: "Male",
        tanggalLahir: "13/07/99",
        tinggi: "168 cm",
        berat: "55 kg",
        gambar: "assets/avatar/2.png",
      },
      {
        id: 3,
        nama: "Tarra Deviano",
        jenisKelamin: "Male",
        tanggalLahir: "12/05/97",
        tinggi: "165 cm",
        berat: "52 kg",
        gambar: "assets/avatar/3.png",
      },
      {
        id: 4,
        nama: "Wildan Ignatius",
        jenisKelamin: "Male",
        tanggalLahir: "12/04/99",
        tinggi: "172 cm",
        berat: "61 kg",
        gambar: "assets/avatar/4.png",
      },
    ],
  });
});

app.get("/api/sedeng/:id", (req, res, next) => {
  const id = req.params.id;
  if (id == 1) {
    res.status(200).json({
      id: 1,
      nama: "Dimas Prasetya",
      jenisKelamin: "Male",
      tanggalLahir: "25/08/98",
      tinggi: "170 cm",
      berat: "60 kg",
      gambar: "assets/avatar/1.png",
    });
  } else if (id == 2) {
    res.status(200).json({
      id: 2,
      nama: "Rendra Abimana",
      jenisKelamin: "Male",
      tanggalLahir: "13/07/99",
      tinggi: "168 cm",
      berat: "55 kg",
      gambar: "assets/avatar/2.png",
    });
  } else if (id == 3) {
    res.status(200).json({
      id: 3,
      nama: "Tarra Deviano",
      jenisKelamin: "Male",
      tanggalLahir: "12/05/97",
      tinggi: "165 cm",
      berat: "52 kg",
      gambar: "assets/avatar/3.png",
    });
  } else if (id == 4) {
    res.status(200).json({
      id: 4,
      nama: "Wildan Ignatius",
      jenisKelamin: "Male",
      tanggalLahir: "12/04/99",
      tinggi: "172 cm",
      berat: "61 kg",
      gambar: "assets/avatar/4.png",
    });
  }
});

module.exports = app;
