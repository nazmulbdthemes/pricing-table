import { __ } from '@wordpress/i18n';

const borderstyles = [
	{
		label: __('None', 'bdt-pricing-table'),
		value: 'none',
	},
	{
		label: __('Solid', 'bdt-pricing-table'),
		value: 'solid',
	},
	{
		label: __('Dotted', 'bdt-pricing-table'),
		value: 'dotted',
	},
	{
		label: __('Dashed', 'bdt-pricing-table'),
		value: 'dashed',
	},
	{
		label: __('Groove', 'bdt-pricing-table'),
		value: 'groove',
	},
	{
		label: __('Ridge', 'bdt-pricing-table'),
		value: 'ridge',
	},
	{
		label: __('Inset', 'bdt-pricing-table'),
		value: 'inset',
	},
];

export default borderstyles;
