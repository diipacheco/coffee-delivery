import { MapPin } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';

import { TextInput } from '../../../../components/Form/TextInput';

import { AddressHeading, FormContainer, InputsContainer } from './styles';

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormContainer>
      <AddressHeading>
        <MapPin size={22} />
        <div>
          <span>Endereço de Entrega</span>

          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </AddressHeading>

      <InputsContainer>
        <TextInput
          placeholder="CEP"
          mask="cep"
          type="string"
          containerProps={{ style: { gridArea: 'cep' } }}
          error={errors.cep}
          {...register('cep')}
        />
        <TextInput
          placeholder="Rua"
          containerProps={{ style: { gridArea: 'street' } }}
          error={errors.street}
          {...register('street')}
        />

        <TextInput
          placeholder="Número"
          containerProps={{ style: { gridArea: 'number' } }}
          error={errors.number}
          {...register('number')}
        />

        <TextInput
          placeholder="Complemento"
          optional
          containerProps={{ style: { gridArea: 'fullAddress' } }}
          error={errors.fullAddress}
          {...register('fullAddress')}
        />

        <TextInput
          placeholder="Bairro"
          containerProps={{ style: { gridArea: 'neighborhood' } }}
          error={errors.neighborhood}
          {...register('neighborhood')}
        />

        <TextInput
          placeholder="Cidade"
          containerProps={{ style: { gridArea: 'city' } }}
          error={errors.city}
          {...register('city')}
        />

        <TextInput
          placeholder="UF"
          maxLength={2}
          containerProps={{ style: { gridArea: 'state' } }}
          error={errors.state}
          {...register('state')}
        />
      </InputsContainer>
    </FormContainer>
  );
}
