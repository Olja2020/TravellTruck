import { selectFilters } from '../../redux/filters/slice';
import { selectCampers } from '../../redux/campers/selectors';

export const selectCampersFilter = (state) => {
  const filter = selectFilters(state);
  const campers = selectCampers(state);

  return campers.filter((camper) => {
    return (
      // (filter.location === '' || (camper.location && camper.location === filter.location)) && // Перевірка на місцезнаходження
      (filter.AC === false || camper.AC === filter.AC) && // Перевірка на кондиціонер
      (filter.transmission === 'automatic' || camper.transmission === filter.transmission) && // Перевірка на трансмісію
      (filter.kitchen === false || camper.kitchen) && // Перевірка на кухню
      (filter.TV === false || camper.TV) && // Перевірка на телевізор
      (filter.bathroom === false || camper.bathroom) && // Перевірка на ванну
      (camper.form === filter.form) // Перевірка на тип кемпера
    );
  });
};