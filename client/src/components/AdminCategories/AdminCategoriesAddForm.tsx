import * as React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {
  createCategory,
} from '../../redux/reducers/categoriesReducer/categoriesReducer';
import {useCookies} from 'react-cookie';

const AdminCategoriesAddForm = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const formik = useFormik({
    initialValues: {
      categoryName: '',
    },
    onSubmit: async (values) => {
      dispatch(createCategory(values.categoryName, cookies.token));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput
        id="categoryName"
        name="categoryName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.categoryName}
        placeholder={'Название категории'}
      />
      <StyledButton type="submit">Подтвердить</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #000000;
`;

const StyledInput = styled.input`
  border: solid 2px #000000;
  padding: 10px 20px;
`;

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;


export default AdminCategoriesAddForm;
