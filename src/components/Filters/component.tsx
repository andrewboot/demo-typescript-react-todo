import { FilterType } from '../../../types/filters';
import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 7px 10px;
  margin-top: 10px;
`;

const FiltersText = styled.div`
  margin-right: 10px;
`;

const FiltersRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Filter = styled.button`
  border: none;
  padding: 5px 9px;
  font-weight: 700;
  font-size: 14px;
  background-color: rgba(0,0,0,0.15);
  color: dimgray;
  transition: background-color .2s ease;
  outline: none;

  &:not(:last-child) {
    margin-right: 7px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,0.35);
  }

  &[data-applied=true] {
    background-color: rgba(0,0,0,0.35);
  }
`;

interface Props {
  applied: FilterType;
  applyFilter: (filterType: FilterType) => void;
}

const FiltersComponent = ({
  applied,
  applyFilter,
}) => (
  <FiltersContainer>
    <FiltersText>Show me</FiltersText>
    <FiltersRow>
      <Filter
        data-applied={applied === 'all'}
        onClick={applyFilter.bind(null, 'all')}
      >
        All
      </Filter>
      <Filter
        data-applied={applied === 'active'}
        onClick={applyFilter.bind(null, 'active')}
      >
        Active
      </Filter>
      <Filter
        data-applied={applied === 'completed'}
        onClick={applyFilter.bind(null, 'completed')}
      >
        Completed
      </Filter>
    </FiltersRow>
  </FiltersContainer>
);

export default FiltersComponent;
