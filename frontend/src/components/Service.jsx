// src/components/Service.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';
import "./service.css"

function Service({ service }) {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => setShowDetails(!showDetails);

	return (
		<div className="service">
			<h2 onClick={toggleDetails}>{service['Service2']}</h2>
			{showDetails && (
				<div className="service-details">
					<p><strong>Description:</strong> {service['Service Description']}</p>
					<p><strong>Type:</strong> {service['Type']}</p>
					<p><strong>Status:</strong> {service['Status']}</p>
					<p><strong>Business Priority:</strong> {service['Business Priority']}</p>
					<p><strong>Service Availability:</strong> {service['Service Availability']}</p>
					<p><strong>Service Charges:</strong> {service['Service Charges']}</p>
					<p><strong>Owner/Team:</strong> {service['Owner/Team']}</p>
					<p><strong>Dependencies:</strong> {service['Dependencies']}</p>
					<p><strong>Links/Info:</strong> {service['Links/Info']}</p>
					<p><strong>Notes:</strong> {service['Notes']}</p>
				</div>
			)}
		</div>
	);
}

Service.propTypes = {
	service: PropTypes.shape({
		Service2: PropTypes.string,
		'Service Description': PropTypes.string,

		Type: PropTypes.string,
		Status: PropTypes.string,
		'Business Priority': PropTypes.string,
		'Service Availability': PropTypes.string,
		'Service Charges': PropTypes.string,
		'Owner/Team': PropTypes.string,
		Dependencies: PropTypes.string,
		'Links/Info': PropTypes.string,
		Notes: PropTypes.string
	}).isRequired
};

export default Service;
