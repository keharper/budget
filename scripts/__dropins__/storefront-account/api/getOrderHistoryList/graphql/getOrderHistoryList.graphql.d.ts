export declare const GET_CUSTOMER_ORDERS_LIST = "\n  query GET_CUSTOMER_ORDERS_LIST($pageSize: Int, $filter: CustomerOrdersFilterInput, $sort: CustomerOrderSortInput) {\n  customer {\n    orders(pageSize: $pageSize, filter: $filter, sort: $sort) {\n      page_info {\n        page_size\n        total_pages\n        current_page\n      }\n      date_of_first_order\n      total_count\n      items {\n        token\n        email\n        shipping_method\n        shipping_address {\n          firstname\n          lastname\n          postcode\n          street\n          region\n          city\n          country_code\n          region_id\n        }\n        billing_address {\n          firstname\n          lastname\n          postcode\n          street\n          region\n          city\n          country_code\n          region_id\n        }\n        payment_methods {\n          name\n        }\n        number\n        id\n        order_date\n        carrier\n        status\n        items {\n          status\n          product_name\n          id\n          product {\n          small_image {\n              url\n            }\n          }\n        }\n        total {\n          grand_total {\n            value\n            currency\n          }\n          subtotal {\n            currency\n            value\n          }\n          taxes {\n            amount {\n              currency\n              value\n            }\n            rate\n            title\n          }\n          total_tax {\n            currency\n            value\n          }\n          total_shipping {\n            currency\n            value\n          }\n          discounts {\n            amount {\n              currency\n              value\n            }\n            label\n          }\n        }\n      }\n    }\n  }\n}\n";
//# sourceMappingURL=getOrderHistoryList.graphql.d.ts.map