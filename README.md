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
      <button onClick={toggle}>show modal</button>
      <Modal header={header} footer={footer} isShowing={isShowing} toggle={toggle}>
        {content}
      </Modal>
    </React.Fragment>
  );
};
```

#### Authors note:
I made react-scenograph because I wanted to learn about deploying to NPM. I plan on maintaining and adding to it. If you like it, use it, or found this repo helpful in any way I would greatly appreciate your star. Happy coding!
