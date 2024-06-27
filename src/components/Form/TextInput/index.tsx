/* eslint-disable react/display-name */
import { FieldError } from 'react-hook-form';

import { HTMLAttributes, InputHTMLAttributes, forwardRef, FocusEvent, useState, LegacyRef } from 'react';
import { Container, ErrorMessage, Label } from './styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
}

export const TextInput = forwardRef(
  ({ optional, error, containerProps, onFocus, onBlur, ...rest }: TextInputProps, ref: LegacyRef<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
      setIsFocused(true);
      onFocus?.(event);
    }

    function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
      setIsFocused(false);
      onBlur?.(event);
    }

    return (
      <Container {...containerProps}>
        <Label data-state={isFocused ? 'focused' : 'blurred'}>
          <input type="text" onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...rest} />

          {optional ? <span>Opcional</span> : null}
        </Label>

        {error?.message ? <ErrorMessage role="alert">{error.message}</ErrorMessage> : null}
      </Container>
    );
  },
);
