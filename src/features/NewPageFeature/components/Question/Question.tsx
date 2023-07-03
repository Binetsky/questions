import styles from '@features/NewPageFeature/styles.module.scss';
import React from 'react';
import { Answer } from '@features/NewPageFeature/components/Answer';
import { Title } from '@features/NewPageFeature/components/Title';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';

export const Question = () => {
  const mock = 0;

  return (
    <div className={`${styles.question} m-b-24`}>
      <Title />

      <div className="flex flex-middle p-b-12">
        <div className="m-r-12">Минимум возможных ответов</div>
        <InputField
          value="1"
          name="answerId-subtitle"
          onChange={() => null}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
        />
      </div>

      <div className="flex flex-middle p-b-24">
        <div className="m-r-12">Максимум возможных ответов</div>
        <InputField
          value="99"
          name="answerId-subtitle"
          onChange={() => null}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
        />
      </div>

      <Answer />

      <button type="button" className="button md tertiary">+ Вариант ответа</button>
    </div>
  );
};
