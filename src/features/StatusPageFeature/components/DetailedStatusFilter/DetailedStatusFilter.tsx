import React from 'react';
import { Radio } from '@frontend/uikit-rbc/Radio';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';

export const DetailedStatusFilter = () => {
  const moxk = 0;

  return (
    <div className="p-b-24">
      <Radio
        size="md"
        isChecked
        onSelect={() => null}
        className="m-b-8"
      >
        За все время
      </Radio>
      <Radio
        size="md"
        isChecked={false}
        onSelect={() => null}
        className="m-b-8"
      >
        За сегодня
      </Radio>
      <Radio
        size="md"
        isChecked={false}
        onSelect={() => null}
        className="m-b-8"
      >
        <div
          className="flex flex-middle"
          style={{ marginTop: '-8px' }}
        >
          За период
          <InputField
            value="21.01.2023"
            name="answerId-subtitle"
            onChange={() => null}
            size={FormElementSizes.Small}
            type={InputType.Text}
            className="m-x-8"
            style={{ width: '120px' }}
          />
          -
          <InputField
            value="21.01.2023"
            name="answerId-subtitle"
            onChange={() => null}
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
