import * as React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {
  Agreement,
} from '../../types/redux/reducers/agreementsReducer/agreementsReducer.types';
import {
  deleteAgreement,
} from '../../redux/reducers/agreementsReducer/agreementsReducer';

interface AdminCategoriesList {
  agreements: Array<Agreement>;
}

const AdminAgreementList = ({agreements}: AdminCategoriesList) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const delAgreement = (clauseOfAgrId: number, token: string) => {
    dispatch(deleteAgreement(clauseOfAgrId, token));
  };
  return (
    <>
      {agreements?agreements.map((el, id) => {
        return (
          <AgreementItem key={id}>
            <h1>Name: {el.clauseOfAgr}</h1>
            <h2>Id: {el.clauseOfAgrId}</h2>
            <button onClick={() => {
              delAgreement(el.clauseOfAgrId, cookies.token);
            }}>Delete</button>
          </AgreementItem>
        );
      }): <>Нет пунктов соглашения</>}
    </>);
};

const AgreementItem = styled.div`
  border: 2px solid #000000;
  border-radius: 15px;
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;


export default AdminAgreementList;
