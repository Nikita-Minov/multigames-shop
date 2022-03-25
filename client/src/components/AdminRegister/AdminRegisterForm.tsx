import React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import usersAPI from '../../api/users.api';

const AdminRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      await usersAPI.register({
        password: values.password,
        username: values.username,
      });
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel htmlFor="username">Имя пользователя</StyledLabel>
      <StyledInput
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <StyledLabel htmlFor="password">Пароль</StyledLabel>
      <StyledInput
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <StyledButton type="submit">Подтвердить</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  border-radius: 15px;
  border: solid 2px #000000;
  padding: 10px 20px;
`;

const StyledLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export default AdminRegisterForm;
