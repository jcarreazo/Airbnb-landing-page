export default function Data() {
  var random = Math.floor(Math.random() * 1000);
  var randomImg1 = `https://picsum.photos/id/${random}/600`;
  var random = Math.floor(Math.random() * 1000);
  var randomImg2 = `https://picsum.photos/id/${random}/600`;
  var random = Math.floor(Math.random() * 1000);
  var randomImg3 = `https://picsum.photos/id/${random}/600`;
  return [
    {
      image: randomImg1,
      Status: 'SOLD OUT',
      RatesNumber: '4.5',
      RatesQuantity: '(2501)',
      Country: '-East Europe',
      alts: 'feature1',
      Description: 'Life lessons with Katie Zaferes',
      Price: 'From $136',
    },

    {
      image: randomImg2,
      Status: 'ONLINE',
      RatesNumber: '4.2',
      RatesQuantity: '(3150)',
      Country: '-East Asia',
      alts: 'feature2',
      Description: 'Learn wedding photography',
      Price: 'From $125',
    },

    {
      image: randomImg3,
      Status: 'SOLD OUT',
      RatesNumber: '4.0',
      RatesQuantity: '(841)',
      Country: '-USA',
      alts: 'feature3',
      Description: 'Group Mountain Biking',
      Price: 'From $60',
    },
  ];
}
