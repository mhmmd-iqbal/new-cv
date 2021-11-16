import Banowati from './../assets/img/banowati.png';
import Abc from './../assets/img/abc.jpg';
import Cekstay from './../assets/img/cekstay.jpg';
import Elapor from './../assets/img/elapor.jpg';
import Nutrifood from './../assets/img/nutrifood.png';
import Rekam from './../assets/img/rekam.jpg';
import Simpenmas from './../assets/img/simpenmas.jpg';
import Sipetik from './../assets/img/sipetik.png';
import Ujian from './../assets/img/ujian.jpg';
import NoImage from './../assets/img/noimage.jpeg';

const Experiences = [
  {
    name: 'PT. BURSAKU TEKNOLOGI FINANSIAL',
    position: 'Backend Developer',
    year: '2020 - Current',
  },
  {
    name: 'DIGITALENT',
    position: 'Co-Instructor',
    year: '2019',
  },
];

const Organizationals = [
  {
    name: 'HIMATIK',
    position: 'Main Leader',
    year: '2015 - 2018',
  },
  {
    name: 'UKM IECLOP',
    position: 'Education Divition Member',
    year: '2015 - 2017',
  },
  {
    name: 'Komunitas IT',
    position: 'Divition Leader',
    year: '2015 - 2017',
  },
];

const Achievements = [
  {
    name: 'KMIPN 2019',
    position: '3rd Winner',
    organizer: 'Politeknik Caltex Riau',
  },
  {
    name: 'Mahasiswa Berprestasi 2016',
    position: '4th Winner',
    organizer: 'Politeknik Negeri Lhokseumawe',
  },
  {
    name: 'Adm. System and Computer Network',
    position: 'Competence Certification',
    organizer: 'Badan Nasional Sertifikasi Profesi',
  },
];

const Profile = {
  bio: 'I am Muhammad Iqbal, a web programmer. Graduated in 2019 from State Polytechnic of Lhokseumawe. Passionate in technology and education enviroment.',
  address: 'Jl. Rantang No. 20s, Sei Putih Tengah, Medan Petisah',
  phone: '+62 821-6567-8664',
  linkedin: 'www.linkedin.com/in/mhmmd-iqbal',
  website: 'mhmmd-iqbal.github.io',
};

// const Skills = []

const Projects = [
  {
    name: 'BANOWATI',
    image: Banowati,
    description:
      'Banowati adalah sebuah system terintegrasi pada Klinik Banowati. Sistem mengintegrasikan data data penjualan, pengadaan, pasien, dan sebagainya.',
  },
  {
    name: 'NUTRIFOOD',
    image: Nutrifood,
    description:
      'Aplikasi ini digunakana untuk pengadaan barang pada system internal perusahaan PT Nutrifood Indonesia cabang Medan.',
  },
  {
    name: 'SIPETIK',
    image: Sipetik,
    description:
      'Sipetik adalah aplikasi pemesanan tiket pesawat melalui Bot Telegram API',
  },
  // {
  //   name: 'BURSAKU.ID',
  //   image: NoImage,
  //   description: '',
  // },
  // {
  //   name: 'BURSAKU BACKOFFICE',
  //   image: NoImage,
  //   description: '',
  // },
  {
    name: 'ACEH BIODIVERSITY',
    image: Abc,
    description:
      'Aceh Biodiversity is a responsive web-based application that can provide metadata from animals in Aceh',
  },
  {
    name: 'CEKSTAY',
    image: Cekstay,
    description:
      'Cekstay adalah aplikasi pencarian rumah kost dan catering di Aceh',
  },
  {
    name: 'E-LAPOR',
    image: Elapor,
    description:
      'E-Lapor merupakan aplikasi  kerusakan barang di Unit TP3A Politeknik Negeri Lhokseumawe berbasis web-responsive',
  },
  {
    name: 'E-UJIAN',
    image: Ujian,
    description:
      'E-Ujian adalah aplikasi ujian secara online dimana soal muncul secara acak menggunakan algoritma fisher Yates dan memiliki batas waktu"',
  },
  {
    name: 'REKAM MEDIK',
    image: Rekam,
    description:
      'Sistem Rekam Medik adalah aplikasi manajemen pasien pada sebuah Rumah Sakit',
  },
  {
    name: 'SIMPENMAS',
    image: Simpenmas,
    description:
      'SIMPENMAS adalah sebuah sistem untuk memanajemansi proposal penelitian dan pengabdian masyarakat ',
  },
];

export { Experiences, Organizationals, Achievements, Profile, Projects };
