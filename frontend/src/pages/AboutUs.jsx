export default function AboutUs() {
	const styles = {
		container: {
			width: "100%",
		},
		table: {
			fontFamily: "arial, sans-serif",
			borderCollapse: "collapse",
			width: "100%",
		},
		th: {
			border: "1px solid #dddddd",
			textAlign: "left",
			backgroundColor: "#26374a",
			color: "#f1f2f3",
			padding: "8px",
		},
		td: {
			border: "1px solid #dddddd",
			textAlign: "left",
			padding: "8px",
		},
		trEven: {
			backgroundColor: "#dddddd",
		},
		img: {
			width: "100%",
		},
	}

	const teamMembers = [
		{ name: "Sebastien Durand", title: "Director", email: "sebastien.durand2@hc-sc.gc.ca" },
		{ name: "Micheal Williamson", title: "Manager of Cloud Service and Interoperability (CSI)", email: "michael.williamson@hc-sc.gc.ca" },
		{ name: "Andrew Nice", title: "Manager of Epi Science Solutions (ESS)", email: "andrew.nice@hc-sc.gc.ca" },
		{ name: "Contact Us", title: "Contact Us", email: "dmia-de-corr-corr_gdia_ad@phac-aspc.gc.ca" },
	]

	return (
		<div style={styles.container}>
			<h1>About Us</h1>
			<section>
				<table style={styles.table}>
					<thead>
						<tr>
							<th style={styles.th}>Name</th>
							<th style={styles.th}>Title</th>
							<th style={styles.th}>Email</th>
						</tr>
					</thead>
					<tbody>
						{teamMembers.map((member, index) => (
							<tr key={member.name} style={index % 2 === 0 ? styles.trEven : null}>
								<td style={styles.td}>{member.name}</td>
								<td style={styles.td}>{member.title}</td>
								<td style={styles.td}>
									<a href={`mailto:${member.email}`}>{member.email}</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
			<section>
				<a href="/orgChart.png" target="_blank" rel="noopener noreferrer">
					<img src="/orgChart.png" alt="org chart" style={styles.img} />
				</a>
			</section>
		</div>
	)
}
