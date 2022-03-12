import renderer from 'react-test-renderer';

const matches = (children) => expect(
  renderer.create(children).toJSON(),
).toMatchSnapshot();

export default matches;
