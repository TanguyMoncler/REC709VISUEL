import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

type PhotoItem = {
  id: number;
  url: string;
  title: string;
  photographer: string;
};

// (Optionnel mais conseillé) : ajoute des transformations Cloudinary pour livrer plus vite
// f_auto: meilleur format (WebP/AVIF/JPEG), q_auto: qualité auto, w_1600: largeur max 1600px
function transformUrl(url: string) {
  return url.replace("/upload/", "/upload/f_auto,q_auto,w_1600/");
}

const urls = [
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970871/photo_2_tj5xb2.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970871/photo_36_vmlufz.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970871/photo_3_huqual.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970875/photo_12_w0u8qh.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970875/photo_11_jknsip.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970875/photo_10_zwphlf.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970879/photo_19_nakprf.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970879/photo_18_r6tywd.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970879/photo_16_q76am7.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970879/photo_17_nuhv0i.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970877/photo_31_ddyajt.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970877/photo_14_bcsp2p.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970876/photo_15_h0pswm.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970876/photo_13_n6kkpn.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970873/photo_5_nd75hc.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970873/photo_9_tppk7f.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970873/photo_7_u0vgyp.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970873/photo_4_pynawy.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970873/photo_8_fqvg84.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970872/photo_6_t6xkrn.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970871/photo_32_wpa9pa.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970870/photo_29_sznioe.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970871/photo_1_rthnur.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970869/photo_30_bifdbt.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970869/photo_35_esogzx.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970869/photo_27_m8j69u.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970868/photo_34_abykxb.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970868/photo_28_yvy8hk.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970867/photo_22_lhwzwy.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970868/photo_26_gfkvsm.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970866/photo_24_djyoxz.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970866/photo_25_dqmk25.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970865/photo_23_vfpzte.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970865/photo_21_sxf9ed.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970865/photo_33_mzfuiw.jpg",
  "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970864/photo_20_cfq5ht.jpg",
];

// Construit le tableau photos et trie par n° dans l'URL (photo_XX)
const photos: PhotoItem[] = urls
  .map((u, idx) => {
    const m = u.match(/photo_(\d+)_/);
    const id = m ? parseInt(m[1], 10) : idx + 1;
    return {
      id,
      url: transformUrl(u), // ← mets juste `u` si tu ne veux pas les transformations
      title: "Title",
      photographer: "Nelson Charles",
    };
  })
  .sort((a, b) => a.id - b.id);

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EDE8D0" }}>
      <SimpleHeader />
      <PhotoMasonry initialPhotos={photos} />
    </div>
  );
}
