import { TextInput } from '@mantine/core';

import { useState } from 'react';

export function InputField(props) {
  
  return <>
  <TextInput size="xl" placeholder={props.placeholder} onChange={props.onChange} />
  </>
}