import * as React from 'react';
import styled from 'styled-components';
/* eslint-disable no-unused-vars */
import {
  FilterItemProps,
  FilterProps,
  FilterSectionProps,
} from '../../types/components/goods/filterSection.types';
import {useState} from 'react';
/* eslint-enable no-unused-vars */
import closeFilter from '../../assets/img/goods/closeFilter.svg';
import openFilter from '../../assets/img/goods/openFilter.svg';
import {useDispatch} from 'react-redux';
import {
  setProducts,
} from '../../redux/reducers/productsReducer/productsReducer';

interface OpenFilterBlockProps {
  filterOpened: boolean;
}

const FilterSection = ({
  usualFilter,
  customFilter,
  updateCustomFilter,
  updateUsualFilter,
  products,
}: FilterSectionProps) => {
  const [filterOpened, setFilterOpened] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <FilterSectionWrapperMobile>
        <OpenFilterBlock filterOpened={filterOpened}>
          {filterOpened?<OpenFilterButton onClick={() => {
            setFilterOpened(false);
          }}>
            Закрыть фильтр <img src={closeFilter}/>
          </OpenFilterButton>:
            <OpenFilterButton onClick={() => {
              setFilterOpened(true);
            }}>
              Открыть фильтр <img src={openFilter}/>
            </OpenFilterButton>
          }
        </OpenFilterBlock>
        {filterOpened?<>
          <FilterBlockInRow length={usualFilter.length+1}>
            {
              usualFilter.map((el, id) => {
                return (
                  <FilterItem touched={el.touched} key={id} onClick={() => {
                    updateUsualFilter(id);
                    dispatch(setProducts(el.sortFn(products)));
                  }}>
                    {el.name}
                  </FilterItem>
                );
              })
            }
          </FilterBlockInRow>
          <CustomFilterBlock length={customFilter.length+1}>
            {
              customFilter.map((el, id) => {
                return (
                  <FilterItem touched={el.touched} key={id} onClick={() => {
                    updateCustomFilter(id);
                    const partArr1 = el.revSortFn(products);
                    const partArr2 = el.sortFn(products);
                    const result = partArr2.concat(partArr1);
                    dispatch(setProducts(result));
                  }}>
                    {el.name}
                  </FilterItem>
                );
              })
            }
          </CustomFilterBlock>
        </>:
        <></>
        }
      </FilterSectionWrapperMobile>
      <FilterSectionWrapper>
        <FilterBlockInRow length={usualFilter.length+1}>
          {
            usualFilter.map((el, id) => {
              return (
                <FilterItem touched={el.touched} key={id} onClick={() => {
                  updateUsualFilter(id);
                  dispatch(setProducts(el.sortFn(products)));
                }}>
                  {el.name}
                </FilterItem>
              );
            })
          }
        </FilterBlockInRow>
        <CustomFilterBlock length={customFilter.length+1}>
          {
            customFilter.map((el, id) => {
              return (
                <FilterItem touched={el.touched} key={id} onClick={() => {
                  updateCustomFilter(id);
                  const partArr1 = el.revSortFn(products);
                  const partArr2 = el.sortFn(products);
                  const result = partArr2.concat(partArr1);
                  dispatch(setProducts(result));
                }}>
                  {el.name}
                </FilterItem>
              );
            })
          }
        </CustomFilterBlock>
      </FilterSectionWrapper>
    </>

  );
};


const FilterSectionWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-content: space-between;
  justify-items: center;
  @media(max-width: 430px) {
    display: none;
  }
`;

const FilterSectionWrapperMobile = styled.div`
  display: none;
  width: 100%;
  min-height: 100px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 430px) {
    display: flex;
  }
`;

const OpenFilterBlock = styled.div<OpenFilterBlockProps>`
  display: none;
  width: 100%;
  min-height: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: #1C1F29;
  @media(max-width: 430px) {
    margin-top: 10px;
    max-height: 50px;
    display: flex;
    border-radius: ${(props) => props.filterOpened? '10px 10px 0 0': '10px'};
  }
`;

const OpenFilterButton = styled.button`
  background: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  opacity: 0.8;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

const FilterBlock = styled.div<FilterProps>`
  width: 95%;
  margin-top: 20px;
  min-width: 100px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1C1F29;
  border-radius: 20px;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-right: 20px;
  @media(max-width: 1300px) {
    justify-content: center;
  }
  @media(max-width: 1000px) {
    width: 90%;
  }
  @media(max-width: 430px) {
    margin-top: 0;
    border-radius: 0;
  }
`;

const FilterBlockInRow = styled(FilterBlock)`
  @media(max-width: 430px) {
    width: 100%;
    flex-wrap: nowrap;
    border-radius: 0;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
  }
`;

const CustomFilterBlock = styled(FilterBlock)`
  @media(max-width: 430px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 20px;
    border-radius: 0 0 15px 15px;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
  }
`;

const FilterItem = styled.button<FilterItemProps>`
  width: 200px;
  height: 50px;
  background: ${(props: FilterItemProps) => props.touched?
  'linear-gradient(to right, #313c5f, #574a70);':'#41435A'} ;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  :hover {
    cursor: pointer;
  }
  color: #ffffff;
  opacity: 0.7;
  margin-bottom: 20px;
  margin-left: 20px;
  @media(max-width: 1000px) {
    width: 150px;
    height: 40px;
    font-size: 14px;
  }
  @media(max-width: 500px) {
    width: 130px;
    height: 40px;
    font-size: 12px;
  }
  @media(max-width: 430px) {
    width: 130px;
    height: 50px;
    font-size: 10px;
    margin-bottom: 20px;
    margin-left: 0;
  }
`;

export default FilterSection;
