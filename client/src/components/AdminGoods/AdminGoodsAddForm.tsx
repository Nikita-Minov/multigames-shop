import * as React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {
  createProduct,
} from '../../redux/reducers/productsReducer/productsReducer';
/* eslint-disable no-unused-vars */

const AdminCategoriesAddForm = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const formik = useFormik({
    initialValues: {
      productName: '',
      productPrice: 0,
      data: '',
      description: '',
      photos: '',
      categoryId: 0,
    },
    onSubmit: async (values) => {
      const photosArr = values.photos.split(',');
      const dataArr = values.data.split(',');
      dispatch(createProduct(
          cookies.token,
          values.productName,
          {accounts: dataArr},
          values.description,
          {arr: photosArr},
          values.productPrice,
          values.categoryId));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="productName">Название</label>
      <StyledInput
        id="productName"
        name="productName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.productName}
        placeholder={'Название продукта'}
      />
      <label htmlFor="productPrice">Цена</label>
      <StyledInput
        id="productPrice"
        name="productPrice"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.productPrice}
        placeholder={'Цена продукта'}
      />
      <label htmlFor="data">Данные(через запятую, без пробелов)</label>
      <StyledInput
        id="data"
        name="data"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.data}
        placeholder={'Данные от продукта(если несколько - через запятую)'}
      />
      <label htmlFor="description">Описание</label>
      <StyledInput
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        placeholder={'Описание продукта'}
      />
      <label htmlFor="photos">Фотографии(через запятую, без пробелов)</label>
      <StyledInput
        id="photos"
        name="photos"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.photos}
        placeholder={'Фотографии(через запятную)'}
      />
      <label htmlFor="categoryId">ИД Категории</label>
      <StyledInput
        id="categoryId"
        name="categoryId"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.categoryId}
        placeholder={'ИД Категории'}
      />
      <StyledButton type="submit">Подтвердить</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 40%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000000;
  margin-bottom: 40px;
`;

const StyledInput = styled.input`
  border: solid 2px #000000;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;


export default AdminCategoriesAddForm;
