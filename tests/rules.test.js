/* Ejecutar: node tests/rules.test.js */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const ctx={};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/rules.js'),'utf8'),ctx);
const {rarityFor,combatPower}=ctx.ForgeRules;
for(const [q,expected] of [[0,'Común'],[64,'Común'],[65,'Excelente'],[81,'Excelente'],[82,'Magistral'],[94,'Magistral'],[95,'Legendaria'],[100,'Legendaria']])assert.equal(rarityFor(q).name,expected,'Calidad '+q);
assert.equal(rarityFor(95).mult,2.3);
assert.equal(rarityFor(undefined).name,'Común');
assert.equal(combatPower({weapon:'sword',metal:'iron',quality:0}),12);
assert.equal(combatPower({weapon:'sword',metal:'steel',quality:90}),26);
assert.ok(combatPower({weapon:'greatsword',metal:'mithril',quality:100})>combatPower({weapon:'dagger',metal:'iron',quality:100}));
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
for(const file of ['css/style.css','js/rules.js','js/game.js']){assert.ok(html.includes(file),'Falta enlace '+file);assert.ok(fs.existsSync(path.join(__dirname,'..',file)),'Falta archivo '+file)}
new Function(fs.readFileSync(path.join(__dirname,'../js/game.js'),'utf8'));
console.log('✓ ForgeBorn: reglas, enlaces y sintaxis correctos');
