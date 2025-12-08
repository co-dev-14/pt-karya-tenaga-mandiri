import React from 'react';
import { Users, HardHat, Briefcase, BookOpen, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

const Services: React.FC = () => {
  const services = [
    {
      icon: <HardHat className="h-8 w-8" />,
      title: "Sektor Formal (Pabrik & Konstruksi)",
      description: "Penempatan tenaga kerja di sektor industri manufaktur (pabrik elektronik, makanan, otomotif) dan konstruksi. Negara tujuan: Taiwan, Korea Selatan, Jepang, Malaysia."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Sektor Informal (Caregiver & ART)",
      description: "Penempatan tenaga kerja rumah tangga dan perawat lansia (caregiver) dengan perlindungan hukum penuh. Negara tujuan: Hong Kong, Taiwan, Singapura."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Program Tokutei Ginou (Jepang)",
      description: "Program Spesific Skilled Worker (SSW) ke Jepang untuk tenaga kerja dengan keahlian khusus. Gaji tinggi dan status residensi yang lebih baik."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Pelatihan & Sertifikasi (BLK-LN)",
      description: "Pusat pelatihan bahasa (Mandarin, Inggris, Kanton, Jepang) dan keterampilan kerja di BLK-LN milik sendiri dengan fasilitas asrama lengkap."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Pengurusan Dokumen Lengkap",
      description: "Layanan one-stop service untuk pengurusan Paspor, Visa Kerja, KTKLN (E-PMI), Medical Check-up, dan asuransi BPJS Ketenagakerjaan."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Konsultasi & Orientasi Pra-Pemberangkatan",
      description: "Pembekalan mental, budaya, dan hukum negara tujuan (OPP) agar PMI siap bekerja dan beradaptasi dengan lingkungan baru."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Layanan & Program Penempatan</h1>
          <p className="text-blue-100 max-w-2xl mx-auto px-4">
            Solusi lengkap bagi Anda yang ingin bekerja ke luar negeri secara resmi, aman, dan sejahtera.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to={PageRoute.CONTACT} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800">
                Info Pendaftaran <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Siap Mengubah Nasib?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
            Jangan tergiur janji manis calo ilegal. Pastikan Anda berangkat melalui P3MI resmi PT. Karya Tenaga Mandiri. Proses jelas, biaya transparan, keberangkatan terjamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to={PageRoute.CONTACT} className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg inline-block">
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;