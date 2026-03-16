const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.resolve('public/images');
const OUTPUT_DIR = path.resolve('public/images-optimized');

// Files to exclude completely
const EXCLUDED_FILES = new Set([
  'lencois-hero-poster.png',
  'logo-1.jpeg',
]);

// Supported extensions
const SUPPORTED_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
]);

// Config
const MAX_WIDTH = 2000;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 90;
const WEBP_QUALITY = 82;

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function isSupportedImage(filePath) {
  return SUPPORTED_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function shouldExclude(filePath) {
  return EXCLUDED_FILES.has(path.basename(filePath));
}

async function optimizeImage(inputPath) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relativePath);
  const outputDir = path.dirname(outputPath);

  await ensureDir(outputDir);

  const ext = path.extname(inputPath).toLowerCase();
  const image = sharp(inputPath, { animated: false });
  const metadata = await image.metadata();

  let pipeline = image.rotate();

  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: 'inside',
    });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:4:4',
    });
  } else if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      quality: PNG_QUALITY,
      palette: false,
    });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({
      quality: WEBP_QUALITY,
    });
  } else if (ext === '.avif') {
    pipeline = pipeline.avif({
      quality: 60,
    });
  }

  await pipeline.toFile(outputPath);

  const originalStats = await fs.promises.stat(inputPath);
  const optimizedStats = await fs.promises.stat(outputPath);

  return {
    inputPath,
    outputPath,
    originalSize: originalStats.size,
    optimizedSize: optimizedStats.size,
    savedBytes: originalStats.size - optimizedStats.size,
  };
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
}

async function main() {
  console.log(`Scanning ${INPUT_DIR}...`);

  const allFiles = await walk(INPUT_DIR);
  const imageFiles = allFiles.filter(isSupportedImage);

  const includedFiles = imageFiles.filter((filePath) => !shouldExclude(filePath));
  const excludedFiles = imageFiles.filter((filePath) => shouldExclude(filePath));

  console.log(`Found ${imageFiles.length} image(s).`);
  console.log(`Excluded ${excludedFiles.length} image(s):`);
  for (const filePath of excludedFiles) {
    console.log(`  - ${path.relative(INPUT_DIR, filePath)}`);
  }

  const results = [];

  for (const filePath of includedFiles) {
    try {
      const result = await optimizeImage(filePath);
      results.push(result);

      console.log(
        `✔ ${path.relative(INPUT_DIR, filePath)} | ${formatBytes(result.originalSize)} -> ${formatBytes(result.optimizedSize)}`
      );
    } catch (error) {
      console.error(`✖ Failed: ${path.relative(INPUT_DIR, filePath)}`);
      console.error(error);
    }
  }

  const totalOriginal = results.reduce((sum, item) => sum + item.originalSize, 0);
  const totalOptimized = results.reduce((sum, item) => sum + item.optimizedSize, 0);
  const totalSaved = totalOriginal - totalOptimized;

  console.log('\nDone.');
  console.log(`Original total:  ${formatBytes(totalOriginal)}`);
  console.log(`Optimized total: ${formatBytes(totalOptimized)}`);
  console.log(`Saved total:     ${formatBytes(totalSaved)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
