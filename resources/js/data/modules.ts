import {
    BarChart3,
    Boxes,
    Factory,
    Landmark,
    ShoppingCart,
    Truck,
    Users,
    Warehouse,
    Wrench,
} from 'lucide-react';

import type { ErpModule } from '@/types/website';

export const ERP_MODULES: ErpModule[] = [
    {
        slug: 'hr-payroll',
        title: 'HR & Payroll',
        summary: 'Manage employees, attendance, payroll, and compliance in one place.',
        icon: Users,
        keyFeatures: ['Employee records', 'Payroll processing', 'Leave management', 'Compliance reporting'],
    },
    {
        slug: 'inventory',
        title: 'Inventory',
        summary: 'Track stock levels, warehouses, and replenishment across locations.',
        icon: Warehouse,
        keyFeatures: ['Stock tracking', 'Warehouse management', 'Reorder alerts', 'Inventory valuation'],
    },
    {
        slug: 'procurement',
        title: 'Procurement',
        summary: 'Streamline purchasing workflows from requisition to payment.',
        icon: ShoppingCart,
        keyFeatures: ['Purchase requisitions', 'Vendor management', 'Purchase orders', 'Goods receipt'],
    },
    {
        slug: 'sales-crm',
        title: 'Sales & CRM',
        summary: 'Grow revenue with pipeline visibility and customer relationship tools.',
        icon: Boxes,
        keyFeatures: ['Lead tracking', 'Opportunity pipeline', 'Quotes & orders', 'Customer history'],
    },
    {
        slug: 'finance',
        title: 'Finance',
        summary: 'Control ledgers, payables, receivables, and financial reporting.',
        icon: Landmark,
        keyFeatures: ['General ledger', 'Accounts payable', 'Accounts receivable', 'Financial statements'],
    },
    {
        slug: 'manufacturing',
        title: 'Manufacturing',
        summary: 'Plan production, bills of materials, and shop floor operations.',
        icon: Factory,
        keyFeatures: ['Production planning', 'BOM management', 'Work orders', 'Quality checks'],
    },
    {
        slug: 'asset-management',
        title: 'Asset Management',
        summary: 'Monitor fixed assets, depreciation, and maintenance schedules.',
        icon: Wrench,
        keyFeatures: ['Asset registry', 'Depreciation', 'Maintenance plans', 'Lifecycle tracking'],
    },
    {
        slug: 'reports-analytics',
        title: 'Reports & Analytics',
        summary: 'Turn operational data into dashboards and actionable insights.',
        icon: BarChart3,
        keyFeatures: ['Custom reports', 'KPI dashboards', 'Scheduled exports', 'Role-based views'],
    },
    {
        slug: 'trucking-distribution',
        title: 'Trucking & Distribution',
        summary: 'Coordinate fleets, routes, deliveries, and distribution logistics.',
        icon: Truck,
        keyFeatures: ['Route planning', 'Dispatch', 'Delivery tracking', 'Fleet utilization'],
    },
];

export function getModuleBySlug(slug: string): ErpModule | undefined {
    return ERP_MODULES.find((module) => module.slug === slug);
}
