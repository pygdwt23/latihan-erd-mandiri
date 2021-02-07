//BOOKS CONTROLLER
let books = require("./../db/buku.json");

//GET
exports.getAllBook = (req, res) => {
  res.status(200).json(books);
};

exports.getBookById = (req, res) => {
  const newBooks = books.find((i) => i.id_buku === +req.params.id_buku);
  res.status(200).json(newBooks);
};

//POST
exports.postNewBook = (req, res) => {
  const { judul_buku, pengarang, penerbit } = req.body;

  const id_buku = books[books.length - 1].id_buku + 1;
  const newPost = {
    id_buku,
    judul_buku,
    pengarang,
    penerbit,
  };

  books.push(newPost);
  res.status(201).json(newPost);
};

//PUT
exports.editBook = (req, res) => {
  let id_buku = req.params.id_buku;
  books.filter((data) => {
    if (data.id_buku === parseInt(id_buku)) {
      data.judul_buku = req.body.judul_buku;
      data.pengarang = req.body.pengarang;
      data.penerbit = req.body.penerbit;
      return data;
    }
  });
  res.status(200).json({
    message: ` Buku dengan id ${req.params.id_buku} berhasil diupdate!`,
  });
};

//Delete
exports.deleteBook = (req, res) => {
  books = books.filter((i) => i.id_buku !== +req.params.id_buku);
  res.status(200).json({
    message: `Buku dengan id ${req.params.id_buku} sudah dihapus! Gak Percaya? Cek Aja!`,
  });
};

//MAHASISWA CONTROLLER
let mahasiswa = require("./../db/mahasiswa.json");

exports.getAllMahasiswa = (req, res) => {
  res.status(200).json(mahasiswa);
};

exports.getMahasiswaById = (req, res) => {
  const newMember = mahasiswa.find((i) => i.id_mhs === +req.params.id_mhs);
  res.status(200).json(newMember);
};

exports.postNewMahasiswa = (req, res) => {
  const { nim, nama, jurusan } = req.body;

  const id_mhs = mahasiswa[mahasiswa.length - 1].id_mhs + 1;
  const newMhs = {
    id_mhs,
    nim,
    nama,
    jurusan,
  };

  mahasiswa.push(newMhs);
  res.status(201).json(newMhs);
};

exports.editMahasiswa = (req, res) => {
  let id_mhs = req.params.id_mhs;
  mahasiswa.filter((data) => {
    if (data.id_mhs === parseInt(id_mhs)) {
      data.nim = req.body.nim;
      data.nama = req.body.nama;
      data.jurusan = req.body.jurusan;
      return data;
    }
  });
  res.status(200).json({
    message: ` Mahasiswa dengan id ${req.params.id_mhs} berhasil diupdate!`,
  });
};

exports.deleteMahasiswa = (req, res) => {
  mahasiswa = mahasiswa.filter((i) => i.id_mhs !== +req.params.id_mhs);
  res.status(200).json({
    message: `Mahasiswa dengan id ${req.params.id_mhs} sudah dihapus! Gak Percaya? Cek Aja!`,
  });
};

//PINJAM CONTROLLER
let pinjamBuku = require("./../db/pinjambuku.json");

exports.getAllPinjam = (req, res) => {
  res.status(200).json(pinjamBuku);
};

exports.getPinjamById = (req, res) => {
  const newPinjam = pinjamBuku.find(
    (i) => i.id_pinjam === +req.params.id_pinjam
  );
  if (newPinjam !== undefined) {
    res.status(200).json(newPinjam);
  } else {
    res.status(400).json({
      error: true,
      message: `Maaf, ID ${req.params.id_pinjam} tidak tersedia`,
    });
  }
};

exports.postNewPinjam = (req, res) => {
  const { id_buku, nama_mhs, tgl_pinjam, tgl_kembali } = req.body;

  const id_pinjam = pinjamBuku[pinjamBuku.length - 1].id_pinjam + 1;

  const pinjam = {
    id_pinjam,
    id_buku,
    nama_mhs,
    tgl_pinjam,
    tgl_kembali,
  };
  pinjamBuku.push(pinjam);
  res.status(201).json({ message: `Data baru berhasil ditambahkan!` });
};

exports.editPinjam = (req, res) => {
  let id_pinjam = req.params.id_pinjam;
  pinjamBuku.filter((data) => {
    if (data.id_pinjam == id_pinjam) {
      data.id_buku = req.body.id_buku;
      data.nama_mhs = req.body.nama_mhs;
      data.tgl_pinjam = req.body.tgl_pinjam;
      data.tgl_kembali = req.body.tgl_kembali;
      return;
    }
  });
  res.status(200).json({
    message: `Peminjaman buku dengan id ${req.params.id_pinjam} telah diupdate!`,
  });
};

exports.deletePinjam = (req, res) => {
  pinjamBuku = pinjamBuku.filter((i) => i.id_pinjam !== +req.params.id_pinjam);
  res.status(200).json({
    message: `Peminjaman dengan id ${req.params.id_pinjam} berhasil dihapus!`,
  });
};
