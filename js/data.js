const UNITS = [
  {
    id:"word", name:"KELİME İŞLEMCİ (WORD)",
    color:"#48bfe3", icon:"W", bg:"rgba(72,191,227,0.15)", fileType:"docx",
    examples:[
      {id:"w01",name:"Tablo Oluşturma ve Biçimlendirme",        slug:"word_tablo",              diff:45},
      {id:"w02",name:"Üst Bilgi ve Alt Bilgi Ekleme",           slug:"word_ust_alt_bilgi",      diff:38},
      {id:"w03",name:"Otomatik İçindekiler Tablosu",            slug:"word_icindekiler",        diff:70},
      {id:"w04",name:"Posta Birleştirme (Mail Merge)",          slug:"word_posta_birlestirme",  diff:85},
      {id:"w05",name:"Stil Uygulama ve WordArt",                slug:"word_stil_wordart",       diff:48},
      {id:"w06",name:"Madde İşaretleri ve Numaralandırma",      slug:"word_liste",              diff:22},
      {id:"w07",name:"Sütun Düzeni (Gazete Formatı)",           slug:"word_sutun",              diff:40},
      {id:"w08",name:"Sayfa Yapısı ve Kenar Boşlukları",        slug:"word_sayfa",              diff:30},
      {id:"w09",name:"Metin Biçimlendirme (Kalın/İtalik/Renk)", slug:"word_bicimlendirme",      diff:18},
      {id:"w10",name:"WordArt ve Şekil Ekleme",                 slug:"word_wordart",            diff:45},
      {id:"w11",name:"Resim Ekleme ve Biçimlendirme",           slug:"word_resim",              diff:38},
      {id:"w12",name:"Sekme Durağı (Tab) Kullanımı",            slug:"word_sekme",              diff:38},
      {id:"w13",name:"Bul ve Değiştir Komutu",                  slug:"word_bul_degistir",       diff:35},
      {id:"w14",name:"Yazım ve Dilbilgisi Denetimi",            slug:"word_yazim",              diff:28},
      {id:"w15",name:"Metin Hizalama Türleri",                  slug:"word_hizalama",           diff:20},
      {id:"w16",name:"Satır ve Paragraf Aralığı",               slug:"word_satir_araligi",      diff:32},
      {id:"w17",name:"Köprü (Hyperlink) Ekleme",                slug:"word_kopru",              diff:52},
    ]
  },
  {
    id:"excel", name:"ELEKTRONİK TABLOLAMA (EXCEL)",
    color:"#3ddc97", icon:"E", bg:"rgba(61,220,151,0.15)", fileType:"xlsx",
    examples:[
      {id:"e01",name:"Temel Formüller ve Biçimlendirme",         slug:"excel_temel_formul",     diff:30},
      {id:"e02",name:"DÜŞEYARA (VLOOKUP) Fonksiyonu",           slug:"excel_duseyara",         diff:75},
      {id:"e03",name:"Sütun Grafiği Oluşturma",                 slug:"excel_grafik_sutun",     diff:45},
      {id:"e04",name:"ETOPLA, EĞERSAY ve Koşullu Biçimlendirme",slug:"excel_etopla",           diff:65},
      {id:"e05",name:"Özet Tablo (PivotTable) Oluşturma",       slug:"excel_pivot",            diff:88},
      {id:"e06",name:"Hücre Biçimlendirme (Para, Tarih, %)",    slug:"excel_bicimlendirme",    diff:25},
      {id:"e07",name:"Koşullu Biçimlendirme (Renk Skalası)",    slug:"excel_kosullu",          diff:55},
      {id:"e08",name:"Veri Doğrulama (Açılır Liste)",           slug:"excel_veri_dogr",        diff:60},
      {id:"e09",name:"EĞER (IF) Mantıksal Fonksiyonu",          slug:"excel_eger",             diff:55},
      {id:"e10",name:"Otomatik Doldurma ve Seri",               slug:"excel_otodoldur",        diff:18},
      {id:"e11",name:"Sıralama ve Otomatik Filtre",             slug:"excel_sirala_filtre",    diff:38},
      {id:"e12",name:"Metin Fonksiyonları (SOL, SAĞ, LEN)",     slug:"excel_metin_fonk",       diff:65},
      {id:"e13",name:"Tarih Fonksiyonları (BUGÜN, YIL)",        slug:"excel_tarih_fonk",       diff:50},
      {id:"e14",name:"Mutlak ve Göreli Referans ($)",           slug:"excel_mutlak_goreli",    diff:45},
      {id:"e15",name:"Satır-Sütun Ekleme ve Dondurma",         slug:"excel_satir_sutun",      diff:28},
      {id:"e16",name:"Pasta ve Halka Grafik",                   slug:"excel_grafik_pasta",     diff:48},
      {id:"e17",name:"Çalışma Sayfası Yönetimi",               slug:"excel_sayfa_yonetim",    diff:30},
      {id:"e18",name:"Sayfa Koruma ve Kilitli Hücreler",        slug:"excel_kilitli_koruma",   diff:62},
    ]
  },
  {
    id:"ppt", name:"SUNU HAZIRLAMA (POWERPOINT)",
    color:"#ff9f43", icon:"P", bg:"rgba(255,159,67,0.15)", fileType:"pptx",
    examples:[
      {id:"p01",name:"Tema Seçme ve Uygulama",                  slug:"ppt_tema",               diff:22},
      {id:"p02",name:"SmartArt ve Şekil Ekleme",               slug:"ppt_smartart",           diff:45},
      {id:"p03",name:"Nesne Animasyonu Ekleme",                 slug:"ppt_animasyon",          diff:62},
      {id:"p04",name:"Tablo ve Grafik Ekleme",                  slug:"ppt_tablo_grafik",       diff:48},
      {id:"p05",name:"Asıl Slayt (Slide Master) Düzenleme",    slug:"ppt_master",             diff:65},
      {id:"p06",name:"Slayt Geçiş Efektleri",                  slug:"ppt_gecis",              diff:40},
      {id:"p07",name:"Resim ve Medya Ekleme",                   slug:"ppt_resim_medya",        diff:50},
      {id:"p08",name:"Metin Biçimlendirme ve Liste",            slug:"ppt_metin_bicimlendirme",diff:20},
      {id:"p09",name:"Köprü ve Eylem Butonu",                   slug:"ppt_kopru_eylem",        diff:55},
      {id:"p10",name:"Sunu Modu ve Zamanlama",                  slug:"ppt_sunu_modu",          diff:68},
      {id:"p11",name:"Slayt Boyutu ve Tasarım",                 slug:"ppt_slayt_boyut",        diff:22},
      {id:"p12",name:"Konuşmacı Notları ve Dipnot",             slug:"ppt_dipnot_notlar",      diff:35},
      {id:"p13",name:"Fotoğraf Albümü Sunu",                    slug:"ppt_fotograf_album",     diff:30},
      {id:"p14",name:"PDF ve Video Olarak Aktarma",             slug:"ppt_disaaktar",          diff:55},
      {id:"p15",name:"Slayt Başlığı ve İçerik Düzeni",         slug:"ppt_basligi_duzenle",    diff:18},
    ]
  }
];

