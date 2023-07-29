import React from 'react';
import { Radio } from '@frontend/uikit-rbc/Radio';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { DateRange } from '@features/StatusPageFeature/types';

/**
 * Компонент фильтрации по датам
 * @param props
 * @constructor
 */
export const DetailedStatusFilter: React.FC<{ dateFilterHandler: (value: DateRange) => void }> = (props) => {
  const { dateFilterHandler } = props;
  const [activeButton, setActiveButton] = React.useState<number>(0);
  const [fromDate, setFromDate] = React.useState<string>('01.01.2023');
  const [toDate, setToDate] = React.useState<string>('01.01.2023');

  React.useEffect(() => {
    if (activeButton === 0) {
      dateFilterHandler({ from: new Date(1673384400).valueOf(), to: new Date().valueOf() });
    }

    if (activeButton === 1) {
      const currentDate = new Date().setHours(0, 0, 0, 0);

      dateFilterHandler({
        from: currentDate,
        to: new Date().valueOf(),
      });
    }

    if (activeButton === 2) {
      // Todo: запилить полноценную валидацию
      const fromAsArray = fromDate.split('.');
      const toAsArray = toDate.split('.');

      if (fromAsArray.length !== 3 || toAsArray.length !== 3) {
        return;
      }

      if (fromAsArray[0].length !== 2 || fromAsArray[1].length !== 2 || fromAsArray[2].length !== 4) {
        return;
      }

      if (toAsArray[0].length !== 2 || toAsArray[1].length !== 2 || toAsArray[2].length !== 4) {
        return;
      }

      const fromAsDate = new Date(Number(fromAsArray[2]), Number(fromAsArray[1]) - 1, Number(fromAsArray[0])).valueOf();
      const toAsDate = new Date(Number(toAsArray[2]), Number(toAsArray[1]) - 1, Number(toAsArray[0])).setHours(23, 59, 59, 0).valueOf();

      dateFilterHandler({
        from: fromAsDate,
        to: toAsDate,
      });
    }
  }, [activeButton, fromDate, toDate]);

  return (
    <div className="p-b-24">
      <Radio
        size={FormElementSizes.Medium}
        isChecked={activeButton === 0}
        onSelect={() => setActiveButton(0)}
        className="m-b-8"
      >
        За все время
      </Radio>
      <Radio
        size={FormElementSizes.Medium}
        isChecked={activeButton === 1}
        onSelect={() => setActiveButton(1)}
        className="m-b-8"
      >
        За сегодня
      </Radio>
      <Radio
        size={FormElementSizes.Medium}
        isChecked={activeButton === 2}
        onSelect={() => setActiveButton(2)}
        className="m-b-8"
      >
        <div
          className="flex flex-middle"
          style={{ marginTop: '-8px' }}
        >
          За период
          <InputField
            value={fromDate}
            name="answerId-subtitle"
            onChange={(event) => setFromDate(event.target.value)}
            size={FormElementSizes.Small}
            type={InputType.Text}
            className="m-x-8"
            style={{ width: '120px' }}
          />
          -
          <InputField
            value={toDate}
            name="answerId-subtitle"
            onChange={(event) => setToDate(event.target.value)}
            size={FormElementSizes.Small}
            type={InputType.Text}
            className="m-x-8"
            style={{ width: '120px' }}
          />
        </div>
      </Radio>
    </div>
  );
};
