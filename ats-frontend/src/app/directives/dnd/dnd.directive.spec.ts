import { DndDirective } from './dnd.directive';

describe('DndDirective', () => {
  it('use for drag and drop file', () => {
    const directive = new DndDirective();
    expect(directive).toBeTruthy();
  });
});
