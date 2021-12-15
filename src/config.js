const layersOrder = [
    { name: 'Background', number: 3 },
    { name: 'Bg2', number: 11 },
    { name: 'Eyewear', number: 11 },
    { name: 'Innermain', number: 11 }

];
  
const format = {
    width: 240,
    height: 240
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };