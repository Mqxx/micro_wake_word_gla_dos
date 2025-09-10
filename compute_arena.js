const FindArena = require('tflite-find-arena-size');
const fs = require('fs').promises;

(async () => {
  const fa = new FindArena();
  await fa.init();

  const models = process.argv.slice(2);
  if (models.length === 0) {
    console.error("Keine Modelle übergeben.");
    process.exit(1);
  }

  for (const m of models) {
    const buf = await fs.readFile(m);
    const size = await fa.findArenaSize(buf, 1024, 128 * 1024); // 1 KB .. 128 KB
    console.log(`\n📦 Modell: ${m}`);
    console.log(`   Empfohlene tensor_arena_size = ${size} Bytes`);
  }
})();
