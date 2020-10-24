import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryFilters } from '../../../hooks/utils/useFilters';

import FiltersLayout, { OneCategory } from '../../../layouts/Share/Filters';
import Skeleton from 'react-loading-skeleton';

const OneFilter = ({filter, selected, add, remove}) => (
  <OneCategory
    onClick={() => !selected ? add([filter]) : remove(filter)}
    margin={{vertical: "0px", horizontal: "medium"}}
    selected={selected}
  >
    {filter.name}
  </OneCategory>
)

const Filters = ({filterType, allOptions}) => {
  const { t } = useTranslation();
  const { add, remove, clear, activeFilters } = useQueryFilters(filterType, allOptions);
  return (
    <FiltersLayout>
      <OneCategory
        onClick={() => add(allOptions)}
        margin={{vertical: "0px", horizontal: "medium"}}
      >
        {t("filters.all")}
      </OneCategory>
      {
        allOptions && allOptions.length > 1 ?
        allOptions.map(opt => (
          <OneFilter
            key={opt.slug}
            add={add}
            remove={remove}
            selected={activeFilters.includes(opt.slug)}
            filter={opt}
          />
        ))
        :
        <Skeleton height={50} width={400}/>
      }
      <OneCategory
        onClick={() => clear()}
        margin={{vertical: "0px", horizontal: "medium"}}
      >
        {t("filters.clear")}
      </OneCategory>
    </FiltersLayout>
  )
}

export default Filters;

