// optimize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/imgs";   // pasta onde estão suas imagens originais
const outputDir = "./dist/imgs"; // pasta de saída (ou sobrescreve a mesma se preferir)

// breakpoints que você quer gerar
const sizes = [450, 720, 900]; 

// formatos que você quer exportar
const formats = ["webp"]; // pode incluir "avif", "jpeg" se quiser fallback

function optimizeImage(file) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  sizes.forEach((size) => {
    formats.forEach((format) => {
      const outputPath = path.join(outputDir, `${baseName}-${size}.${format}`);

      sharp(inputPath)
        .resize(size) // redimensiona na largura, altura ajusta automaticamente
        .toFormat(format, { quality: 80 }) // qualidade ajustável
        .toFile(outputPath)
        .then(() => console.log(`✅ Gerado: ${outputPath}`))
        .catch((err) => console.error(`❌ Erro: ${err}`));
    });
  });
}

function run() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.readdirSync(inputDir).forEach((file) => {
    if (/\.(jpe?g|png|webp)$/i.test(file)) {
      optimizeImage(file);
    }
  });
}

run();
