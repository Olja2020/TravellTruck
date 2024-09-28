import { useSelector } from "react-redux";
import { Item } from "../item/Item";
import { selectVisibleItems } from "../../redux/selectors";
import css from "./ListItems.module.css";
import { Link, useLocation } from "react-router-dom";

const ListItems = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleItems = getVisibleItems(tasks, statusFilter);

  //const visibleItems = useSelector(selectVisibleItems);
  const location = useLocation();
  return (
    <ul className={css.list}>
      {visibleItems.map((item) => (
        <li className={css.listItem} key={item.id}>
          <Link to={`${item.id}`} state={location}>
            <Item task={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
