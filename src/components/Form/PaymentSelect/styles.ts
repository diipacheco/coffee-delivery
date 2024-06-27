import { styled } from 'styled-components';

export const Label = styled.label`
  width: 11.125rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseColors.baseButton};
  border: 1px solid transparent;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseColors.baseHover};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors.productColors.purpleLight};
    border-color: ${({ theme }) => theme.colors.productColors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.productColors.purple};
  }

  span {
    font-size: ${({ theme }) => theme.textSizes.buttons.buttonM};
    text-transform: uppercase;
    user-select: none;
  }
`;
