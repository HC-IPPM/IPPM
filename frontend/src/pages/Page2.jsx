
import { useTranslation } from 'react-i18next';


function Page2() {
	const { t } = useTranslation();
	

	return (
		<>
			<h1>{t("page2.title")}</h1>
			<p>{t("page2.welcome")}</p>
	
		</>
	);
}


export default Page2;
