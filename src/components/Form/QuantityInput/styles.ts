import { styled } from 'styled-components';

export const Container = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseColors.baseButton};
  padding: 0.5rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.productColors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.productColors.purpleDark};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.colors.baseColors.baseTitle};
  }
`;
