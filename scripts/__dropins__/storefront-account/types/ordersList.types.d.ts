import { SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';
import { OrderDetails } from '../data/models';

export interface OrdersListActionContext {
    orderHistoryListItem: OrderDetails;
}
export interface OrdersListCardContext {
    orderHistoryListItem: OrderDetails;
}
export interface OrdersListProps extends HTMLAttributes<HTMLDivElement> {
    minifiedView?: boolean;
    withHeader?: boolean;
    withThumbnails?: boolean;
    slots?: {
        OrdersListAction?: SlotProps<OrdersListActionContext>;
        OrdersListCard?: SlotProps<OrdersListCardContext>;
    };
    routeOrdersList?: () => string;
    routeOrderDetails?: () => string;
    withFilter?: boolean;
    ordersInMinifiedView?: 1 | 2 | 3;
    pageSize: number;
}
export interface OrdersListWrapperProps extends OrdersListProps {
}
export interface OrdersListCardProps extends HTMLAttributes<HTMLDivElement> {
    minifiedView: boolean;
    item: OrderDetails;
    withThumbnails: boolean;
    slots?: {
        OrdersListCard?: SlotProps<OrdersListCardContext>;
    };
}
export interface OrdersListActionProps {
    minifiedView: boolean;
    orderNumber?: string;
    orderToken?: string;
    routeOrdersList?: () => string;
    routeOrderDetails?: (orderNumber?: string, orderToken?: string) => string;
}
export interface useOrdersListProps {
    minifiedView?: boolean;
    pageSize: number;
    ordersInMinifiedView: number;
    selectedDate: string;
}
//# sourceMappingURL=ordersList.types.d.ts.map