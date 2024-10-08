import { Alert, Button } from '@mantine/core';

export function SubmitButton(props) {
  return <Button fullWidth onClick={props.onSubmit}>Shorten URL</Button>;
}