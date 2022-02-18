import readme from './readme.md';

export default {
  title: 'Component/Dropdown',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    notes: readme,
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['large', 'small', 'medium'],
      },
      defaultValue: 'large',
      description: 'Size of the dropdown',
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      defaultValue: 'Select option',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      name: 'Label',
      type: 'string',
      defaultValue: 'Label text',
      description: 'Label text explains about dropdown',
    },
    labelPosition: {
      name: 'Label position',
      control: {
        type: 'radio',
        options: ['no-label', 'inside', 'outside'],
      },
      defaultValue: 'no-label',
      description: 'Label text position',
    },
    state: {
      name: 'Error',
      control: {
        type: 'boolean',
        options: ['default', 'error'],
      },
      defaultValue: 'default',
      description: 'Support error state',
    },
    helper: {
      name: 'Helper text',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    defaultOption: {
      name: 'Default option',
      control: {
        type: 'select',
        options: ['no-default', 'option-1', 'option-2', 'option-3'],
      },
    },
    width: {
      name: 'Width',
      control: {
        type: 'range',
        min: 200,
        max: 600,
        step: 50,
      },
      defaultValue: 250,
    },
  },
};

const Template = ({
  size,
  type,
  label,
  disabled = false,
  labelPosition,
  helper = '',
  state = 'default',
  placeholder,
  defaultOption,
  width,
}) => `
  <sdds-theme></sdds-theme>
    <div style="width:${width}px">
        <sdds-dropdown 
          size="${size}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosition}"
          label="${label}"
          helper="${helper}"
          state="${state}"
          type="${type}"
          default-option="${defaultOption}">
          <sdds-dropdown-option value="option-1">Stockhol & Stockholm</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2">Hello 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
  `;

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  defaultOption: 'option-1',
};

export const LabelInside = Template.bind({});
LabelInside.args = {
  disabled: false,
  labelPosition: 'inside',
  label: 'Label text',
};

export const LabelOutside = Template.bind({});
LabelOutside.args = {
  disabled: false,
  labelPosition: 'outside',
  label: 'Label text',
};

export const Helper = Template.bind({});
Helper.args = {
  disabled: false,
  helper: 'Helper text',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  helper: 'Error message',
};

const FilterTemplate = ({
  size,
  disabled = false,
  helper = '',
  placeholder,
  defaultOption,
  width,
}) => `
    <sdds-theme></sdds-theme>
    <div style="width:${width}px">
        <sdds-dropdown-filter
        size="${size}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        helper="${helper}"
        default-option="${defaultOption}"
        data='[{"value":"option-1","label":"Jakarta"},{"value":"option-2","label":"Stockholm"},{"value":"option-3","label":"Barcelona"}]'
        ></sdds-dropdown-filter>
      </div>
  `;

export const Filter = FilterTemplate.bind({});
Filter.args = {};
Filter.argTypes = {
  labelPosition: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
  state: {
    table: {
      disable: true,
    },
  },
};

const NativeTemplate = ({
  size,
  helper = 'Helper text',
  label,
  state,
  width,
}) => `
  <sdds-theme></sdds-theme>
    <div style="width:${width}px">
        <div class="sdds-dropdown ${
          size !== 'large' ? `sdds-dropdown-${size}` : ''
        } ${state === 'error' ? 'sdds-dropdown--error' : ''}" >
          <span class="sdds-dropdown-label-outside">${label}</span>
          <select name="nativeDropdown" id="mySelect">
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
            <option value="car">Car</option>
          </select>
          <span class="sdds-dropdown-helper">${helper}</span>
        </div>
      </div>
  `;

export const NativeSelect = NativeTemplate.bind({});
NativeSelect.args = {};
NativeSelect.argTypes = {
  labelPosition: {
    table: {
      disable: true,
    },
  },
  placeholder: {
    table: {
      disable: true,
    },
  },
  defaultOption: {
    table: {
      disable: true,
    },
  },
};
