import { MyDecoratorPipe } from './my-decorator.pipe';

describe('MyDecoratorPipe', () => {
  it('create an instance', () => {
    const pipe = new MyDecoratorPipe();
    expect(pipe).toBeTruthy();
  });
});
