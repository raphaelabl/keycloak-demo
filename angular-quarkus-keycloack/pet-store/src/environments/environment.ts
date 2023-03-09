export const environment = {
  production: false,
  keycloak: {
    issuer: 'http://localhost:8081/auth/',
    realm: 'petshop-realm',
    clientId: 'petstore-portal'
  }
};
