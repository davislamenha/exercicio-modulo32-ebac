import { RootReducer } from '../../store';
import { useSelector } from 'react-redux';

import { MainContainer, Table, Title } from './styles';
import Contact from '../../components/Contact';

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
                <Contact
                  id={id}
                  name={name}
                  email={email}
                  phone={phone}
                  favorite={favorite}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </MainContainer>
  );
};

export default ContactsList;
