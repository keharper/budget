import{jsx as t,jsxs as O,Fragment as f}from"@dropins/tools/preact-jsx-runtime.js";import{Card as E,Header as v,Button as p}from"@dropins/tools/components.js";import"../chunks/CustomerDetailsContent.js";import{Slot as g,classes as m}from"@dropins/tools/lib.js";import{useState as C,useEffect as N}from"@dropins/tools/preact-hooks.js";import{useMemo as w}from"@dropins/tools/preact-compat.js";import{useText as l}from"@dropins/tools/i18n.js";import{C as y}from"../chunks/OrderLoaders.js";import{events as A}from"@dropins/tools/event-bus.js";const h={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived"},_=({slots:r,title:a,status:n,orderData:e})=>{var s;const c=String(n).toLocaleLowerCase(),d=l(`Order.OrderStatusContent.${h[c]}.title`),o=l(`Order.OrderStatusContent.${h[c]}.message`);return n?O(E,{className:"dropin-order-status-content",variant:"secondary",children:[t(v,{title:a??d.title}),O("div",{className:"dropin-order-status-content__wrapper",children:[t("div",{className:"dropin-order-status-content__wrapper-description",children:t("p",{children:(s=o.message)==null?void 0:s.replace("{DATE}","01.01.1900")})}),t(T,{orderData:e,slots:r})]})]}):t("div",{})};var i=(r=>(r.CANCEL="CANCEL",r.RETURN="RETURN",r.REORDER="REORDER",r))(i||{});const T=({className:r,children:a,orderData:n,slots:e,...c})=>{const d=l({cancel:"Order.OrderStatusContent.actions.cancel",return:"Order.OrderStatusContent.actions.return",reorder:"Order.OrderStatusContent.actions.reorder"}),o=w(()=>{const s=n==null?void 0:n.availableActions,R=!!(s!=null&&s.length);return t(f,{children:e!=null&&e.OrderActions?t(g,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:e==null?void 0:e.OrderActions,context:n}):t("div",{"data-testid":"availableActionsList",className:m(["dropin-order-actions__wrapper",["dropin-order-actions__wrapper--empty",!R]]),children:s==null?void 0:s.map((S,u)=>{switch(S){case i.CANCEL:return t(p,{variant:"secondary",children:d.cancel},u);case i.RETURN:return t(p,{variant:"secondary",children:d.return},u);case i.REORDER:return t(p,{variant:"secondary",children:d.reorder},u)}})})})},[n,e==null?void 0:e.OrderActions,d]);return t("div",{...c,className:m(["dropin-order-actions",r]),children:o})},L=({orderData:r})=>{const[a,n]=C(r),[e,c]=C(r==null?void 0:r.status);return N(()=>{const d=A.on("order/data",o=>{n(o),c(o.status)},{eager:!0});return()=>{d==null||d.off()}},[]),{orderStatus:e,order:a}},k=({slots:r,orderData:a,className:n,statusTitle:e,status:c})=>{const{orderStatus:d,order:o}=L({orderData:a});return t("div",{className:m(["dropin-order-status",n]),children:o?t(_,{title:e,status:c||d,slots:r,orderData:o}):t(y,{withCard:!1})})};export{k as OrderStatus,k as default};
