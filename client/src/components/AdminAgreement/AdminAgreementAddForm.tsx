import * as React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {
  createAgreement,
} from '../../redux/reducers/agreementsReducer/agreementsReducer';

const AdminCategoriesAddForm = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const formik = useFormik({
    initialValues: {
      clauseOfAgr: '',
    },
    onSubmit: async (values) => {
      dispatch(createAgreement(values.clauseOfAgr, cookies.token));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput
        id="clauseOfAgr"
        name="clauseOfAgr"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.clauseOfAgr}
        placeholder={'Название пункта соглашения'}
      />
      <StyledButton type="submit">Добавить</StyledButton>
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
