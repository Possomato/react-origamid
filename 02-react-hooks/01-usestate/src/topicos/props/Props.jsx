import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

export default function Props() {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <p>Props</p>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal} />
    </div>
  );
}
