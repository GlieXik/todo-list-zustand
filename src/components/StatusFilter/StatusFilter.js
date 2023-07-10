import { Button } from "components/Button/Button";

import css from "./StatusFilter.module.css";
import { statusFilters } from "utils/constants";
import { useFilterStore } from "store/store";
export const StatusFilter = () => {
  const filter = useFilterStore(state => state.filter);
  const setFilter = useFilterStore(state => state.setFilter);
  const handleFilterChange = filter => setFilter(filter);
  return (
    <div className={css.wrapper}>
      {Object.values(statusFilters).map(statusFilter => (
        <Button
          key={statusFilter}
          selected={filter === statusFilter}
          onClick={() => handleFilterChange(statusFilter)}
        >
          {statusFilter.charAt(0).toUpperCase() +
            statusFilter.slice(1).toLowerCase()}
        </Button>
      ))}
    </div>
  );
};
