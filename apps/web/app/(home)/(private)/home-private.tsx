import { HeaderPrivate } from '@components/header';

import { Support } from '../(public)/containers/support';
import { ButtonsMenu } from './containers/buttons-menu';
import { CarousselPrivate } from './containers/caroussel-private';
import { Promotions } from './containers/promotions';
import { ShareForm } from './containers/share-form';

export function HomePrivate() {
  return (
    <>
      <HeaderPrivate />

      <CarousselPrivate />

      <ButtonsMenu />

      <Promotions />

      <Support />

      <ShareForm />
    </>
  );
}
