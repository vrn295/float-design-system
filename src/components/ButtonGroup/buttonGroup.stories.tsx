import Button from 'components/Button';
import ButtonGroup from '.';

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup
};

export const Veritcal = () => (
  <ButtonGroup className="button-group" orientation="vertical">
    <Button>Click Me</Button>
    <Button variant="outline">Click Me</Button>
  </ButtonGroup>
);

export const Horizontal = () => (
  <ButtonGroup className="button-group">
    <Button>Click Me</Button>
    <Button variant="outline">Click Me</Button>
  </ButtonGroup>
);
