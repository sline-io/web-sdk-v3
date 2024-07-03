# Sline Web SDK V3 - Documentation

## Démarrage rapide

### Installation

Rajoutez les balises suivantes à la fin de la section `<head>` de votre page :

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/sline-io/web-sdk-v3@latest/dist/sline.css"
/>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/sline-io/web-sdk-v3@latest/dist/sline.umd.js"
></script>
```

### Initialisation

Dans le code JavaScript de votre application, initialisez le SDK avec vos informations :

```js
Sline.initialize({
  clientId: "{{ YOUR_CLIENT_ID }}",
  clientSecret: "{{ YOUR_CLIENT_SECRET}}",
  test: true, // retirer ce paramètre si vous êtes en production
});
```

### Ajout d'un badge Sline

Si vous souhaiter ajouter un badge de checkout Sline dans votre page, dans le conteneur `#container` :

```html
<div id="container"></div>
```

Utiliser la méthode `addCheckoutBadge` comme cela :

```js
Sline.addCheckoutBadge("container", {
  lineItems: [
    {
      name: "Macbook Pro",
      item_type: "physical",
      unit_price: 129900,
      quantity: 1,
      rent: true,
    },
  ],
});
```

Ainsi, un badge se chargera en fonction des line items que vous avez fourni.

![badge](./badge.png)

### Modifier des informations

Vous pouvez ajouter des informations sur le client :

```js
Sline.setCustomer({
  gender: "male",
  first_name: "Prénom",
  last_name: "Nom de famille",
  email: "email@domain.com",
  phone: "+336000000000",
  date_of_birth: "1990-01-01",
  customer_type: "person",
});
```

Vous pouvez ajouter des informations de livraison :

```js
Sline.setShippingAddress({
  street_address: "..",
  street_address_2: "...",
  zip_code: "...",
  city: "...",
  region: "...",
  country: "...",
});
```

Vous pouvez ajouter des informations de facturation :

```js
Sline.setBillingAddress({
  street_address: "..",
  street_address_2: "...",
  zip_code: "...",
  city: "...",
  region: "...",
  country: "...",
});
```

## References

**🚧 WIP**
