import React from 'react';
import { Target, Award, Shield, FileCheck, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PT. Karya Tenaga Mandiri: Mitra terpercaya pemerintah dan masyarakat dalam penempatan Pekerja Migran Indonesia yang berkualitas dan bermartabat.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Profil Perusahaan</span>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">P3MI Resmi, Amanah, dan Profesional</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Didirikan pada tahun 2013, <strong>PT. Karya Tenaga Mandiri</strong> adalah Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) yang telah mengantongi izin resmi dari Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker) dan terakreditasi oleh BP2MI.
              </p>
              <p>
                Kami hadir dengan komitmen kuat untuk memberantas penempatan ilegal (non-prosedural) dengan menyediakan jalur resmi yang aman, transparan, dan memberikan perlindungan maksimal bagi setiap Pekerja Migran Indonesia (PMI).
              </p>
              <p>
                Dilengkapi dengan fasilitas BLK-LN (Balai Latihan Kerja Luar Negeri) yang modern, kami memastikan setiap calon PMI memiliki kompetensi bahasa dan keterampilan teknis yang memadai sebelum diberangkatkan, sehingga mampu bersaing di pasar kerja global.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <FileCheck size={20} />
                <span>Izin SIP3MI Resmi</span>
              </div>
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <Globe size={20} />
                <span>Akreditasi BP2MI</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" alt="Training Center Activity" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-8 rounded-xl hidden md:block shadow-lg">
              <p className="font-bold text-4xl text-orange-400">#1</p>
              <p className="text-sm opacity-90 mt-1">Pilihan Utama<br/>Calon PMI</p>
            </div>
          </div>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visi</h3>
            <p className="text-gray-600">
              Menjadi P3MI berstandar internasional yang unggul dalam mencetak tenaga kerja migran yang kompeten, produktif, dan sejahtera.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Misi</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>Memberikan perlindungan menyeluruh bagi PMI dari pra hingga purna penempatan.</li>
              <li>Menyelenggarakan pelatihan vokasi dan bahasa yang berkualitas.</li>
              <li>Memperluas jaringan kerja sama dengan mitra bonafide di luar negeri.</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nilai Kami</h3>
            <p className="text-gray-600">
              <span className="font-semibold text-blue-900">Legalitas:</span> Patuh pada regulasi pemerintah.<br/>
              <span className="font-semibold text-blue-900">Kemanusiaan:</span> Memperlakukan PMI sebagai aset negara.<br/>
              <span className="font-semibold text-blue-900">Transparansi:</span> Biaya dan proses yang jelas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;