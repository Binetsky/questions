import { UserDeviceType } from '../constants';
import { detectDevice } from '../detectDevice';

// Todo: нельзя протестировать стили, которые указаны в public/life/components/detect-device/_engine.scss
//  (через import '../public/life/index.scss';), нужно разобраться
describe('detectDevice test suite', () => {
  it('Возвращает мобильное устройство', () => {
    Object.defineProperty(document.body, 'clientWidth', {
      value: 300, configurable: true,
    });

    expect(detectDevice()).toBe(UserDeviceType.Mobile);
  });
});
