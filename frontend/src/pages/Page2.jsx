import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Service from '../components/Service';
import ExcelJS from 'exceljs';

function Page2() {
	const { t } = useTranslation();
	const [services, setServices] = useState([]);

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch('/services1.xlsx'); // Adjust path if needed
				const blob = await response.blob();
				const arrayBuffer = await blob.arrayBuffer();

				// Read the Excel file
				const workbook = new ExcelJS.Workbook();
				await workbook.xlsx.load(arrayBuffer);

				// Assuming the first sheet
				const worksheet = workbook.worksheets[0];
				const jsonData = worksheetToJson(worksheet);
				const groupedServices = groupByService2(jsonData);

				setServices(groupedServices);
				console.log(groupedServices); // For debugging
			} catch (error) {
				console.error('Error fetching or processing the Excel file:', error);
			}
		};

		fetchServices().catch(console.error);
	}, []);

	const worksheetToJson = (worksheet) => {
		const rows = [];
		const headers = [];

		// Get headers from the first row
		worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell, colNumber) => {
			headers[colNumber] = cell.value ? String(cell.value) : ''; // Ensure header is a string
		});

		// Get data from the rest of the rows
		worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
			if (rowNumber > 2) { // Skip the header row
				const rowData = {};
				row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
					// Ensure each cell value is a string or empty string
					rowData[headers[colNumber]] = cell.value ? String(cell.value) : '';
				});
				rows.push(rowData);
			}
		});
		
		return rows;
	};

	const groupByService2 = (data) => {
		const grouped = {};

		data.forEach(item => {
			const key = item['Service2'];
			if (!grouped[key]) {
				grouped[key] = { ...item };
			} else {
				Object.keys(item).forEach(field => {
					if (item[field] && !grouped[key][field]) {
						grouped[key][field] = item[field];
					}
				});
			}
		});

		return Object.values(grouped);
	};

	return (
		<>
			<h1>{t("page2.title")}</h1>
			<p>{t("page2.welcome")}</p>
			<ServiceList services={services} />
		</>
	);
}

function ServiceList({ services }) {
	return (
		<div>
			{services.map((service, index) => (
				<Service key={index} service={service} />
			))}
		</div>
	);
}

ServiceList.propTypes = {
	services: PropTypes.arrayOf(
		PropTypes.shape({
			Service2: PropTypes.string,
			'Short Description': PropTypes.string,
			'Long Description': PropTypes.string,
			Type: PropTypes.string,
			Status: PropTypes.string,
			'Business Priority': PropTypes.string,
			'Service Availability': PropTypes.string,
			'Service Charges': PropTypes.string,
			'Owner/Team': PropTypes.string,
			Dependencies: PropTypes.string,
			'Links/Info': PropTypes.string,
			Notes: PropTypes.string
		})
	).isRequired
};

export default Page2;
