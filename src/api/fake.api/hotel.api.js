// import { isError } from "lodash";

const roomes = {
  single: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Одноместный номер",
  },
  double: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Стандартный двухместный номер",
  },
  king: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "A room with a king-sized bed",
  },
  qween: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "A room with a queen-sized bed",
  },
  capsule: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Capsule Room",
  },
  sixguest: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Hostel Room for 6 person",
  },
};

const hotels = [
  {
    _id: "1",
    name: "Hotel R2D2",
    roomes: [roomes.single, roomes.double, roomes.king],
    stars: 3,
    rate: 2.5,
    mark: false,
  },
  {
    _id: "2",
    name: "Capsule hotel",
    roomes: [roomes.capsule, roomes.single],
    stars: 3,
    rate: 5,
    mark: false,
  },
  {
    _id: "3",
    name: "Vulcans Hotel",
    roomes: [roomes.double, roomes.qween, roomes.king],
    stars: 5,
    rate: 4.8,
    mark: false,
  },
  {
    _id: "4",
    name: "Wonder Hotel",
    roomes: [roomes.double, roomes.qween, roomes.king],
    stars: 5,
    rate: 5,
    mark: false,
  },
  {
    _id: "5",
    name: "Dream Capsule",
    roomes: [roomes.capsule, roomes.single],
    stars: 2,
    rate: 4.6,
    mark: false,
  },
  {
    _id: "6",
    name: "Aliens Hostel",
    roomes: [roomes.single, roomes.double, roomes.sixguest],
    stars: 1,
    rate: 3.5,
    mark: false,
  },
  {
    _id: "7",
    name: "Picnic Dreams Boutique Hostel",
    roomes: [roomes.single, roomes.double, roomes.sixguest],
    stars: 3,
    rate: 4,
    mark: false,
  },
  {
    _id: "8",
    name: "Nordic Hotel",
    roomes: [roomes.single, roomes.double],
    stars: 2,
    rate: 1,
    mark: false,
  },
  {
    _id: "9",
    name: "Pet-friendly Hotel",
    roomes: [roomes.single, roomes.double, roomes.qween, roomes.king],
    stars: 5,
    rate: 5,
    mark: false,
  },
];

// const fetchAll = () =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(hotels);
//     }, 2000);
//   });

// const getById = (id) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(hotels.find((hotel) => isError._id === id));
//     });
//   });

// export default {
//   fetchAll,
//   getById,
// };

export function fetchAll() {
  return hotels;
}