const FILE_DEFS = {
  soru:       {icon:"📋",label:"Soruyu Gör",   desc:".pdf — görev tanımı",         ext:"PDF", extClass:"ext-pdf", bg:"rgba(255,92,122,0.1)", color:"#ff5c7a"},
  cozum:      {icon:"💡",label:"Çözümü Gör",   desc:".pdf — adım adım çözüm",      ext:"PDF", extClass:"ext-pdf", bg:"rgba(255,92,122,0.1)", color:"#ff5c7a"},
  proje_docx: {icon:"📄",label:"Projeyi İndir",desc:".docx — bitmiş Word belgesi", ext:"DOCX",extClass:"ext-docx",bg:"rgba(72,191,227,0.1)", color:"#48bfe3",highlight:true},
  proje_xlsx: {icon:"📊",label:"Projeyi İndir",desc:".xlsx — bitmiş Excel dosyası",ext:"XLSX",extClass:"ext-xlsx",bg:"rgba(61,220,151,0.1)", color:"#3ddc97",highlight:true},
  proje_pptx: {icon:"🎨",label:"Projeyi İndir",desc:".pptx — bitmiş PowerPoint",   ext:"PPTX",extClass:"ext-pptx",bg:"rgba(255,159,67,0.1)", color:"#ff9f43",highlight:true},
};

function getFilesForExample(unit,slug){
  const base=`files/${slug}`;
  const files=[
    {...FILE_DEFS.soru, href:`${base}_soru.pdf`},
    {...FILE_DEFS.cozum,href:`${base}_cozum.pdf`},
  ];
  if(unit.fileType==="docx") files.push({...FILE_DEFS.proje_docx,href:`${base}_proje.docx`});
  if(unit.fileType==="xlsx") files.push({...FILE_DEFS.proje_xlsx,href:`${base}_proje.xlsx`});
  if(unit.fileType==="pptx") files.push({...FILE_DEFS.proje_pptx,href:`${base}_proje.pptx`});
  return files;
}
