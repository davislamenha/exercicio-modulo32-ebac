import { PhonePlus, Phone, Star } from '@phosphor-icons/react';
import { Slide } from 'react-awesome-reveal';

import { Button, GreenButton, YellowButton } from '../../styles';
import { List, Nav } from './styles';

const NavigationBar = () => (
  <Nav>
    <Slide>
      <List>
        <li>
          <GreenButton>
            <PhonePlus weight="fill" size={20} />
            Adicionar Contato
          </GreenButton>
        </li>
        <li>
          <Button>
            <Phone weight="fill" size={20} />
            Meus Contatos
          </Button>
        </li>
        <li>
          <YellowButton>
            <Star weight="fill" size={20} />
            Favoritos
          </YellowButton>
        </li>
      </List>
    </Slide>
  </Nav>
);

export default NavigationBar;
