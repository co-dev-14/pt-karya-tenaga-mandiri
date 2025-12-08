import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, GraduationCap } from 'lucide-react';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-blue-800/80 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="md:w-3/4">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-700/50 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-4 backdrop-blur-sm">
              P3MI Resmi & Terpercaya
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Raih Masa Depan Cerah <br/> Bekerja di Luar Negeri
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              PT. Karya Tenaga Mandiri adalah jembatan sukses Anda menuju karir global. Kami menyalurkan Pekerja Migran Indonesia (PMI) yang kompeten, terlatih, dan terlindungi secara hukum ke berbagai negara di Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to={PageRoute.SERVICES} className="bg-orange-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition shadow-lg flex items-center justify-center">
                Lihat Negara Tujuan
              </Link>
              <Link to={PageRoute.CONTACT} className="border border-white/30 bg-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition backdrop-blur-sm flex items-center justify-center">
                Daftar Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kenapa Memilih PT. Karya Tenaga Mandiri?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keamanan dan kesuksesan Anda adalah prioritas kami. Kami menjamin proses penempatan yang transparan dan sesuai prosedur pemerintah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legalitas Terjamin</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami adalah P3MI resmi yang memiliki izin SIP3MI dari Kemnaker dan terdaftar di BP2MI. Perlindungan hukum PMI adalah harga mati.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fasilitas Pelatihan (BLK-LN)</h3>
              <p className="text-gray-600 leading-relaxed">
                Dilengkapi Balai Latihan Kerja Luar Negeri (BLK-LN) dengan instruktur berpengalaman untuk pelatihan bahasa dan keterampilan kerja.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jaringan Global Luas</h3>
              <p className="text-gray-600 leading-relaxed">
                Bekerjasama langsung dengan agency dan perusahaan bonafide di Taiwan, Hong Kong, Singapura, Malaysia, dan Jepang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 py-16 text-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-orange-400">10+</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Tahun Pengalaman</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-orange-400">5.000+</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">PMI Diberangkatkan</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-orange-400">4</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Negara Tujuan</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 text-orange-400">100%</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Legal & Prosedural</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Peluang Karir Global</h2>
              <p className="text-gray-600">
                Kami menyediakan lowongan kerja sektor formal dan informal dengan gaji kompetitif.
              </p>
            </div>
            <Link to={PageRoute.SERVICES} className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
              Lihat Semua Lowongan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" alt="Pabrik Manufaktur" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Sektor Pabrik (Manufacturing)</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Lowongan operator produksi di pabrik elektronik, makanan, dan tekstil. Tujuan: Taiwan, Malaysia, Jepang.
                </p>
                <Link to={PageRoute.SERVICES} className="text-blue-600 text-sm font-semibold hover:underline">Detail &rarr;</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <img src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?q=80&w=2069&auto=format&fit=crop" alt="Caregiver" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Caregiver & Perawat</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Tenaga perawat lansia di panti jompo atau rumah sakit. Gaji tinggi & fasilitas lengkap. Tujuan: Taiwan, Jepang, Hong Kong.
                </p>
                <Link to={PageRoute.SERVICES} className="text-blue-600 text-sm font-semibold hover:underline">Detail &rarr;</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="Konstruksi" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Konstruksi & Welder</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Tenaga ahli las dan pekerja bangunan untuk proyek infrastruktur. Tujuan: Malaysia, Korea Selatan.
                </p>
                <Link to={PageRoute.SERVICES} className="text-blue-600 text-sm font-semibold hover:underline">Detail &rarr;</Link>
              </div>
            </div>
          </div>

          <div className="mt-8 md:hidden text-center">
             <Link to={PageRoute.SERVICES} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
              Lihat Semua Lowongan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
