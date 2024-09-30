/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { Addresses } from '@dropins/storefront-account/containers/Addresses.js';
import { render as accountRenderer } from '@dropins/storefront-account/render.js';
import { getCookie } from '../../scripts/configs.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  const {
    'minified-view': minifiedViewConfig = 'false',
  } = readBlockConfig(block);

  if (!isAuthenticated) {
    window.location.href = '/customer/login';
  } else {
    await accountRenderer.render(Addresses, {
      minifiedView: minifiedViewConfig === 'true',
      withActionsInMinifiedView: false,
      withActionsInFullSizeView: true,
      routeAddressesPage: () => '/customer/address',
    })(block);
  }
}
