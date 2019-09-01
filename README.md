# react-scenographic
A very lightweight react-modal. [npm](https://www.npmjs.com/package/react-scenographic)


## To install:
```npm install --save react-scenographic```

## To use:
```
import { useModal, Modal } from 'react-scenographic';

const Container = () => {
  const [isShowing, toggle] = useModal();
  
  return (
    <React.Fragment>
      <PrimaryButton onClick={toggle}>TOGGLE</PrimaryButton>
      <Modal header={header} footer={footer} isShowing={isShowing} toggle={toggle}>
        {content}
      </Modal>
    </React.Fragment>
  );
};
```
