const FindArena = require('tflite-find-arena-size');
const fs = require('fs');
 
(async () => {
    let fa = new FindArena();
    await fa.init();
 
    let tflite = await fs.promises.readFile('models/Gla_DOS.tflite');
    let size = await fa.findArenaSize(tflite, 1 * 1024, 128 * 1024);
    console.log('arena size is', size);
})();
