import React from 'react';
import { useCategoryFilters } from '../../../hooks/utils/useFilters';

import FiltersLayout from '../../../layouts/Share/Filters';
import Skeleton from 'react-loading-skeleton';

import { Button } from 'grommet';

const OneFilter = ({filterName, selected, update}) => (
  <Button
    onClick={() => !selected && update(filterName)}
    label={filterName}
    plain={!selected}
    primary={selected}
    margin={{vertical: "0px", horizontal: "medium"}}
    size="small" />
)

const Filters = () => {
  const { allCategories, selectedCategories, updateFilters, resetFilters } = useCategoryFilters();
  console.log(allCategories);
  return (
    <FiltersLayout>
      <Button
        onClick={() => updateFilters(allCategories)}
        label="All"
        plain
        margin={{vertical: "0px", horizontal: "medium"}}
        size="small"
      />
      {
        allCategories && allCategories.length > 1 ?
        allCategories.map(cat => <OneFilter key={cat} update={updateFilters} selected={selectedCategories.includes(cat)} filterName={cat} />)
        :
        <Skeleton height={50} width={400}/>
      }
      <Button
        onClick={() => resetFilters()}
        label="Clear"
        plain
        margin={{vertical: "0px", horizontal: "medium"}}
        size="small"
      />
    </FiltersLayout>
  )
}

export default Filters;

