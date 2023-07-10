/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		uniqueId,
		style,
		pricingPlan,
		titleTag,
		showBadge,
		badgeText,
		price,
		userCount,
		duration,
		buttonLink,
		buttonText,
		newTab,
		featureTitle,
		featureSubTitle,
		textValues,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${uniqueId} ${style}`,
			})}
		>
			<div className="bdt-container">
				<div className="bdt-item">
					<div className="bdt-head-content">
						<RichText.Content
							tagName={titleTag}
							className="bdt-package-title"
							value={pricingPlan}
						/>
						{showBadge && (
							<div className="bdt-popular-btn">{badgeText}</div>
						)}
						<div className="bdt-price-info">
							<div className="bdt-price">{price}</div>
							<div className="bdt-user-month">
								<span className="bdt-user-text">
									{userCount}
								</span>
								<span className="bdt-time-text">
									{duration}
								</span>
							</div>
						</div>
						<div className="bdt-link-btn">
							<a
								className="bdt-buy-btn"
								href={buttonLink}
								target={newTab && '_blank'}
								rel={
									newTab ? 'noopener noreferrer' : 'noopener'
								}
							>
								{buttonText}
							</a>
						</div>
					</div>
					<div className="bdt-features-info">
						<div className="bdt-features-title">{featureTitle}</div>
						<div className="bdt-features-desc">
							{featureSubTitle}
						</div>

						<ul className="features">
							{textValues &&
								textValues.map((value, index) => (
									<li key={index}>
										<>
											<span
												key={index}
												className="bdt-check-icon"
											>
												&#10003;
											</span>
											<span key={index}>{value}</span>
										</>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
