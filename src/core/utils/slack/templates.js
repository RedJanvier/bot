export const hobbyJsonBlock = {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'What are your favorite hobbies?',
      },
      accessory: {
        type: 'checkboxes',
        options: [
          {
            text: {
              type: 'mrkdwn',
              text: 'Football',
            },
            value: 'football',
          },
          {
            text: {
              type: 'mrkdwn',
              text: 'Music',
            },
            value: 'music',
          },
          {
            text: {
              type: 'mrkdwn',
              text: 'Sleep',
            },
            value: 'sleep',
          },
          {
            text: {
              type: 'mrkdwn',
              text: 'Movies',
            },
            value: 'movies',
          },
          {
            text: {
              type: 'mrkdwn',
              text: 'Basketball',
            },
            value: 'basketball',
          },
        ],
        action_id: 'hobby-select-one',
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Submit',
            emoji: true,
          },
          value: 'hobby-select',
          action_id: 'hobby-select',
        },
      ],
    },
  ],
};

const res = {
  type: 'view_submission',
  team: { id: 'T01ADN1GHGA', domain: 'uzakura-pgp7350' },
  user: {
    id: 'U01D7PZ41DG',
    username: 'janvierntwali',
    name: 'janvierntwali',
    team_id: 'T01ADN1GHGA',
  },
  api_app_id: 'A01SPU9CTJQ',
  token: 'iQzBskKjPZRZni05HAKkyc0V',
  trigger_id: '1921789009571.1353749561554.62089f3cceb880d8194c7b8e2d042b72',
  view: {
    id: 'V01SWNEHA86',
    team_id: 'T01ADN1GHGA',
    type: 'modal',
    blocks: [
      {
        type: 'section',
        block_id: 'QAw',
        text: {
          type: 'mrkdwn',
          text: 'What are the first 3 digits on the number scale?',
          verbatim: false,
        },
      },
      {
        type: 'input',
        block_id: 'cute_animal_name_block',
        label: { type: 'plain_text', text: 'First 3 digits: ', emoji: true },
        optional: false,
        dispatch_action: false,
        element: {
          type: 'plain_text_input',
          action_id: 'cute_animal_name_element',
          dispatch_action_config: { trigger_actions_on: ['on_enter_pressed'] },
        },
      },
    ],
    private_metadata: '',
    callback_id: 'digits-on-scale',
    state: {
      values: {
        cute_animal_name_block: {
          cute_animal_name_element: { type: 'plain_text_input', value: '423' },
        },
      },
    },
    hash: '1617301122.er5HpBZJ',
    title: { type: 'plain_text', text: 'Bot', emoji: true },
    clear_on_close: false,
    notify_on_close: false,
    close: { type: 'plain_text', text: 'Cancel', emoji: true },
    submit: { type: 'plain_text', text: 'Done', emoji: true },
    previous_view_id: null,
    root_view_id: 'V01SWNEHA86',
    app_id: 'A01SPU9CTJQ',
    external_id: '',
    app_installed_team_id: 'T01ADN1GHGA',
    bot_id: 'B01SWD8N509',
  },
  response_urls: [],
  is_enterprise_install: false,
  enterprise: null,
};

export const messageJsonBlock = {
  text: 'Welcome, How are you doing?',
  fallback: 'Upgrade your Slack client to use messages like these.',
  color: '#3AA3E3',
  attachment_type: 'default',
  callback_id: 'subjects',
  actions: [
    {
      name: 'mood',
      text: 'Select one mood',
      type: 'select',
      options: [
        {
          text: 'Doing Well',
          value: 'doing_well',
        },
        {
          text: 'Neutral',
          value: 'neutral',
        },
        {
          text: 'Feeling Lucky',
          value: 'feeling_lucky',
        },
      ],
    },
  ],
};

export const timeJsonBlock = {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'When are you free this week for a walk?',
      },
      accessory: {
        type: 'timepicker',
        initial_time: '12:00',
        placeholder: {
          type: 'plain_text',
          text: 'Select time',
          emoji: true,
        },
        action_id: 'free-time',
      },
    },
  ],
};

export const modalJsonBlock = {
  type: 'modal',
  callback_id: 'digits-on-scale', // We need to add this
  title: {
    type: 'plain_text',
    text: 'Bot',
    emoji: true,
  },
  submit: {
    type: 'plain_text',
    text: 'Done',
    emoji: true,
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
    emoji: true,
  },
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'What are the first 3 digits on the number scale?',
      },
    },
    {
      type: 'input',
      block_id: 'digits', // put this here to identify the input.
      element: {
        type: 'plain_text_input',
        action_id: '3_digits', // put this here to identify the selection element
      },
      label: {
        type: 'plain_text',
        text: 'First 3 digits: ',
        emoji: true,
      },
    },
  ],
};
