import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme.colors.baseColors.baseButton};
  background-color: ${({ theme }) => theme.colors.baseColors.baseInput};
  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors.productColors.yellowDark};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors.baseColors.baseButton};
  }

  input {
    color: ${({ theme }) => theme.colors.baseColors.baseText};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.baseColors.baseLabel};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.baseColors.baseLabel};
    padding-right: 0.75rem;
    font-size: ${({ theme }) => theme.textSizes.texts.textXS};
    font-style: italic;
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.textSizes.texts.textXS};
  font-weight: 400;
  color: red;
`;
