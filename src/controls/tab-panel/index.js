/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Tab Panel Control
 */

const TabPanelControl = ({ normalComponents, hoverComponents }) => {
	return (
		<TabPanel
			className="bdt-tab-panel"
			activeClass="active-tab"
			initialTabName="bdt_pricing_content"
			tabs={[
				{
					name: 'bdt_pricing_content',
					title: __('Content', 'bdt-pricing-table'),
					className: 'bdt-tab bdt-general',
				},
				{
					name: 'bdt_pricing_style',
					title: __('Style', 'bdt-pricing-table'),
					className: 'bdt-tab bdt-style',
				},
			]}
		>
			{(tabContent) => {
				if (tabContent.name === 'bdt_pricing_content') {
					return <Fragment>{normalComponents}</Fragment>;
				} else if (tabContent.name === 'bdt_pricing_style') {
					return <Fragment>{hoverComponents}</Fragment>;
				}
			}}
		</TabPanel>
	);
};

export default TabPanelControl;
