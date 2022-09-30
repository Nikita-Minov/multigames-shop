import * as React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {
  addDataProduct,
} from '../../redux/reducers/productsReducer/productsReducer';
/* eslint-disable no-unused-vars */

interface AdminCategoriesAddFormProps {
  productId: number;
}

const AdminCategoriesAddForm = ({productId}: AdminCategoriesAddFormProps) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const formik = useFormik({
    initialValues: {
      data: '',
    },
    onSubmit: async (values) => {
      dispatch(addDataProduct(cookies.token, productId, values.data));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput
        id="data"
        name="data"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.data}
        placeholder={'Данные'}
      />
      <StyledButton type="submit">Добавить</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const StyledInput = styled.input`
  border: solid 2px #000000;
  padding: 10px 0;
  font-family: 'Roboto', sans-serif;
`;

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;


export default AdminCategoriesAddForm;
