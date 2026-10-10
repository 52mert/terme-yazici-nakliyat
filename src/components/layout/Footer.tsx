import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, Mail, ShieldCheck, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { companyInfo } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-24 sm:pb-12 text-sm transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-xl flex items-center justify-center">
                Y
              </div>
              <div>
                <span className="font-extrabold text-white text-lg block leading-none">
                  YAZICI NAKLİYAT
                </span>
                <span className="text-[11px] text-blue-400 font-medium">
                  Terme - Samsun
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Terme, Çarşamba ve Samsun genelinde teleskopik asansörlü, sigortalı ve marangozlu evden eve nakliyat ile asansör kiralama hizmeti sunan profesyonel taşımacılık merkezi.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sözleşmeli & Kaskolu Taşıma Garantisi</span>
            </div>
          </div>

          {/* Col 2: Hizmetler */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/hizmet/evden-eve" className="hover:text-blue-400 transition-colors">Evden Eve Nakliyat</Link></li>
              <li><Link to="/hizmet/asansorlu-nakliyat" className="hover:text-blue-400 transition-colors">Asansörlü Taşımacılık</Link></li>
              <li><Link to="/hizmet/asansor-kiralama" className="hover:text-blue-400 transition-colors">Mobil Asansör Kiralama</Link></li>
              <li><Link to="/hizmet/sehirlerarasi" className="hover:text-blue-400 transition-colors">Şehirlerarası Nakliyat</Link></li>
              <li><Link to="/hizmet/ambalajlama" className="hover:text-blue-400 transition-colors">Profesyonel Ambalajlama</Link></li>
              <li><Link to="/hizmet/ofis-tasima" className="hover:text-blue-400 transition-colors">Ofis & İşyeri Taşımacılığı</Link></li>
              <li><Link to="/hizmet/parca-esya-tasima" className="hover:text-blue-400 transition-colors">Parça Eşya Taşıma</Link></li>
            </ul>
          </div>

          {/* Col 3: Bölgeler */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Hizmet Bölgelerimiz</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/bolge/terme" className="hover:text-blue-400 transition-colors">Terme Nakliyat</Link></li>
              <li><Link to="/bolge/carsamba" className="hover:text-blue-400 transition-colors">Çarşamba Nakliyat</Link></li>
              <li><Link to="/bolge/unye" className="hover:text-blue-400 transition-colors">Ünye Nakliyat</Link></li>
              <li><Link to="/bolge/samsun" className="hover:text-blue-400 transition-colors">Samsun Nakliyat</Link></li>
            </ul>
            <div className="flex flex-wrap gap-1.5 text-xs mt-4">
              {['Salıpazarı', 'Ayvacık', 'Tekkeköy', 'İlkadım', 'Atakum', 'Canik'].map((region, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">İletişim Bilgileri</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={`tel:${companyInfo.phonePrimaryRaw}`} className="text-white font-bold hover:text-blue-400">
                  {companyInfo.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Yazıcı Nakliyat. Tüm hakları saklıdır. Terme, Çarşamba ve Samsun Evden Eve Taşımacılık & Asansör Kiralama.</p>
          <div className="flex items-center gap-1">
            <span>Özenle Hazırlandı</span>
            <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
            <span>Terme / Samsun</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
