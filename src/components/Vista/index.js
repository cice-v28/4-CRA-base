import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./Vista.modules.css";

const MyModal = props => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src="/conf.png" />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

class Vista extends React.Component {
  render() {
    return (
      <section>
        <p>Soy la primera vista</p>
        <MyModal />
      </section>
    );
  }
}

export default Vista;
