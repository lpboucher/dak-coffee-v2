import React from 'react';
import { useQueryFilters } from '../../../hooks/utils/useFilters';

import FiltersLayout from '../../../layouts/Share/Filters';
import Skeleton from 'react-loading-skeleton';

import { Button } from 'grommet';

const OneFilter = ({filterName, selected, add, remove}) => (
  <Button
    onClick={() => !selected ? add([filterName]) : remove(filterName)}
    label={filterName}
    plain={!selected}
    primary={selected}
    margin={{vertical: "0px", horizontal: "medium"}}
    size="small" />
)

const Filters = ({filterType, allOptions}) => {
  const { add, remove, clear, activeFilters } = useQueryFilters(filterType);
  return (
    <FiltersLayout>
      <Button
        onClick={() => add(allOptions)}
        label="All"
        plain
        margin={{vertical: "0px", horizontal: "medium"}}
        size="small"
      />
      {
        allOptions && allOptions.length > 1 ?
        allOptions.map(opt => (
          <OneFilter
            key={opt}
            add={add}
            remove={remove}
            selected={activeFilters.includes(opt)}
            filterName={opt}
          />
        ))
        :
        <Skeleton height={50} width={400}/>
      }
      <Button
        onClick={() => clear()}
        label="Clear"
        plain
        margin={{vertical: "0px", horizontal: "medium"}}
        size="small"
      />
    </FiltersLayout>
  )
}

export default Filters;

