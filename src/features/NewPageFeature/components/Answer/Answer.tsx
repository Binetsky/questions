import styles from '@features/NewPageFeature/styles.module.scss';
import { DropdownSelect } from '@frontend/uikit-rbc/DropdownSelect';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import React from 'react';

export const Answer = () => {
  const mock = 0;

  return (
    <div className={`${styles.answer} m-b-24`}>
      <div className="headline-5">Ответ 1</div>
      <div className="caption-2 p-b-8">answerId: asfdlkfn</div>
      <div className="flex flex-middle">
        <DropdownSelect
          onChange={() => null}
          options={[
            { name: 'Закрытый ответ', value: 'closed' },
            { name: 'Открытый ответ', value: 'open' },
          ]}
          value={{ name: 'Закрытый ответ', value: 'closed' }}
          theme="linear"
          placeholder="Тип ответа"
          className="w-20 m-r-12"
        />
        <InputField
          value="Ответ"
          name="answerId-subtitle"
          onChange={() => null}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          isDisabled
        />
      </div>
    </div>
  );
};
