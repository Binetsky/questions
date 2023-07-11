import React from 'react';
import { Radio } from '@frontend/uikit-rbc/Radio';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';

interface AnswerProps {
  changeLayoutHandler?: () => void;
}

/**
 * Компонент ответа на вопрос
 * @constructor
 */
export const Answer: React.FC<AnswerProps> = () => (
  <>
    <Radio
      size="md"
      onSelect={() => null}
      className="m-b-12"
      isChecked={false}
    >
      Закрытый ответ на вопрос
    </Radio>
    <Radio
      size="md"
      onSelect={() => null}
      className="m-b-12"
      isChecked={false}
    >
      <InputField
        size={FormElementSizes.Small}
        type={InputType.Text}
        name="open-anser"
        value="Развернутый вариант ответа"
        onChange={() => null}
        className="w-100"
        style={{ marginTop: '-8px', minWidth: '320px' }}
      />
    </Radio>
  </>
);
