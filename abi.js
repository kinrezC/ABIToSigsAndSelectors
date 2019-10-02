module.exports = [
  {
    'constant': false,
    'inputs': [
      {
        'name': '_time',
        'type': 'uint256',
      },
    ],
    'name': 'setCurrentTime',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getCurrentTime',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'marginCurrencyWhitelist',
    'outputs': [
      {
        'name': '',
        'type': 'address',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'isTest',
    'outputs': [
      {
        'name': '',
        'type': 'bool',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'returnCalculatorWhitelist',
    'outputs': [
      {
        'name': '',
        'type': 'address',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'name': '_finderAddress',
        'type': 'address',
      },
      {
        'name': '_returnCalculatorWhitelist',
        'type': 'address',
      },
      {
        'name': '_marginCurrencyWhitelist',
        'type': 'address',
      },
      {
        'name': '_isTest',
        'type': 'bool',
      },
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'contractAddress',
        'type': 'address',
      },
    ],
    'name': 'CreatedTokenizedDerivative',
    'type': 'event',
  },
  {
    'constant': false,
    'inputs': [
      {
        'components': [
          {
            'name': 'defaultPenalty',
            'type': 'uint256',
          },
          {
            'name': 'supportedMove',
            'type': 'uint256',
          },
          {
            'name': 'product',
            'type': 'bytes32',
          },
          {
            'name': 'fixedYearlyFee',
            'type': 'uint256',
          },
          {
            'name': 'disputeDeposit',
            'type': 'uint256',
          },
          {
            'name': 'returnCalculator',
            'type': 'address',
          },
          {
            'name': 'startingTokenPrice',
            'type': 'uint256',
          },
          {
            'name': 'expiry',
            'type': 'uint256',
          },
          {
            'name': 'marginCurrency',
            'type': 'address',
          },
          {
            'name': 'withdrawLimit',
            'type': 'uint256',
          },
          {
            'name': 'returnType',
            'type': 'uint8',
          },
          {
            'name': 'startingUnderlyingPrice',
            'type': 'uint256',
          },
          {
            'name': 'name',
            'type': 'string',
          },
          {
            'name': 'symbol',
            'type': 'string',
          },
        ],
        'name': 'params',
        'type': 'tuple',
      },
    ],
    'name': 'createTokenizedDerivative',
    'outputs': [
      {
        'name': 'derivativeAddress',
        'type': 'address',
      },
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
];
