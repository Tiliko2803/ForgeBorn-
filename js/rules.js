/* Reglas puras: sin DOM ni estado global. */
(function(root){'use strict';
const rarityTiers=[{min:0,name:'Común',color:'#aeb4bd',mult:1},{min:65,name:'Excelente',color:'#60d6b1',mult:1.25},{min:82,name:'Magistral',color:'#80b8ff',mult:1.65},{min:95,name:'Legendaria',color:'#ffcc68',mult:2.3}];
function rarityFor(q){const value=Number.isFinite(Number(q))?Number(q):0;return [...rarityTiers].reverse().find(r=>value>=r.min)||rarityTiers[0]}
function combatPower(a){const types={dagger:9,sword:12,greatsword:17,axe:15,mace:13,morningstar:16};const material={iron:0,bronze:1,steel:4,damascus:8,mithril:12};return (types[a.weapon]||10)+(material[a.metal]||0)+Math.round((a.quality||0)/9)}
root.ForgeRules=Object.freeze({rarityTiers,rarityFor,combatPower});
})(typeof globalThis!=='undefined'?globalThis:this);
