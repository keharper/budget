import{c as u}from"./convertCase.js";const g=n=>{const l={};for(const c in n){const i=n[c];!Array.isArray(i)||i.length===0||(c==="custom_attributesV2"?i.forEach(o=>{typeof o=="object"&&"value"in o&&(l[o==null?void 0:o.code]=o==null?void 0:o.value)}):i.length>1?i.forEach((o,f)=>{f===0?l[c]=o:l[`${c}_${f+1}`]=o}):l[c]=i[0])}return l},p=n=>{var l,c,i;return u({firstname:(n==null?void 0:n.firstname)||"",lastname:(n==null?void 0:n.lastname)||"",city:(n==null?void 0:n.city)||"",company:(n==null?void 0:n.company)||"",country_code:(n==null?void 0:n.country_code)||"",region:{region:((l=n==null?void 0:n.region)==null?void 0:l.region)||"",region_code:((c=n==null?void 0:n.region)==null?void 0:c.region_code)||"",region_id:((i=n==null?void 0:n.region)==null?void 0:i.region_id)||""},telephone:(n==null?void 0:n.telephone)||"",id:(n==null?void 0:n.id)||"",vat_id:(n==null?void 0:n.vat_id)||"",postcode:(n==null?void 0:n.postcode)||"",default_shipping:(n==null?void 0:n.default_shipping)||!1,default_billing:(n==null?void 0:n.default_billing)||!1,...g(n)},"camelCase",{})},y=n=>{var c,i;const l=((i=(c=n==null?void 0:n.data)==null?void 0:c.customer)==null?void 0:i.addresses)||[];return l.length?l.map(p).sort((o,f)=>(Number(f.defaultBilling)||Number(f.defaultShipping))-(Number(o.defaultBilling)||Number(o.defaultShipping))):[]};export{y as a,p as t};
