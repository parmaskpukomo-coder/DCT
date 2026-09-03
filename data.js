// ============================================================
// DATA.JS - Seluruh data untuk dashboard DCT
// ============================================================

// Daftar 18 partai nasional peserta Pemilu 2024
export const parties = [
    { party: "PKB", short: "PKB", logo: "PKB" },
    { party: "Gerindra", short: "Ger", logo: "G" },
    { party: "PDI Perjuangan", short: "PDI-P", logo: "PDI" },
    { party: "Golkar", short: "Golkar", logo: "G" },
    { party: "NasDem", short: "NasDem", logo: "N" },
    { party: "PKS", short: "PKS", logo: "PKS" },
    { party: "PAN", short: "PAN", logo: "PAN" },
    { party: "Demokrat", short: "Demokrat", logo: "D" },
    { party: "PPP", short: "PPP", logo: "PPP" },
    { party: "Perindo", short: "Perindo", logo: "P" },
    { party: "PSI", short: "PSI", logo: "PSI" },
    { party: "PBB", short: "PBB", logo: "PBB" },
    { party: "Garuda", short: "Garuda", logo: "G" },
    { party: "Berkarya", short: "Berkarya", logo: "B" },
    { party: "Hanura", short: "Hanura", logo: "H" },
    { party: "PKN", short: "PKN", logo: "PKN" },
    { party: "Gelora", short: "Gelora", logo: "G" },
    { party: "Ummat", short: "Ummat", logo: "U" }
];

// Data DCT per partai untuk tahun 2024 (total seluruh dapil)
export const dataAll2024 = [
    { party: "PKB", short: "PKB", logo: "PKB", male: 18, female: 12 },
    { party: "Gerindra", short: "Ger", logo: "G", male: 20, female: 10 },
    { party: "PDI Perjuangan", short: "PDI-P", logo: "PDI", male: 22, female: 18 },
    { party: "Golkar", short: "Golkar", logo: "G", male: 19, female: 11 },
    { party: "NasDem", short: "NasDem", logo: "N", male: 16, female: 14 },
    { party: "PKS", short: "PKS", logo: "PKS", male: 17, female: 13 },
    { party: "PAN", short: "PAN", logo: "PAN", male: 15, female: 15 },
    { party: "Demokrat", short: "Demokrat", logo: "D", male: 16, female: 14 },
    { party: "PPP", short: "PPP", logo: "PPP", male: 14, female: 16 },
    { party: "Perindo", short: "Perindo", logo: "P", male: 12, female: 8 },
    { party: "PSI", short: "PSI", logo: "PSI", male: 10, female: 10 },
    { party: "PBB", short: "PBB", logo: "PBB", male: 8, female: 6 },
    { party: "Garuda", short: "Garuda", logo: "G", male: 7, female: 5 },
    { party: "Berkarya", short: "Berkarya", logo: "B", male: 6, female: 4 },
    { party: "Hanura", short: "Hanura", logo: "H", male: 9, female: 7 },
    { party: "PKN", short: "PKN", logo: "PKN", male: 5, female: 5 },
    { party: "Gelora", short: "Gelora", logo: "G", male: 6, female: 4 },
    { party: "Ummat", short: "Ummat", logo: "U", male: 4, female: 6 }
];

// Data untuk tahun 2019 (9 partai, tanpa dapil)
export const data2019All = [
    { party: "PKB", short: "PKB", logo: "PKB", male: 16, female: 10 },
    { party: "Gerindra", short: "Ger", logo: "G", male: 17, female: 9 },
    { party: "PDI Perjuangan", short: "PDI-P", logo: "PDI", male: 15, female: 11 },
    { party: "Golkar", short: "Golkar", logo: "G", male: 16, female: 10 },
    { party: "NasDem", short: "NasDem", logo: "N", male: 14, female: 11 },
    { party: "PKS", short: "PKS", logo: "PKS", male: 15, female: 10 },
    { party: "PAN", short: "PAN", logo: "PAN", male: 13, female: 11 },
    { party: "Demokrat", short: "Demokrat", logo: "D", male: 14, female: 10 },
    { party: "PPP", short: "PPP", logo: "PPP", male: 12, female: 11 }
];

// Data untuk tahun 2014 (9 partai, tanpa dapil)
export const data2014All = [
    { party: "PKB", short: "PKB", logo: "PKB", male: 14, female: 8 },
    { party: "Gerindra", short: "Ger", logo: "G", male: 15, female: 8 },
    { party: "PDI Perjuangan", short: "PDI-P", logo: "PDI", male: 14, female: 8 },
    { party: "Golkar", short: "Golkar", logo: "G", male: 15, female: 7 },
    { party: "NasDem", short: "NasDem", logo: "N", male: 12, female: 8 },
    { party: "PKS", short: "PKS", logo: "PKS", male: 13, female: 8 },
    { party: "PAN", short: "PAN", logo: "PAN", male: 12, female: 8 },
    { party: "Demokrat", short: "Demokrat", logo: "D", male: 13, female: 7 },
    { party: "PPP", short: "PPP", logo: "PPP", male: 11, female: 8 }
];

// Sumber data (SK KPU) per tahun
export const sourceDataMap = {
    2024: {
        text: 'SK KPU Nomor 123/KPU/2024',
        url: 'https://www.kpu.go.id/berita/read/123/sk-kpu-2024'
    },
    2019: {
        text: 'SK KPU Nomor 456/KPU/2019',
        url: 'https://www.kpu.go.id/berita/read/456/sk-kpu-2019'
    },
    2014: {
        text: 'SK KPU Nomor 789/KPU/2014',
        url: 'https://www.kpu.go.id/berita/read/789/sk-kpu-2014'
    }
};

// Proporsi pembagian data ke dapil (40%, 35%, 25%)
export const dapilRatios = [0.4, 0.35, 0.25];

// Fungsi untuk membagi data all ke tiga dapil
export function splitDataForDapil(data, ratios) {
    const dapils = [[], [], []];
    data.forEach(item => {
        const maleTotal = item.male;
        const femaleTotal = item.female;
        let maleRemain = maleTotal;
        let femaleRemain = femaleTotal;
        ratios.forEach((ratio, idx) => {
            let malePart = Math.floor(maleTotal * ratio);
            let femalePart = Math.floor(femaleTotal * ratio);
            if (idx === ratios.length - 1) {
                malePart = maleRemain;
                femalePart = femaleRemain;
            } else {
                maleRemain -= malePart;
                femaleRemain -= femalePart;
            }
            dapils[idx].push({
                ...item,
                male: malePart,
                female: femalePart
            });
        });
    });
    return dapils;
}
