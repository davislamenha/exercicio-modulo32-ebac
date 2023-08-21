import { RootReducer } from '../../store';
import { useSelector } from 'react-redux';
import { Trash, PencilSimple, Star } from '@phosphor-icons/react';

import { MainContainer, Table, Title } from './styles';
import { Button, RedButton, YellowButton } from '../../styles';

const ContactsList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items);

  return (
    <MainContainer>
      <Title>Meus Contatos</Title>
      <Table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, email, phone, favorite }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td className="contact-actions">
                  <RedButton>
                    <Trash weight="fill" size={24} />
                  </RedButton>
                  <Button>
                    <PencilSimple weight="fill" size={24} />
                  </Button>
                  <YellowButton className={favorite ? 'active' : ''}>
                    <Star weight="fill" size={24} />
                  </YellowButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </MainContainer>
  );
};

export default ContactsList;
