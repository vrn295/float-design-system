import Typograpgy from '.';

export default {
  title: 'Styles/Typograpgy',
  component: Typograpgy
};

export const Header = () => (
  <div className="container">
    <Typograpgy.Header>Hola ! 👋🏻</Typograpgy.Header>
  </div>
);

export const Heading = () => (
  <div className="container">
    <Typograpgy.Heading>Hola ! 👋🏻</Typograpgy.Heading>

    <Typograpgy.Heading level={2}>Hola ! 👋🏻</Typograpgy.Heading>
  </div>
);

export const SubHeading = () => (
  <div className="container">
    <Typograpgy.SubHeading>Hola ! 👋🏻</Typograpgy.SubHeading>

    <Typograpgy.SubHeading level={2}>Hola ! 👋🏻</Typograpgy.SubHeading>
  </div>
);

export const Body = () => (
  <div className="container">
    <Typograpgy.Body>Hola ! 👋🏻</Typograpgy.Body>

    <Typograpgy.Body level={2}>Hola ! 👋🏻</Typograpgy.Body>
  </div>
);
