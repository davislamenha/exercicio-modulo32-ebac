import { MainContainer, Table, Title } from './styles';

const ContactsList = () => (
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
        <tr>
          <td>Davis Lamenha Sampaio</td>
          <td>davislamenha@gmail.com</td>
          <td>82 9 94208093</td>
          <td>Deletar</td>
        </tr>
        <tr>
          <td>Davis Lamenha Sampaio</td>
          <td>davislamenha@gmail.com</td>
          <td>82 9 94208093</td>
          <td>Deletar</td>
        </tr>
        <tr>
          <td>Davis Lamenha Sampaio</td>
          <td>davislamenha@gmail.com</td>
          <td>82 9 94208093</td>
          <td>Deletar</td>
        </tr>
        <tr>
          <td>Davis Lamenha Sampaio</td>
          <td>davislamenha@gmail.com</td>
          <td>82 9 94208093</td>
          <td>Deletar</td>
        </tr>
        <tr>
          <td>Davis Lamenha Sampaio</td>
          <td>davislamenha@gmail.com</td>
          <td>82 9 94208093</td>
          <td>Deletar</td>
        </tr>
      </tbody>
    </Table>
  </MainContainer>
);

export default ContactsList;
