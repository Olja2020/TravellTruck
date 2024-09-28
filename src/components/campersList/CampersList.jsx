// import { useSelector } from "react-redux";
// import { Item } from "../camper/Camper";
// import { selectVisibleItems } from "../../redux/selectors";
// import css from "./ListItems.module.css";
// import { Link, useLocation } from "react-router-dom";

//const CampersList = () => {
//   const tasks = useSelector((state) => state.tasks.items);
//   const statusFilter = useSelector((state) => state.filters.status);
//   const visibleItems = getVisibleItems(tasks, statusFilter);

//   //const visibleItems = useSelector(selectVisibleItems);
//   const location = useLocation();
//   return (
//     <ul className={css.list}>
//       {visibleItems.map((item) => (
//         <li className={css.listItem} key={item.id}>
//           <Link to={`${item.id}`} state={location}>
//             <Item task={item} />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

//export default CampersList;

// export const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.items);
//   const statusFilter = useSelector((state) => state.filters.status);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map((task) => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Camper from '../camper/Camper';
import css from './CampersList.module.css';
import {
  selectError,
  selectIsLoading,
  selectCampers,
} from '../../redux/campers/selectors';
import { InfinitySpin } from 'react-loader-spinner';

const CamperList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);

  // Локальное состояние для отслеживания количества отображаемых элементов
  const [visibleCampers, setVisibleCampers] = useState(4); // Начальное количество элементов

  // Обработчик для кнопки "Load More"
  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4); // Увеличиваем на 5 элементов
  };

  return (
    <div>
      {isLoading && !error && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFC531"
          ariaLabel="infinity-spin-loading"
        />
      )}

      <ul className={css.camperList}>
        {campers.slice(0, visibleCampers).map((camper) => (
          <li key={camper.id} className={css.camperItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>

      {/* Если есть ещё элементы для отображения, показываем кнопку "Load More" */}
      {visibleCampers < campers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}

      {error && <p className={css.error}>Error loading campers: {error}</p>}
    </div>
  );
};

export default CamperList;