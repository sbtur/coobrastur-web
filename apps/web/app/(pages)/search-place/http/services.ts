import { AUTO_COMPLETE_MOCK } from '@/shared/mocks/search-auto-complete';

export async function autoCompleteSearch(value: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const places = AUTO_COMPLETE_MOCK.filter(place =>
        place.name.toLowerCase().startsWith(value.toLowerCase()),
      );

      if (places.length <= 0) {
        reject({
          success: false,
          data: [],
          message: 'Nenhum lugar encontrado',
        });
      }

      resolve({
        success: true,
        data: places,
      });
    }, 0);
  });
}

// export async function getAccommodations(value: string | null) {
//   if (!value) return null;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const accommodations = ACCOMMODATIONS.filter(accommodation =>
//         accommodation.city.name.toLowerCase().startsWith(value.toLowerCase()),
//       );

//       if (accommodations.length <= 0) {
//         reject({
//           success: false,
//           data: [],
//           message: 'Nenhum hotel encontrado',
//         });
//       }

//       resolve({
//         success: true,
//         data: accommodations,
//       });
//     }, 0);
//   });
// }
